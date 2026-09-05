# Rituals and Rules of Sharing — transcription review

Digital edition: `/texts/rituals-and-rules-of-sharing`.
Source: four supplied photographs of *Garageland, Issue XV*, Corinna Spencer.
The complete HTML transcription is in
`app/texts/rituals-and-rules-of-sharing/page.tsx`; this document records the source
checks and unresolved readings rather than maintaining a second transcript.

## Source order

All four source files are in the user's Downloads folder, with the common prefix
`WhatsApp Image 2026-09-03 at 21.51.41`:

1. `-4.jpeg`: printed page 30 — title, standfirst, opening artwork and sideways caption.
2. `-3.jpeg`: printed page 31 — complete two-column interview and exhibition note.
3. `.jpeg` (no suffix): page 32 by spread order — full-page portrait and truncated caption.
4. `-2.jpeg`: printed page 33 — two artwork reproductions and captions.

The original PDF preserves these JPEGs byte for byte in that order. It has no
OCR/text layer, additional cover or reconstructed content.

## Transcription checked against the photographs

The body was transcribed manually and compared against enlarged crops of both
columns of page 31. The column break falls within OB's paragraph: “the power” at
the foot of the left column continues “of art. It’s about time…” at the top of
the right. These are joined into one paragraph in the digital edition.

The ten explicit speaker labels are, in order:
JC, OB, JC, JC, OB, JC, OB, JC, JC, OB.

The three paragraphs beginning “The paintings are not based…”, “Art history…”
and “We are in our 30s…” remain one JC contribution. The standfirst, unlabelled
editorial paragraphs, paragraph breaks and final exhibition notice are retained.
The artwork insertions do not change the relative order of the article text.

Printed wording is retained, including “Olly”, “Alan Welsford”, “two-person job”,
“stop frame animation”, “James’ techniques” and “relax and hurry up”. No prose was
paraphrased, and awkward punctuation/grammar was not silently rewritten. Printed
line-wrap hyphenation such as “some-times” is joined as “sometimes”. Line breaks,
spacing and typography are adapted to HTML. The interview's exhibition dates are
historical text, not a newly inferred publication date.

## Readings requiring review

- **Opening artwork caption (page 30):** “Oliver” and “2013”, and “oil on canvas”,
  are readable. The rest of the title looks like “Klaws”, but the photograph is
  too blurred for a confident reading. The dimensions also need confirmation
  (they appear to be 50 × 60 cm). The digital caption explicitly says
  `Oliver [title unclear], 2013` and `oil on canvas, [dimensions unclear]`.
  The tentative readings have not been substituted into the article.
- **Portrait caption (page 32):** “Heads and Haircuts, 2013” is visible. The next
  line is outside the supplied photograph. Its medium/dimensions have not been
  inferred from the painting data or from other captions.
- **Unlabelled continuation (page 31):** “The longevity of this collaborative
  relationship…” starts a new paragraph at the same indentation as the preceding
  JC contribution, with no new label. That indentation/continuation is preserved;
  no extra speaker label has been invented. Its attribution is implicit in print,
  not independently confirmed. The digital edition includes an editorial note.

The remaining body text was readable in the enlarged photographs; no other
unresolved word readings were identified. These uncertainties remain visible in
the article and should be reviewed before publication.

## Artwork images

- Opening artwork: crop of page 30; title and dimensions remain flagged above.
- *Heads and Haircuts*, 2013: uses the matching high-resolution original already
  in `public/paintings/ollie-clapping.JPG`. The printed title is retained instead
  of replacing it with the site's collection title. This substitution is noted
  beneath the image.
- *James Doing the Machoman*, 2013, oil on canvas, 50 × 60 cm: crop from the top
  of page 33. Printed spelling/capitalisation preserved.
- *Jimmy Clapping*, 2013, oil on canvas, 30 × 41 cm: crop from the bottom of page
  33. The printed pose differs from the site's Jimmy Clapping trigger image, so
  that original has not been substituted for this reproduction.

The three crops are under `public/texts/rituals-and-rules-of-sharing/`. They exclude
magazine text. Four-point perspective correction straightens the photographed
artwork edges without colour edits, retouching or generative image processing.
The page 33 output proportions follow the readable printed dimensions. The
opening crop follows the photographed artwork's approximately 6:5 proportions;
its uncertain caption dimensions were not treated as established metadata.

Crop corner coordinates in the 1200 × 1600 source photographs (top left, top
right, bottom right, bottom left), retained for reproducibility:

- Opening: (139,736), (704,730), (708,1215), (126,1215); output 576 × 480.
- Machoman: (463,27), (1128,37), (1167,589), (496,608); output 600 × 500.
- Jimmy Clapping: (125,825), (619,800), (656,1465), (153,1501); output 510 × 697.

The original publication PDF is untouched by these crop operations.

## Publication decision

No permission to republish has been established by this implementation. Deploying
unchanged would expose the complete article as both HTML at
`https://superpaintings.co.uk/texts/rituals-and-rules-of-sharing` and the original
scan at `https://superpaintings.co.uk/texts/rituals-and-rules-of-sharing.pdf`.
Removing a PDF link alone would not make its file in `public/` private.
Nothing has been committed, pushed or deployed as part of this work.
