"use client";

const comparison = [
  {
    aspect: "Coût de production",
    ugc: "Accessible & rapide",
    pub: "Budget élevé, délais longs",
    ugcIcon: "✓",
    pubIcon: "~",
  },
  {
    aspect: "Authenticité perçue",
    ugc: "Forte — vrai utilisateur",
    pub: "Polissé, parfois distant",
    ugcIcon: "✓",
    pubIcon: "~",
  },
  {
    aspect: "Performance sur les feeds",
    ugc: "Natif, non intrusif",
    pub: "Reconnu comme pub, skippé",
    ugcIcon: "✓",
    pubIcon: "✗",
  },
  {
    aspect: "Taux de conversion",
    ugc: "Jusqu'à 4× supérieur",
    pub: "Standard",
    ugcIcon: "✓",
    pubIcon: "~",
  },
  {
    aspect: "Confiance sociale",
    ugc: "Crédibilité du pair",
    pub: "Crédibilité de la marque",
    ugcIcon: "✓",
    pubIcon: "~",
  },
  {
    aspect: "Itération & test",
    ugc: "Rapide, facile à décliner",
    pub: "Coûteux à reprendre",
    ugcIcon: "✓",
    pubIcon: "✗",
  },
];

export default function UGCvsPublicite() {
  return (
    <section
      id="ugc-vs-pub"
      style={{
        padding: "120px 40px",
        background: "var(--bg2)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 24,
          fontWeight: 500,
        }}>
          — UGC vs Publicité Traditionnelle
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="ugc-header-grid">
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}>
            Pourquoi l&apos;UGC surpasse la pub classique en 2025.
          </h2>
          <p style={{
            color: "var(--muted)",
            lineHeight: 1.8,
            fontWeight: 300,
            paddingTop: 8,
          }}>
            Les consommateurs font davantage confiance à un vrai utilisateur qu&apos;à une production corporate. L&apos;UGC est la réponse à un marché publicitaire saturé où l&apos;authenticité est devenue la nouvelle rareté.
          </p>
        </div>

        {/* Tableau comparatif */}
        <div style={{ marginTop: 64, overflowX: "auto" }}>
          {/* Header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 1.5fr",
            gap: 0,
            marginBottom: 2,
          }}>
            <div style={{ padding: "16px 24px" }} />
            <div style={{
              padding: "16px 24px",
              background: "rgba(200,242,97,0.08)",
              borderRadius: "6px 0 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "var(--accent)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textAlign: "center",
              border: "1px solid rgba(200,242,97,0.15)",
              borderBottom: "none",
            }}>
              ✦ UGC
            </div>
            <div style={{
              padding: "16px 24px",
              background: "var(--surface)",
              borderRadius: "0 6px 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "var(--muted)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textAlign: "center",
              border: "1px solid var(--border)",
              borderBottom: "none",
              borderLeft: "none",
            }}>
              Pub Classique
            </div>
          </div>

          {comparison.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 1.5fr",
                gap: 0,
                marginBottom: 2,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <div style={{
                padding: "20px 24px",
                background: "var(--surface)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--text)",
                borderRadius: i === comparison.length - 1 ? "0 0 0 6px" : 0,
              }}>
                {row.aspect}
              </div>
              <div style={{
                padding: "20px 24px",
                background: "rgba(200,242,97,0.05)",
                border: "1px solid rgba(200,242,97,0.12)",
                borderTop: "none",
                borderRight: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1rem" }}>{row.ugcIcon}</span>
                <span style={{ color: "var(--text)", fontSize: "0.85rem", fontWeight: 300 }}>{row.ugc}</span>
              </div>
              <div style={{
                padding: "20px 24px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderRadius: i === comparison.length - 1 ? "0 0 6px 0" : 0,
              }}>
                <span style={{ color: row.ugcIcon === "✗" ? "#888" : "var(--muted)", fontWeight: 700, fontSize: "0.9rem" }}>{row.pubIcon}</span>
                <span style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300 }}>{row.pub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div style={{
          marginTop: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: "40px",
          background: "var(--surface)",
          borderRadius: 8,
          border: "1px solid var(--border)",
          flexWrap: "wrap",
          textAlign: "center",
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)" }}>
            Prête à booster vos conversions avec l&apos;UGC ?
          </span>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              background: "var(--accent)",
              padding: "12px 28px",
              borderRadius: 4,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Discutons →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ugc-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
