"use client";
export default function APropos() {
  const skills = [
    { icon: "📱", label: "Vidéo mobile-first" },
    { icon: "🎯", label: "Script & storytelling" },
    { icon: "⚡", label: "Montage dynamique" },
    { icon: "🔊", label: "Voice-over naturel" },
    { icon: "💡", label: "Brief créatif" },
    { icon: "🚀", label: "Livraison rapide" },
  ];

  return (
    <section id="a-propos" style={{ padding: "120px 0", position: "relative" }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="apropos-grid">

          {/* Left visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Background decoration */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle at top right, rgba(124,106,247,0.1), transparent 70%)",
              }} />

              {/* Profile placeholder */}
              <div style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "14px",
                background: "linear-gradient(135deg, var(--surface-2) 0%, #1e1e30 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                border: "1px solid var(--border)",
                marginBottom: "24px",
                position: "relative",
                overflow: "hidden",
              }}>                
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)", zIndex: 1 }}>
                  Anaïs BERTON
                </div>
                <img src="/apropos1.jpg" alt="Portrait d'Anaïs" style={{ width: "80%", borderRadius: "10px", objectFit: "cover", border: "1px solid rgba(124,106,247,0.2)" }} />
                {/* Decorative circles */}

                <div style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "6px 16px",
                  background: "rgba(124,106,247,0.15)",
                  border: "1px solid rgba(124,106,247,0.3)",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  zIndex: 1,
                }}>UGC Creator · Tech</div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(10,10,15,0.4), transparent)" }} />
              </div>

              {/* Skills grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {skills.map(s => (
                  <div key={s.label} style={{
                    padding: "12px 14px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    fontWeight: 400,
                  }}>
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <div className="section-tag">À propos</div>

            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, marginBottom: "28px" }}>
              La tech, ma passion.<br />
              <span className="text-gradient">Le contenu, mon métier.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Passionnée de technologie depuis toujours, j'ai décidé de transformer cette expertise en contenu authentique et engageant. Je crée des vidéos UGC pour des marques tech qui veulent se démarquer sur les réseaux sociaux.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Mon approche ? Des vidéos qui ressemblent à une vraie recommandation d'une vraie utilisatrice — parce que c'est exactement ce que c'est. Je teste les produits, je les intègre dans mon quotidien, et je partage mon expérience de façon naturelle et convaincante.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Je travaille avec des startups, des scale-ups et des marques établies dans l'univers tech : applications mobiles, SaaS, gadgets, accessoires connectés, plateformes digitales…
              </p>
            </div>

            <div style={{ marginTop: "40px", padding: "24px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
                "La confiance, ça ne se simule pas."
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                — Philosophie créative
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apropos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
