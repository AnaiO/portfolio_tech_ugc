"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("loading");
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });
  //     if (res.ok) {
  //       setStatus("success");
  //       setForm({ name: "", email: "", company: "", message: "" });
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch {
  //     setStatus("error");
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("1. handleSubmit déclenché"); // ← ajoute
  console.log("2. form data:", form);        // ← ajoute
  setStatus("loading");
  
  try {
    console.log("3. envoi fetch...");         // ← ajoute
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    console.log("4. réponse status ENFIN KE TRUC QUOI:", res); // ← ajoute
    
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.log("5. ERREUR catch:", err); // ← ajoute
    setStatus("error");
  }
};

  return (
    <section id="contact" style={{ padding: "120px 0", position: "relative" }}>
      <div style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "start" }} className="contact-grid">

          {/* Left info */}
          <div>
            <div className="section-tag">Contact</div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, marginBottom: "24px" }}>
              Parlons de{" "}
              <span className="text-gradient">votre projet</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "48px" }}>
              Une idée ? Un brief ? Ou juste envie de voir si on est compatibles ? Je réponds dans les 24h.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: "✉️", label: "Email", value: "ugc.anaio@gmail.com" },
                { icon: "⚡", label: "Délai de réponse", value: "Moins de 24h" },
                { icon: "📍", label: "Disponibilité", value: "France & international" },
              ].map(item => (
                <div key={item.label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 20px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}>
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div style={{
            padding: "40px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
          }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>
                  Message envoyé !
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "28px" }}>
                  Merci pour votre message. Je vous réponds dans les meilleurs délais.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-ghost">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "4px" }}>
                  Envoyez-moi un message
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "8px" }}>
                  Tous les champs marqués * sont obligatoires
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.04em" }}>
                      Prénom & Nom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Marie Dupont"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.04em" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marie@startup.io"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.04em" }}>
                    Entreprise / Marque
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de votre marque"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.04em" }}>
                    Votre projet *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre produit, le type de contenu souhaité, votre plateforme cible, votre budget approximatif…"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <div style={{
                    padding: "14px 16px",
                    background: "rgba(248,113,113,0.1)",
                    border: "1px solid rgba(248,113,113,0.3)",
                    borderRadius: "10px",
                    fontSize: "0.85rem",
                    color: "#f87171",
                  }}>
                    Une erreur est survenue. Veuillez réessayer ou m'écrire directement à ugc.anaio@gmail.com
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                  <span>{status === "loading" ? "Envoi en cours…" : "Envoyer le message"}</span>
                  {status !== "loading" && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l12-6-5 6 5 6-12-6z" fill="white"/>
                    </svg>
                  )}
                </button>

                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.5 }}>
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                  Consultez notre{" "}
                  <a href="/politique-de-confidentialite" style={{ color: "var(--accent)", textDecoration: "underline" }}>politique de confidentialité</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
