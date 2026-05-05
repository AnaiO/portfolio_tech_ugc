import Link from "next/link";

export const metadata = {
  title: "Mentions légales — Anaïs BERTON",
};

export default function MentionsLegales() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", padding: "120px 32px 80px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
          marginBottom: "40px",
          transition: "color 0.2s",
        }}>
          ← Retour au site
        </Link>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, marginBottom: "8px" }}>
          Mentions légales
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "56px", fontSize: "0.9rem" }}>
          Conformément aux articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
        </p>

        {[
          {
            title: "1. Éditeur du site",
            content: `Nom : Anaïs BERTON
Statut : Micro-entreprise / Auto-entrepreneur
Email : ugc.anaio@gmail.com
Le site est édité à titre personnel dans le cadre d'une activité de création de contenus UGC.`,
          },
          {
            title: "2. Hébergeur",
            content: `Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723
États-Unis
Site : https://vercel.com`,
          },
          {
            title: "3. Propriété intellectuelle",
            content: `L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable et écrite d'Anaïs BERTON.`,
          },
          {
            title: "4. Responsabilité",
            content: `Les informations contenues sur ce site sont données à titre indicatif. Anaïs BERTON ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.`,
          },
          {
            title: "5. Liens hypertextes",
            content: `Ce site peut contenir des liens vers d'autres sites web. Anaïs BERTON n'est pas responsable du contenu de ces sites tiers ni des dommages pouvant résulter de leur utilisation.`,
          },
          {
            title: "6. Droit applicable",
            content: `Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de France.`,
          },
        ].map(section => (
          <div key={section.title} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "14px", color: "var(--accent)" }}>
              {section.title}
            </h2>
            <div style={{
              padding: "24px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
