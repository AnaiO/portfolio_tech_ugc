import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité — Anaïs BERTON",
};

export default function PolitiqueConf() {
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
        }}>
          ← Retour au site
        </Link>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, marginBottom: "8px" }}>
          Politique de confidentialité
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "56px", fontSize: "0.9rem" }}>
          Conformément au RGPD (Règlement Général sur la Protection des Données)
        </p>

        {[
          {
            title: "1. Responsable du traitement",
            content: `Anaïs BERTON est responsable du traitement de vos données personnelles collectées via ce site.
Contact : ugc.anaio@gmail.com`,
          },
          {
            title: "2. Données collectées",
            content: `Via le formulaire de contact, nous collectons :
• Votre prénom et nom
• Votre adresse email
• Le nom de votre entreprise (optionnel)
• Le contenu de votre message

Ces données sont collectées uniquement pour répondre à vos demandes de collaboration.`,
          },
          {
            title: "3. Finalité du traitement",
            content: `Les données collectées sont utilisées exclusivement pour :
• Répondre à vos demandes de contact et de collaboration
• Gérer la relation commerciale

Elles ne sont jamais revendues ni partagées avec des tiers à des fins commerciales.`,
          },
          {
            title: "4. Durée de conservation",
            content: `Vos données sont conservées pendant 3 ans à compter de votre dernier contact, conformément aux recommandations de la CNIL.`,
          },
          {
            title: "5. Vos droits",
            content: `Conformément au RGPD, vous disposez des droits suivants :
• Droit d'accès à vos données
• Droit de rectification
• Droit à l'effacement (droit à l'oubli)
• Droit d'opposition au traitement
• Droit à la portabilité

Pour exercer ces droits, contactez : ugc.anaio@gmail.com`,
          },
          {
            title: "6. Cookies",
            content: `Ce site n'utilise pas de cookies de traçage ou d'analyse. Aucune donnée de navigation n'est collectée à des fins publicitaires.`,
          },
          {
            title: "7. Réclamations",
            content: `Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
Commission Nationale de l'Informatique et des Libertés
3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
www.cnil.fr`,
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
