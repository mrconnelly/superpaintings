export type Painting = {
  slug: string;
  title: string;
  triggerImage: string;
  animation: string;
  width: number;
  height: number;
  /** Animation plane height / width, matching postal-art (not the JPEG ratio). */
  aspectRatio: number;
  targetIndex: number;
};

export const paintingTargets = "/paintings/targets.mind";

// Copied from postal-art/lib/artworks/memberArtVolumes.ts on 2026-09-05.
// Indices belong to this exact targets.mind binary, NOT the array/display order.
// Preserve the binary and mapping together; never infer indices from array position.
export const paintings: readonly Painting[] = [
  {
    slug: "ollie-clapping",
    title: "Clap Your Hands (Ollie)",
    triggerImage: "/paintings/ollie-clapping.JPG",
    animation: "/paintings/ollie-clapping.mp4",
    width: 2662,
    height: 3559,
    aspectRatio: 1.337,
    targetIndex: 3,
  },
  {
    slug: "jimmy-clapping",
    title: "Clap Your Hands (Jimmy)",
    triggerImage: "/paintings/jimmy-clapping.JPG",
    animation: "/paintings/jimmy-clapping.mp4",
    width: 2558,
    height: 3388,
    aspectRatio: 1.3245,
    targetIndex: 2,
  },
  {
    slug: "ollie-combing",
    title: "Comb Your Hair (Ollie)",
    triggerImage: "/paintings/ollie-combing.JPG",
    animation: "/paintings/ollie-combing.mp4",
    width: 3267,
    height: 3916,
    aspectRatio: 1.337,
    targetIndex: 1,
  },
  {
    slug: "jimmy-sleeping",
    title: "Sleep (Jimmy)",
    triggerImage: "/paintings/jimmy-sleeping.JPG",
    animation: "/paintings/jimmy-sleeping.mp4",
    width: 3379,
    height: 4070,
    aspectRatio: 1.337,
    targetIndex: 0,
  },
];

const indices = paintings.map((painting) => painting.targetIndex);
if (new Set(indices).size !== paintings.length || indices.some((index) => !Number.isInteger(index) || index < 0 || index >= paintings.length)) {
  throw new Error("Painting target indices must be unique and cover the bundled target file.");
}
