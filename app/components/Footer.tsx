"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "48px 0 32px",
      background: "var(--surface)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", marginBottom: "32px" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", marginBottom: "6px" }}>
              <span style={{ color: "var(--text)" }}>Anaïs</span>
              <span style={{ color: "var(--accent)", marginLeft: "6px" }}>BERTON</span>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>UGC Creator · Tech Specialist</div>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              { label: "Accueil", href: "#accueil" },
              { label: "À propos", href: "#a-propos" },
              { label: "UGC vs Publicité", href: "#ugc-vs-pub" },
              { label: "Réalisations", href: "#realisations" },
              { label: "Contact", href: "#contact" },
            ].map(link => (
              <a key={link.href} href={link.href} onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }} style={{ fontSize: "0.85rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--text)"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-muted)"}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ height: "1px", background: "var(--border)", marginBottom: "24px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {year} Anaïs BERTON — Tous droits réservés
          </div>

          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="/mentions-legales" style={{ transition: "color 0.2s" }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--text)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-muted)"}
            >Mentions légales</a>
            <a href="/politique-de-confidentialite" style={{ transition: "color 0.2s" }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--text)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-muted)"}
            >Politique de confidentialité</a>
          </div>

          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Made with{" "}
            <span style={{ color: "#f87171" }}>♥</span>
            {" "}by{" "}
            <a
              href="https://greencodin.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ade80", fontWeight: 600, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.target as HTMLElement).style.opacity = "0.8"}
              onMouseLeave={e => (e.target as HTMLElement).style.opacity = "1"}
            >
              greencodin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
