"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "UGC vs Publicité", href: "#ugc-vs-pub" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 0" : "24px 0",
        background: scrolled
          ? "rgba(10,10,15,0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo / Name */}
        <a href="#accueil" onClick={(e) => handleAnchor(e, "#accueil")} style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.15rem",
          letterSpacing: "-0.02em",
        }}>
          <span style={{ color: "var(--text)" }}>Anaïs</span>
          <span style={{ color: "var(--accent)", marginLeft: "6px" }}>BERTON</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                fontWeight: 400,
                color: "var(--text-muted)",
                padding: "8px 14px",
                borderRadius: "100px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.color = "var(--text)";
                (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.color = "var(--text-muted)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleAnchor(e, "#contact")} className="btn-primary" style={{ marginLeft: "8px", fontSize: "0.85rem", padding: "10px 22px" }}>
            <span>Travaillons ensemble</span>
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "8px 10px",
            cursor: "pointer",
            color: "var(--text)",
            flexDirection: "column",
            gap: "5px",
          }}
          className="mobile-burger"
          aria-label="Menu"
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(20px)",
          padding: "24px 32px 32px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                padding: "14px 0",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
