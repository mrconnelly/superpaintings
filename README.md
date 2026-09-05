# Super Paintings

Small Next.js site with a public painting collection and a phone camera viewer.
Use Node 20.9+ (Node 22 recommended): `npm ci`, `npm run dev`, `npm run build`.
All pages are prerendered; there are no API routes, accounts or database.

- `/paintings`: all four original paintings.
- `/paintings/[slug]`: large, uncropped original JPEG; no animation playback.
- `/ar-viewer`: camera tool for physical paintings or their images on another screen.

## Artwork and target mapping

`data/paintings.ts` is the shared source for both experiences. Images retain their
native dimensions. `aspectRatio` means animation plane **height / width**, matching
postal-art; it is intentionally separate from the original JPEG dimensions.

Copied on 2026-09-05 from postal-art's
`public/MemberArtVolumes/2026-001-super-paintings/`, with titles, indices and plane
ratios verified against `lib/artworks/memberArtVolumes.ts`:

| Target index | Painting | Source folder | Plane height / width |
| --- | --- | --- | --- |
| 0 | Jimmy Sleeping | page04 | 1.337 |
| 1 | Ollie Combing | page03 | 1.337 |
| 2 | Jimmy-Clapping | page02 | 1.3245 |
| 3 | Ollie-Clapping | page01 | 1.337 |

Each folder supplied its matching JPG and MP4, now under `public/paintings/`.
The existing `targets.mind` was copied unchanged. SHA-256:
`5d989bae267d3b5d1857671ec19f3e16bc9d06f9c3d254ed13dcdb5820ff334e`.
Never infer indices from display order. Treat the target binary and metadata as a
pair; recompilation can reorder targets. The data module rejects duplicate,
missing or out-of-range indices.

## AR implementation

`app/ar-viewer/page.tsx` passes the shared data into a static iframe document.
This isolates A-Frame's camera/canvas from the surrounding Next.js layout.
`public/ar/viewer.js` adapts postal-art's `public/ar/art-volume-viewer.html` colour
planes and muted inline video unlock/play/pause behaviour. Camera starts only
after the visitor taps Start camera. Losing a target pauses its video; leaving
the viewer stops the camera. There is no charcoal or paper-sampling code.

A-Frame 1.5.0 was copied from postal-art's installed distribution. MindAR 1.2.5
was downloaded from the exact jsDelivr package URL used by its viewer. Both are
served from `public/ar/vendor/`, with their licenses. No runtime dependency on
postal-art, GitHub, a media CDN or an artwork API. The existing site font import
still uses Google Fonts.

## Manual phone test

After deployment (these changes have not been deployed):

1. On a computer/tablet open `https://superpaintings.co.uk/paintings`.
2. Select **Jimmy Sleeping** and keep the complete painting visible.
3. On a phone open `https://superpaintings.co.uk/ar-viewer`.
4. Tap **Start camera**, allow access, and point at the painting on the other screen.
5. The **Jimmy Sleeping** animation should appear over that painting.
6. Repeat individually with **Ollie Combing**, **Jimmy-Clapping**, and
   **Ollie-Clapping**. Each must show its own matching animation, never another work.
7. Move away: animation should disappear/pause. Return: it should play again.
8. Repeat against each physical painting available; check alignment and proportions,
   particularly the sleeping/combing works whose source JPEG and plane ratios differ.

Use phone Safari and Chrome where available. Test denied camera permission and
leaving/reopening the viewer. Keep the whole artwork visible, avoid glare, hold
steady and vary distance. Phone camera access requires HTTPS; a local HTTP LAN
address is insufficient. A build or simulated target event does not prove recognition.

## Cleanup

Removed the unused `public_html/` legacy site (270 tracked files), the placeholder
`data/archive.ts` and `components/archive-card.tsx`, and the three superseded
`public/archive/frame-01.jpg` through `frame-03.jpg`. The original homepage film,
poster, detail and logo remain in use. The homepage's existing collection section
now uses real paintings; its other sections retain their design.

## Verification performed

- Production build passed using Node 22.23.1; all routes are static/SSG.
- TypeScript (`tsc --noEmit`), JavaScript syntax and `git diff --check` passed.
- Compared all four metadata entries to current postal-art source and all nine
  copied artwork files byte for byte. Decoded the target binary with MindAR:
  four targets, in the expected order, with matching original-image dimensions.
- Focused local Chrome checks passed for the collection, all four painting pages,
  JPEG decoding, all eight media URLs, mobile overflow and camera-viewer startup.
- A synthetic camera loaded the targets; simulated found/lost events played the
  matching video and paused it for every target. Closing returned to Paintings.
  No console errors were observed. Denied permission showed a recoverable message.
- Real phone recognition and physical/screen overlay alignment remain manual tests.

The default shell's Node 18 could not run this Next.js build. Cached Chromium was
incompatible with this macOS version; browser checks used installed Chrome.
