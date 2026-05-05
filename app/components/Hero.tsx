"use client";

export default function Hero() {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
      }}
    >
      {/* Background elements */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,106,247,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 32px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        width: "100%",
      }} className="hero-grid">

        {/* Left: Text */}
        <div>
          <div className="section-tag animate-fade-up">
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            Disponible pour collaborations
          </div>

          <h1 className="animate-fade-up-1" style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, marginBottom: "24px", lineHeight: 1.05 }}>
            Du contenu tech{" "}
            <span className="text-gradient">qui convertit</span>
            <br />vraiment.
          </h1>

          <p className="animate-fade-up-2" style={{
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "480px",
          }}>
            Je crée des vidéos UGC authentiques pour les marques tech. Des contenus pensés pour engager, convaincre et convertir — sans paraître publicitaires.
          </p>

          <div className="animate-fade-up-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#realisations" onClick={(e) => handleAnchor(e, "#realisations")} className="btn-primary">
              <span>Voir mes réalisations</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" onClick={(e) => handleAnchor(e, "#contact")} className="btn-ghost">
              <span>Me contacter</span>
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-4" style={{
            display: "flex",
            gap: "40px",
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid var(--border)",
          }}>
            {[
              { value: "30%", label: "Conversions en plus" },
              { value: "10+", label: "Marques tech" },
              { value: "98%", label: "Satisfaction client" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "6px", letterSpacing: "0.02em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-visual">
          <div className="animate-float" style={{
            position: "relative",
            width: "380px",
            height: "480px",
          }}>
            {/* Main card */}
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 60px rgba(124,106,247,0.1)",
            }}>
              <img src="/taf.jpg" 
                alt="Portrait d'Anaïs" 
                style={{ 
                  width: "80%", 
                  position: "absolute",
                  top: -100,
                  left: 35,
                }} 
              />
  
                {/* Scan line */}
                <div style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, rgba(124,106,247,0.6), transparent)",
                  animation: "scan 3s linear infinite",
                }} />
                <style>{`
                  @keyframes scan {
                    0% { top: 0; }
                    100% { top: 100%; }
                  }
                `}</style>
              {/* </div> */}

              {/* Card bottom info */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", background: "var(--surface)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "12px",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem",
                  }}>✦</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem" }}>Anaïs BERTON</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>UGC Creator · Tech Specialist</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {["Tech", "SaaS", "Apps", "Gadgets"].map(tag => (
                    <span key={tag} style={{
                      padding: "4px 10px",
                      background: "var(--accent-soft)",
                      border: "1px solid rgba(124,106,247,0.2)",
                      borderRadius: "100px",
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{
              position: "absolute",
              top: "20px",
              right: "-20px",
              padding: "10px 16px",
              background: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: "100px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#4ade80",
              whiteSpace: "nowrap",
              backdropFilter: "blur(12px)",
            }}>
              ✓ Livraison 72h
            </div>
            <div style={{
              position: "absolute",
              bottom: "140px",
              left: "-24px",
              padding: "10px 16px",
              background: "rgba(124,106,247,0.1)",
              border: "1px solid rgba(124,106,247,0.3)",
              borderRadius: "100px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              whiteSpace: "nowrap",
              backdropFilter: "blur(12px)",
            }}>
              ★ 5.0
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
