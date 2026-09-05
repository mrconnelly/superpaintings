# Historical source photograph comparison

**Current website decision:** all four paintings now use their original `triggerImage` photographs on the homepage, collection, detail pages and social previews. Enhanced derivatives and their preparation script have been removed to prioritise visual continuity with AR animations. The sheets below preserve the earlier source comparison; “current displayImage” in their labels refers to the version at the time of that review, not the website today.

These sheets compare the files available at the time of that review. Original and display photographs are reduced to fit the same 426 × 516 review panels; the matching Trebuchet photograph is shown at its native size. Proportions and complete file framing are retained. There are no additional colour, exposure, sharpening or perspective adjustments. PNG sheets avoid another lossy JPEG save.

| Painting / comparison | Sharpness | Colour and exposure | Square-on view | Overall assessment |
| --- | --- | --- | --- | --- |
| [Clap Your Hands (Ollie)](ollie-clapping.png) | Original and display effectively tied at this viewing size; mild sharpening adds no source detail. | Display has slightly deeper dark tones; the pale, washed appearance remains. Colour balance is effectively unchanged. | Identical framing and geometry; both nearly square-on. | Original remains the best available source. Display is only a minor presentation variation. No matching Trebuchet reproduction found. |
| [Clap Your Hands (Jimmy)](jimmy-clapping.png) | Effectively tied; display does not resolve additional paint detail. | Display lifts the face/background slightly, but the dark garment and overall cast remain. A small visibility improvement, not a better photograph. | Identical; both nearly square-on. | Original remains the best available source; the current display copy has only a slight exposure advantage. No matching Trebuchet reproduction found. |
| [Comb Your Hair (Ollie)](ollie-combing.png) | Trebuchet looks crisper at small size because of stronger contrast, but has visibly coarse/soft fine detail. Original/display retain much more detail for a large view: 3267 × 3916 versus 426 × 516. | Trebuchet has warmer hair, stronger separation and much less of the pale green/grey veil. It is visually stronger at this size, but dark areas lose separation. Faithful paint colour cannot be established without the artwork or a calibrated reference. Display differs little from original. | Both sources appear approximately square-on. Original shows the canvas perimeter; Trebuchet is tighter to the painted image, making its geometry harder to assess. No clear perspective winner. | Trebuchet is the stronger small reproduction for tonal impact, but not a clear overall replacement for a huge painting page at its available resolution. Retain current selection pending review. |
| [Sleep (Jimmy)](jimmy-sleeping.png) | Effectively tied; the display version does not recover photographic detail. | Display is marginally brighter in the face and hands; the same muted colour and illumination remain. | Identical; both nearly square-on. | Original remains the best available source; display offers only a modest tonal lift. No matching Trebuchet reproduction found. |

## Identity check

The downloaded `comb-your-hair.jpg` matches **Comb Your Hair (Ollie)** visually: the distinctive hair streaks and projecting strands, facial profile, finger positions, white paint shapes in the hand, and diagonal lower-right clothing strokes correspond. The identification relies on those painted details, not merely the article image label or the sitter/action.

The other downloads are `macho-man.jpg` (a different red-shirted, raised-fists painting) and `installation.jpg`. The installation shows a different raised-hand portrait and two group-head compositions; none is an identifiable reproduction of the other three current paintings. These are not substituted into their comparison sheets.

The Trebuchet image is locally preserved at `public/texts/superpaintings-at-transition-gallery/comb-your-hair.jpg`. Its source is https://www.trebuchet-magazine.com/superpaintings-at-transition-gallery/; this review uses the already downloaded files, not newly retrieved versions.

## Decision and verification

No display selection or website file changed in this review. No further enhancement was performed. The only repository additions are these four comparison sheets and this report. SHA-256 checks against the start of this review confirm every file under `app/`, `components/`, `data/` and `public/` is unchanged, including original triggers, display copies, Trebuchet downloads, videos and `targets.mind`.

No build or browser suite is needed for documentation-only additions. No commit or push.
