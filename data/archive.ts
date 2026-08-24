export type ArchiveItem = {
  number: string;
  title: string;
  movement: string;
  image: string;
  alt: string;
  note: string;
};

export const archiveItems: ArchiveItem[] = [
  {
    number: "01",
    title: "The Gesture",
    movement: "Comb your hair",
    image: "/archive/frame-01.jpg",
    alt: "A visitor holds a phone toward a painted portrait as its figure moves",
    note: "The painted figure crosses the boundary between portrait and performance.",
  },
  {
    number: "02",
    title: "The Reveal",
    movement: "Macho Man",
    image: "/archive/frame-02.jpg",
    alt: "A phone revealing an animated figure within an oil portrait",
    note: "A still canvas becomes a trigger: the phone completes the work.",
  },
  {
    number: "03",
    title: "The Portrait",
    movement: "Hands by your side",
    image: "/archive/frame-03.jpg",
    alt: "A dark oil portrait hanging on a gallery wall",
    note: "At rest, each work keeps the poised stillness of an old master.",
  },
];

export const movements = [
  "Clap your hands",
  "Walk",
  "Swim",
  "Ski",
  "Spray",
  "Sound your horn",
  "Macho Man",
  "Ring the bell",
  "Superman",
];
