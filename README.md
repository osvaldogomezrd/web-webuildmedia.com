# Webuildmedia — Landing Page

A high-converting landing page for **Webuildmedia**, a web design agency focused on businesses in Punta Cana, Dominican Republic.

Built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS**. Ready to deploy on Vercel.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| React Hook Form + Zod | Form validation |
| Formspree | Form submissions (optional) |
| Lucide React | Icons |
| Vercel | Hosting |

---

## Project Structure

```
web-webuildmedia/
├── public/                  # Static assets (favicon, OG image)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + SEO metadata
│   │   ├── page.tsx         # Main page (assembles all sections)
│   │   ├── globals.css      # Global styles + Tailwind
│   │   ├── robots.ts        # robots.txt generation
│   │   └── sitemap.ts       # sitemap.xml generation
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Reusable button (4 variants)
│   │   │   ├── Container.tsx    # Layout container
│   │   │   └── SectionLabel.tsx # Amber tag labels
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero with browser mockup
│   │   │   ├── Benefits.tsx     # 6-card benefits grid
│   │   │   ├── Problems.tsx     # Problems we solve
│   │   │   ├── Services.tsx     # 8 service cards
│   │   │   ├── LocalSection.tsx # Punta Cana focus + sectors
│   │   │   ├── Portfolio.tsx    # 6 project showcase cards
│   │   │   ├── Process.tsx      # 5-step timeline
│   │   │   ├── Testimonials.tsx # 4 testimonials + metrics
│   │   │   ├── CTAMid.tsx       # Midpage conversion CTA
│   │   │   ├── ContactForm.tsx  # Lead capture form (Formspree)
│   │   │   ├── FAQ.tsx          # 9 FAQs (accordion)
│   │   │   └── Footer.tsx       # Links + final CTA
│   │   ├── Navbar.tsx           # Sticky navbar (mobile-responsive)
│   │   └── WhatsAppButton.tsx   # Floating WhatsApp button
│   └── lib/
│       └── utils.ts             # cn(), WhatsApp URL helpers
├── .env.example             # Environment variable template
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Your Formspree form ID (create free at formspree.io)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id

# WhatsApp number (international format, no + or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=18491234567

# Site URL (used for SEO metadata)
NEXT_PUBLIC_SITE_URL=https://webuildmedia.com
```

> **Note:** The form works without Formspree (it simulates success). Connect Formspree when ready for production.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Setting Up the Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll get a form ID like `xyzabcde`
3. Add it to your `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xyzabcde
   ```
4. The form at `src/components/sections/ContactForm.tsx` will automatically send submissions to your Formspree inbox

Formspree free plan includes 50 submissions/month. Upgrade for more.

---

## Deploy to Vercel

### Option A: Deploy with the Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option B: Deploy via GitHub

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/webuildmedia.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub

3. Select your repository

4. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_FORMSPREE_ID`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL`

5. Click **Deploy**

### Environment Variables on Vercel

In your Vercel project settings → **Environment Variables**:

| Name | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | `your_formspree_id` | Production, Preview |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `18491234567` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://webuildmedia.com` | Production |

---

## Before Going Live — Checklist

- [ ] Replace placeholder WhatsApp number (`18491234567`) with real number
- [ ] Replace placeholder email (`hello@webuildmedia.com`) in `ContactForm.tsx` and `Footer.tsx`
- [ ] Connect Formspree (or replace with your own backend)
- [ ] Add a real `favicon.ico` and `icon.png` to `/public`
- [ ] Add a real `og-image.png` (1200×630px) to `/public` for social sharing
- [ ] Update Google verification code in `layout.tsx` (optional)
- [ ] Update `sitemap.ts` with correct URL if not `webuildmedia.com`
- [ ] Add real testimonials when available
- [ ] Add real portfolio screenshots when available
- [ ] Test on mobile devices
- [ ] Run `npm run build` to verify no errors before deploy

---

## Build & Production

```bash
# Type check + build
npm run build

# Start production server locally
npm run start

# Lint
npm run lint
```

---

## Customization

### Change brand colors

Edit `tailwind.config.ts` → `theme.extend.colors.brand`

The primary accent color is `amber-500` (`#f59e0b`). To change it, find all `amber-` references in component files and update to your preferred Tailwind color.

### Change WhatsApp number

Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` and Vercel env vars.

### Update copy

All text content lives directly in the section components under `src/components/sections/`. Each file is self-contained and easy to edit.

---

## Limitations

- **No CMS**: Content is hardcoded in components. To add a CMS, consider Sanity, Contentful, or Notion API.
- **Form**: Currently uses Formspree. For a custom backend, replace the `fetch` call in `ContactForm.tsx`.
- **Images**: Portfolio and hero use CSS/SVG mockups — no real project screenshots yet. Replace with actual images when ready.
- **Analytics**: Not included. Add Vercel Analytics, Google Analytics, or Plausible via `layout.tsx`.

---

## License

Private project — all rights reserved. © Webuildmedia.
