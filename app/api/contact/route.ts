import { NextRequest, NextResponse } from "next/server";
// import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  console.log("Contact API called XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

//   const resend = new Resend(apiKey);

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'ugc.anaio@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

  const emailBody = `
Nouveau message de votre site portfolio UGC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom : ${name}
Email : ${email}
Entreprise : ${company || "Non renseignée"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message :
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ce message a été envoyé via le formulaire de contact de votre site portfolio UGC.
Pour répondre, écrivez directement à : ${email}
  `.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio UGC <onboarding@resend.dev>",
        to: ["ugc.anaio@gmail.com"],
        subject: `[Portfolio UGC] Nouveau message de ${name}`,
        text: emailBody,
        reply_to: email,
      }),
    });

    const data = await res.json();
    console.log("Resend status******:", res.status);
    console.log("Resend response*******:", JSON.stringify(data)); // ← ajoute ça

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Échec envoi email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
