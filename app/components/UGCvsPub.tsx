"use client";
const ugcItems = [
  {
    icon: "🤝",
    title: "Authenticité perçue",
    ugc: "Ressemble à une recommandation naturelle d'un vrai utilisateur",
    pub: "Clairement identifié comme publicité, méfiance instinctive",
  },
  {
    icon: "💰",
    title: "Coût de production",
    ugc: "Bien plus accessible, ROI rapide et mesurable",
    pub: "Budget élevé : agence, tournage, post-prod, diffusion",
  },
  {
    icon: "⚡",
    title: "Rapidité",
    ugc: "Livraison en 48-72h, itération simple",
    pub: "Semaines de production, validations multiples",
  },
  {
    icon: "📊",
    title: "Performances",
    ugc: "Taux d'engagement x3 en moyenne sur TikTok & Instagram",
    pub: "Skip rate élevé, coût par acquisition croissant",
  },
  {
    icon: "🔄",
    title: "Adaptabilité",
    ugc: "Déclinable facilement selon les plateformes et audiences",
    pub: "Rigide, difficile à modifier une fois produit",
  },
  {
    icon: "🧪",
    title: "Tests & itérations",
    ugc: "Facile de tester plusieurs angles, messages, hooks",
    pub: "Chaque version nécessite un nouveau budget",
  },
];

export default function UGCvsPub() {
  return (
    <section id="ugc-vs-pub" style={{ padding: "120px 0", position: "relative", background: "linear-gradient(180deg, transparent, rgba(124,106,247,0.03), transparent)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="section-tag" style={{ margin: "0 auto 20px" }}>UGC vs Publicité</div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, marginBottom: "20px" }}>
            Pourquoi l'UGC{" "}
            <span className="text-gradient">surpasse la pub traditionnelle</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            En 2026, les consommateurs font davantage confiance aux créateurs qu'aux marques. Voici pourquoi.
          </p>
        </div>

        {/* Header labels */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
          padding: "0 20px",
        }} className="ugc-header">
          <div />
          <div style={{
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "var(--accent)",
            padding: "10px",
            background: "var(--accent-soft)",
            border: "1px solid rgba(124,106,247,0.2)",
            borderRadius: "10px",
          }}>✦ UGC</div>
          <div style={{
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            padding: "10px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
          }}>Publicité classique</div>
        </div>

        {/* Comparison rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {ugcItems.map((item, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
              alignItems: "stretch",
            }} className="ugc-row">
              {/* Label */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}>
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</span>
              </div>

              {/* UGC */}
              <div style={{
                padding: "20px",
                background: "rgba(124,106,247,0.05)",
                border: "1px solid rgba(124,106,247,0.2)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.88rem",
                color: "var(--text)",
                lineHeight: 1.5,
              }}>
                <span style={{ color: "#4ade80", fontSize: "1.1rem", flexShrink: 0 }}>✓</span>
                {item.ugc}
              </div>

              {/* Pub */}
              <div style={{
                padding: "20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}>
                <span style={{ color: "#f87171", fontSize: "1.1rem", flexShrink: 0 }}>✗</span>
                {item.pub}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: "60px",
          padding: "48px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(124,106,247,0.12), rgba(192,132,252,0.08))",
          border: "1px solid rgba(124,106,247,0.2)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,106,247,0.15), transparent 70%)",
          }} />
          <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "12px" }}>
            Prête à tester l'UGC pour votre marque ?
          </h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "28px", fontSize: "1rem" }}>
            Discutons de votre projet — première consultation gratuite.
          </p>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }} className="btn-primary">
            <span>Démarrer un projet</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ugc-header { grid-template-columns: 1fr 1fr !important; }
          .ugc-header > div:first-child { display: none; }
          .ugc-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
