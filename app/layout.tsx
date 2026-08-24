import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://superpaintings.co.uk"),
  title: {
    default: "Super Paintings — The Living Painting Archive",
    template: "%s — Super Paintings",
  },
  description:
    "Oil paintings animated frame by frame and brought to life through augmented reality. An archive by Oliver Bancroft and James Connelly.",
  openGraph: {
    title: "Super Paintings — The Living Painting Archive",
    description: "Old masters meet disco moves in paint, film and augmented reality.",
    type: "website",
    images: [{ url: "/archive/hero-poster.png", width: 1920, height: 1080 }],
  },
  icons: { icon: "/archive/mark.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#edff00",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
