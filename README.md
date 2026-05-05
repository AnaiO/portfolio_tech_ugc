# Portfolio UGC — Anaïs BERTON

Site portfolio Next.js pour Anaïs BERTON, créatrice UGC Tech.

## Stack
- **Framework** : Next.js 15 (App Router)
- **Déploiement** : Vercel (gratuit)
- **Emails** : Resend

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer sur Vercel

1. Pusher le code sur GitHub
2. Connecter le repo sur [vercel.com](https://vercel.com)
3. Ajouter la variable d'environnement `RESEND_API_KEY` dans les settings Vercel

## Formulaire de contact (emails)

Le formulaire envoie les messages vers **ugc.anaios@gmail.com** via [Resend](https://resend.com).

### Setup Resend :
1. Créez un compte sur [resend.com](https://resend.com) (gratuit : 3000 emails/mois)
2. Récupérez votre clé API dans le dashboard
3. Dans Vercel > Project Settings > Environment Variables, ajoutez :
   - `RESEND_API_KEY` = `re_xxxxxxxxxx`

> ⚠️ Sans clé API, le formulaire affichera quand même "succès" en production mais les emails ne seront pas envoyés. Ajoutez la clé pour activer l'envoi réel.

## Structure

```
app/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── APropos.tsx
│   ├── UGCvsPublicite.tsx
│   ├── Realisations.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── mentions-legales/
│   └── page.tsx
├── politique-de-confidentialite/
│   └── page.tsx
├── api/
│   └── contact/
│       └── route.ts
├── globals.css
├── layout.tsx
└── page.tsx
```
# portfolio_tech_ugc
