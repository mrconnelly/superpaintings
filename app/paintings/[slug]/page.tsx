import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARHandoff } from "@/components/ar-handoff";
import { SiteHeader } from "@/components/site-header";
import { paintings } from "@/data/paintings";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return paintings.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const painting = paintings.find((item) => item.slug === slug);
  return { title: painting?.title ?? "Painting", openGraph: painting ? { images: [{ url: painting.triggerImage, width: painting.width, height: painting.height, alt: painting.title }] } : undefined };
}

export default async function PaintingPage({ params }: Props) {
  const { slug } = await params;
  const painting = paintings.find((item) => item.slug === slug);
  if (!painting) notFound();
  return (
    <main className="painting-site">
      <SiteHeader />
      <article className="painting-page">
        <div className="painting-heading"><a href="/paintings">← Paintings</a><h1>{painting.title}</h1></div>
        <a className="original-painting" href={painting.triggerImage} aria-label={`Open full-resolution image of ${painting.title}`}>
          <img src={painting.triggerImage} alt={painting.title} width={painting.width} height={painting.height} fetchPriority="high" />
        </a>
        <ARHandoff />
      </article>
    </main>
  );
}
