# Painting display photographs

Each comparison shows the unchanged trigger photograph on the left and the website display copy on the right, at the same scale.

- [Clap Your Hands (Ollie)](ollie-clapping.jpg)
- [Clap Your Hands (Jimmy)](jimmy-clapping.jpg)
- [Comb Your Hair (Ollie)](ollie-combing.jpg)
- [Sleep (Jimmy)](jimmy-sleeping.jpg)

Display copies live in `public/paintings/display/`. The shared `displayImage` field is used by the homepage painting grid, collection and detail-page social previews. Large detail-page images and their full-resolution links use the original `triggerImage` to preserve the source appearance when viewing AR. `triggerImage`, target indices, MP4s and `targets.mind` retain their original values/bytes. Historical article reproductions are outside this change.

## Trebuchet-guided revision: Comb Your Hair (Ollie)

[Original / adjusted high-resolution original / Trebuchet comparison](ollie-combing-trebuchet-match.png). The `ollie-combing.jpg` display copy now uses RGB level curves guided by the matching Trebuchet reproduction, blended at 85%, plus a small yellow-to-warm colour adjustment. It is generated directly from the untouched 3267 × 3916 original. No sharpening, resizing, cropping, denoising or generative processing is applied to this revision. JPEG quality 98 with 4:4:4 sampling retains fine photographic detail; this is a colour/tone interpretation of the reference, not a calibrated colour match. Regenerate only this painting with `node scripts/prepare-painting-display.cjs ollie-combing`. The other three display files remain unchanged.

The following records the initial processing; its Comb Your Hair settings are superseded by the revision above.

## Initial processing

Reproduce with Node 22: `node scripts/prepare-painting-display.cjs` from the repository root. Uses the existing Sharp installation; no new dependency or image service.

Conservative per-image luminance curves improve tonal separation, with a modest midtone lift for the darker portraits. RGB ratios are preserved by the tone adjustment. A mild sharpening pass (sigma 0.6, flat-area strength 0.3, edge strength 0.7) follows. Outputs are full-resolution sRGB JPEGs, quality 95, 4:4:4 chroma sampling.

No cropping, perspective warping, resampling, denoising, white-balance guessing, generative processing or reconstruction was used. The source photographs already frame the canvases closely; further cropping risks losing painted edges. No colour reference is available, so these are conservative display improvements, not colour-calibrated reproductions. Existing photographic softness, glare and illumination variation cannot all be removed without compromising the record.

| Painting | Width × height | Curve black/white anchors | Midtone exponent |
| --- | --- | --- | --- |
| Clap Your Hands (Ollie) | 2662 × 3559 | 12 / 250 | 1.01 |
| Clap Your Hands (Jimmy) | 2558 × 3388 | 5 / 250 | 0.90 |
| Comb Your Hair (Ollie) | 3267 × 3916 | 9 / 250 | 0.97 |
| Sleep (Jimmy) | 3379 × 4070 | 7 / 250 | 0.93 |

The tonal curve has a soft toe and shoulder rather than clipping at those anchors. Comparison images are review artifacts, not public website assets.

SHA-256 comparison against the pre-edit files confirms all four source JPEGs, four animations and the target binary remain byte-for-byte unchanged. Screen-based recognition of the enhanced copies still needs a physical phone check; a website rendering check does not establish AR recognition.
