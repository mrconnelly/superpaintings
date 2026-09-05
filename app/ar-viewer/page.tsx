import type { Metadata, Viewport } from "next";
import { paintings, paintingTargets } from "@/data/paintings";

export const metadata: Metadata = { title: "AR Viewer", description: "Point your phone at a Super Painting to see it move." };

export const viewport: Viewport = { themeColor: "#000000" };

export default function ARViewerPage() {
  // Isolate A-Frame's full-screen camera/canvas and lifecycle from the site shell.
  // The static document receives the very same data used by the painting pages.
  const config = JSON.stringify({ paintings, targetFile: paintingTargets }).replace(/</g, "\\u003c");
  const document = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Super Paintings — AR Viewer</title><link rel="stylesheet" href="/ar/viewer.css">
<script id="painting-data" type="application/json">${config}</script>
<script defer src="/ar/vendor/aframe-1.5.0.min.js"></script>
<script defer src="/ar/vendor/mindar-image-aframe-1.2.5.prod.js"></script>
<script defer src="/ar/viewer.js"></script></head>
<body>
<main id="intro">
<p class="wordmark">Super Paintings</p><h1>Point your phone at a Super Painting.</h1>
<p>The original painting or its image on another screen.</p>
<button id="start" disabled>Loading viewer…</button>
<p id="status" role="status" aria-live="polite"></p>
<p><a href="/paintings" target="_top">Paintings</a></p>
<details><summary>If nothing happens</summary><p>Keep the whole painting visible, avoid glare and hold your phone steady. Move slightly closer or further away. Refresh this viewer to try again.</p></details>
<noscript>Enable JavaScript to use the camera viewer.</noscript>
</main>
<div id="camera-tools" hidden><a href="/paintings" target="_top">Close camera</a><p id="camera-status" role="status">Point at a Super Painting</p></div>
</body></html>`;
  return <iframe className="ar-frame" title="Super Paintings camera viewer" srcDoc={document} allow="camera; autoplay; fullscreen" />;
}
