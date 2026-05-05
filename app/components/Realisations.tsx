"use client";
const projects = [
  {
    title: "Unboxing & démo",
    desc: "Présentation naturelle d'une app de productivité. Mise en avant des fonctionnalités clés en situation réelle.",
    tags: ["TikTok", "Instagram Reels"],
    duration: "30s",
    emoji: "📱",
    color: "#7c6af7",
  },
  {
    title: "Review authentique",
    desc: "Test complet d'un accessoire connecté avec comparaison before/after et verdict honnête.",
    tags: ["Amazon", "Review"],
    duration: "60s",
    emoji: "⌚",
    color: "#c084fc",
  },
  {
    title: "Témoignage utilisateur",
    desc: "Retour d'expérience crédible sur un outil SaaS. Ton naturel, cas d'usage concrets, résultats mesurables.",
    tags: ["Landing page", "Témoignage"],
    duration: "45s",
    emoji: "💼",
    color: "#e879f9",
  },
  {
    title: "Hook + Storytelling",
    desc: "Hook accrocheur en 3 secondes, storytelling émotionnel, CTA clair. Optimisé pour la conversion.",
    tags: ["Meta Ads", "Conversion"],
    duration: "15s",
    emoji: "💳",
    color: "#7c6af7",
  },
  {
    title: "Tutorial format court",
    desc: "Comment présenter une plateforme complexe de façon simple, en moins d'une minute, avec engagement maximal.",
    tags: ["Tutorial"],
    duration: "55s",
    emoji: "🎓",
    color: "#c084fc",
  },
  {
    title: "Lifestyle integration",
    desc: "Intégration du produit dans un quotidien réel. L'authenticité comme argument de vente principal.",
    tags: ["Lifestyle"],
    duration: "40s",
    emoji: "🏠",
    color: "#e879f9",
  },
];

const videos = [
  {
    src: "https://res.cloudinary.com/ds3xmimnp/video/upload/v1777991292/adopte1_ok_ovdwsf.mp4",
  },
  {
    src: "https://res.cloudinary.com/ds3xmimnp/video/upload/v1777991209/Tally01.1_ok_ksi1w9.mp4",
  },
  {
    src: "https://res.cloudinary.com/ds3xmimnp/video/upload/v1777991225/weward01.2_ok_kcq578.mp4",
  }
];

export default function Realisations() {
  return (
    <section id="realisations" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "60px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div className="section-tag">Mes réalisations</div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800 }}>
              Des formats qui{" "}
              <span className="text-gradient">parlent d'eux-mêmes</span>
            </h2>
          </div>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "360px", lineHeight: 1.7 }}>
            Chaque projet est unique. Voici un aperçu des typologies de contenus que je crée.
          </p>
        </div>

        

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }} className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ padding: "28px", cursor: "default" }}>
              {/* Top */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)`,
                  border: `1px solid ${p.color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                }}>{p.emoji}</div>
                <div style={{
                  padding: "4px 12px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}>⏱ {p.duration}</div>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
                {p.title}
              </h3>

              {/* Desc */}
              <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "20px" }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "4px 10px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <h2 style={{ marginTop: "40px", marginBottom: "40px", fontWeight: "bold"}}>Quelques exemples de réalisations vidéo</h2>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "2em",
            }} 
            className="videos-grid"
          >
            {videos.map((v, i) => (
              <div 
                key={i} 
                className="card" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  padding: "0", 
                  cursor: "default", 
                  width: "350px", height: "700px",
                }}
              >
              {/* Video thumbnail */}
              <video
                src={v.src}
                controls
                muted
                playsInline
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
            ))}
          </div>
      </div>
    </section>
  );
}
