import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PaintingGrid } from "@/components/painting-grid";

export const metadata: Metadata = { title: "Paintings", description: "Look at the original Super Paintings by Oliver Bancroft and James Connelly." };

export default function PaintingsPage() {
  return (
    <main className="painting-site">
      <SiteHeader />
      <div className="collection-page">
        <h1>Paintings</h1>
        <aside className="collection-ar-invitation" aria-labelledby="ar-invitation-heading">
          <div>
            <h2 id="ar-invitation-heading">Make the paintings move</h2>
            <p>Select a painting below to open it full size, then use your phone to make it move.</p>
            <a href="#how-it-works">How it works</a>
          </div>
          <a href="https://superpaintings.co.uk/ar-viewer" aria-label="Open the AR Viewer">
            <img src="/ar/viewer-qr.png" width={56} height={56} alt="QR code for https://superpaintings.co.uk/ar-viewer" />
          </a>
        </aside>
        <PaintingGrid />
        <section className="painting-instructions" id="how-it-works" aria-labelledby="movement-heading">
          <h2 id="movement-heading">How to see the paintings move</h2>
          <div className="painting-instruction-handoff">
            <p>On a computer or tablet, choose a painting above to see it large. Scan this code with your phone or open <a href="https://superpaintings.co.uk/ar-viewer">superpaintings.co.uk/ar-viewer</a>, tap Start camera and allow camera access. Point your phone at the painting on the other screen. When it is recognised, its animation will appear over it.</p>
            <a className="instruction-qr" href="https://superpaintings.co.uk/ar-viewer">
              <img src="/ar/viewer-qr.png" width={56} height={56} alt="QR code for https://superpaintings.co.uk/ar-viewer" loading="lazy" />
              <span>Open AR viewer</span>
            </a>
          </div>
          <p>Have an original Super Painting? Open the same AR Viewer on your phone and point it at your painting.</p>
          <details>
            <summary>If nothing happens</summary>
            <p>Keep the whole painting visible, avoid glare and hold your phone steady. Move slightly closer or further away. If needed, refresh the AR Viewer and try again.</p>
          </details>
        </section>
      </div>
    </main>
  );
}
