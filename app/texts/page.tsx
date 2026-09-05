import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { texts } from "@/data/texts";

export const metadata: Metadata = {
  title: "Texts",
  description: "Writing about James Connelly and Oliver Bancroft’s Super Paintings.",
};

export default function TextsPage() {
  return (
    <main className="painting-site">
      <SiteHeader />
      <div className="collection-page texts-page">
        <h1>Texts</h1>
        {texts.map((text) => (
          <article className="text-entry" key={text.slug} aria-labelledby={`${text.slug}-title`}>
            <a href={`/texts/${text.slug}`} aria-label={`Read ${text.title}`}>
              <img src={text.thumbnail} width={text.thumbnailWidth} height={text.thumbnailHeight} alt={text.thumbnailAlt} />
            </a>
            <div className="text-entry-copy">
              <h2 id={`${text.slug}-title`}><a href={`/texts/${text.slug}`}>{text.title}</a></h2>
              <p className="text-author">{text.author}</p>
              <p className="text-publication">{text.publication}</p>
              <p className="text-description">{text.description}</p>
              <a className="text-pdf-link" href={`/texts/${text.slug}`}>{text.linkLabel}</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
