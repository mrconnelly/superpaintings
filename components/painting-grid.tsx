import { paintings } from "@/data/paintings";

export function PaintingGrid() {
  return (
    <div className="painting-grid">
      {paintings.map((painting) => (
        <a className="painting-link" href={`/paintings/${painting.slug}`} key={painting.slug}>
          <img src={painting.triggerImage} alt={painting.title} width={painting.width} height={painting.height} loading="lazy" />
          <h2>{painting.title}</h2>
        </a>
      ))}
    </div>
  );
}
