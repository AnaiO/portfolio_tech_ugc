import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anaïs BERTON — UGC Creator Tech",
  description: "Créatrice de contenu UGC spécialisée dans la tech. Des vidéos authentiques qui convertissent.",
  keywords: ["UGC", "creator", "tech", "contenu", "vidéo", "marketing", "Anaïs Berton"],
  openGraph: {
    title: "Anaïs BERTON — UGC Creator Tech",
    description: "Créatrice de contenu UGC spécialisée dans la tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
