// Conventional, deterministic display derivatives. Never writes to AR source files.
// Run with Node 22: node scripts/prepare-painting-display.cjs
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.join(__dirname, '..');
// Trebuchet-guided RGB level anchors, blended at 85% to retain shadow separation.
const combingCurves = [[[0,0],[45,5],[55,12],[61,16],[77,28],[109,62],[143,114],[174,175],[187,201],[211,232],[255,255]],[[0,0],[43,5],[54,12],[59,16],[75,26],[105,49],[139,98],[172,163],[187,191],[213,223],[255,255]],[[0,0],[38,4],[47,10],[52,13],[64,23],[82,39],[105,79],[145,138],[161,164],[186,192],[255,255]]];
const recipes = [
  { slug: 'ollie-clapping', title: 'Clap Your Hands (Ollie)', black: 12, white: 250, gamma: 1.01 },
  { slug: 'jimmy-clapping', title: 'Clap Your Hands (Jimmy)', black: 5, white: 250, gamma: 0.90 },
  { slug: 'ollie-combing', title: 'Comb Your Hair (Ollie)', black: 9, white: 250, gamma: 0.97 },
  { slug: 'jimmy-sleeping', title: 'Sleep (Jimmy)', black: 7, white: 250, gamma: 0.93 },
];
(async () => {
  await fs.mkdir(path.join(root, 'public/paintings/display'), { recursive: true });
  await fs.mkdir(path.join(root, 'docs/painting-display-review'), { recursive: true });
  const selected = process.argv[2];
  if (selected && !recipes.some(recipe => recipe.slug === selected)) throw new Error('Unknown painting slug');
  for (const { slug, title, black, white, gamma } of recipes.filter(recipe => !selected || recipe.slug === selected)) {
    const source = path.join(root, 'public/paintings', slug + '.JPG');
    const destination = path.join(root, 'public/paintings/display', slug + '.jpg');
    const { data, info } = await sharp(source).toColourspace('srgb').removeAlpha().raw().toBuffer({ resolveWithObject: true });
    // A luminance-only curve: keep RGB ratios/hue; retain a soft toe and shoulder
    // instead of clipping either end to black/white. No local detail generation.
    const curve = (value) => {
      const x = Math.max(0, Math.min(1, (value - black) / (white - black)));
      if (value < black) return value * 0.45;
      if (value > white) return 251 + (value - white) * 4 / (255 - white);
      return black * 0.45 + (251 - black * 0.45) * Math.pow(x, gamma);
    };
    if (slug === 'ollie-combing') {
      const curves = combingCurves.map(points => Array.from({ length: 256 }, (_, x) => {
        let j = 1;
        while (j < points.length - 1 && points[j][0] < x) j++;
        const [x0, y0] = points[j - 1], [x1, y1] = points[j];
        return .15 * x + .85 * (y0 + (x - x0) * (y1 - y0) / (x1 - x0));
      }));
      for (let i = 0; i < data.length; i += 3) {
        const r = curves[0][data[i]], g = curves[1][data[i + 1]], b = curves[2][data[i + 2]];
        // Small conventional yellow-to-warm adjustment; neutral pixels unaffected.
        const yellow = Math.max(0, Math.min(r, g) - b);
        data[i] = Math.round(Math.min(255, r + .12 * yellow));
        data[i + 1] = Math.round(Math.max(0, g - .08 * yellow));
        data[i + 2] = Math.round(b);
      }
    } else for (let i = 0; i < data.length; i += 3) {
      const luminance = .2126 * data[i] + .7152 * data[i + 1] + .0722 * data[i + 2];
      const requested = luminance ? curve(luminance) / luminance : 1;
      const gain = Math.min(requested, 255 / Math.max(1, data[i], data[i + 1], data[i + 2]));
      for (let c = 0; c < 3; c++) data[i + c] = Math.round(data[i + c] * gain);
    }
    const output = sharp(data, { raw: info });
    if (slug !== 'ollie-combing') output.sharpen({ sigma: .6, m1: .3, m2: .7 });
    await output.withIccProfile('srgb').jpeg({ quality: slug === 'ollie-combing' ? 98 : 95, chromaSubsampling: '4:4:4' }).toFile(destination);
    const panels = await Promise.all([source, destination].map(file => sharp(file).resize({ width: 600, height: 800, fit: 'contain', background: '#f1f0eb' }).toBuffer()));
    const heading = Buffer.from(`<svg width="1240" height="80"><rect width="1240" height="80" fill="#f1f0eb"/><g font-family="sans-serif" fill="#222"><text x="20" y="28" font-size="20">${title}</text><text x="20" y="62" font-size="16">Before — original trigger photograph</text><text x="640" y="62" font-size="16">After — website display copy</text></g></svg>`);
    await sharp({ create: { width: 1240, height: 900, channels: 3, background: '#f1f0eb' } }).composite([{input:heading,left:0,top:0},{input:panels[0],left:20,top:80},{input:panels[1],left:640,top:80}]).jpeg({quality:92,chromaSubsampling:'4:4:4'}).toFile(path.join(root,'docs/painting-display-review',slug+'.jpg'));
    console.log(`${slug}: ${info.width} × ${info.height}`);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
