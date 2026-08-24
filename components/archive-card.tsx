import type { ArchiveItem } from "@/data/archive";

export function ArchiveCard({ item }: { item: ArchiveItem }) {
  return (
    <article className="archive-card">
      <div className="archive-image-wrap">
        {/* Native images keep these documentary frames faithful to the source film. */}
        <img src={item.image} alt={item.alt} className="archive-image" />
        <span className="card-number">{item.number}</span>
      </div>
      <div className="card-copy">
        <div>
          <p className="eyebrow">{item.movement}</p>
          <h3>{item.title}</h3>
        </div>
        <p>{item.note}</p>
      </div>
    </article>
  );
}
