import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { texts } from "@/data/texts";

const text = texts.find((entry) => entry.slug === "superpaintings-at-transition-gallery")!;

export const metadata: Metadata = {
  title: text.title,
  description: "Historical photographs accompanying Francesca Goodwin’s Trebuchet article, originally published on 7 June 2013.",
};

export default function SuperpaintingsAtTransitionGalleryPage() {
  return (
    <main className="painting-site">
      <SiteHeader />
      <article className="digital-essay">
        <header className="essay-header">
          <a className="essay-back" href="/texts">← Texts</a>
          <p className="essay-edition">Historical photographs · Trebuchet</p>
          <h1 className="trebuchet-title">{text.title}</h1>
          <p className="essay-author">{text.author}</p>
          <p className="essay-standfirst">{text.description}</p>
          <p className="essay-author">Originally published by Trebuchet, <time dateTime={text.datePublished}>7 June 2013</time></p>
          <a className="essay-source" href={text.sourceUrl}>View original article →</a>
        </header>

        <div className="essay-prose">
          <p>Photographs from the original Trebuchet page are preserved below. Read Francesca Goodwin’s article at the original-source link above.</p>
        </div>

        {text.photographs.map((photograph) => (
          <figure className="essay-figure" style={{ maxWidth: photograph.width }} key={photograph.src}>
            <img src={photograph.src} width={photograph.width} height={photograph.height} alt={photograph.alt} loading="lazy" />
            <figcaption>Trebuchet image label: <em>{photograph.label}</em></figcaption>
          </figure>
        ))}

        <aside className="essay-editorial" aria-label="Image attribution">
          <p>Photographs from Trebuchet’s original article. No separate photographer credit is stated on the source page.</p>
          <a href={text.sourceUrl}>View original article →</a>
        </aside>
      </article>
    </main>
  );
}
