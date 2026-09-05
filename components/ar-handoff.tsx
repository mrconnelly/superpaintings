const viewerUrl = "https://superpaintings.co.uk/ar-viewer";

export function ARHandoff({ title = "See this painting move" }: { title?: string }) {
  return (
    <div className="ar-handoff">
      <div>
        <h2>{title}</h2>
        <p>Scan with your phone, then point it at the painting.</p>
        <a href={viewerUrl}>superpaintings.co.uk/ar-viewer</a>
      </div>
      <a href={viewerUrl} aria-label="Open the AR Viewer">
        <img src="/ar/viewer-qr.png" width={56} height={56} alt="QR code for https://superpaintings.co.uk/ar-viewer" loading="lazy" />
      </a>
    </div>
  );
}
