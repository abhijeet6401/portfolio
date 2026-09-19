# Abhijeet Kumar — Production Portfolio Website

A personal portfolio website for **Abhijeet Kumar**, positioned primarily as a **Product Builder** with strong secondary pathways in **Strategy / Consulting** and **Analytics**. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

---

## 1. Positioning & Design Philosophy

The site follows an organic editorial design inspired by [mattjinn.com](https://mattjinn.com/) and independent product operator notebooks:
- **Palette**: Paper (`#F3F0E8`), Warm White (`#FAF8F2`), Ink (`#1D1D1B`), Muted Ink (`#66645E`), Rule (`#C8C3B8`), Accent Rust (`#A7472A`), and Accent Moss (`#5D6849`).
- **Typography**: Editorial serif headings (`Newsreader`), clean sans body (`Inter`), and monospace metrics/labels (`IBM Plex Mono`).
- **Evidence-Led**: Zero invented metrics, fake testimonials, or decorative marketing wallpaper. Every single metric traces to approved CV source materials documented in `docs/content-source-map.md`.
- **Authentic Imagery**: Original documentary photographs from Snabbit operations and warehouse audits, accompanied by factual captions.

---

## 2. Routes

| Route | Description | Primary Content |
| :--- | :--- | :--- |
| `/` | Homepage | Eyebrow, 20-second positioning headline, desk photo, 3 pathway rows (Product leading), 4 selected flagship cases, documentary photo strip, builder timeline, closing CTA. |
| `/work` | Work Index | Filterable proof-of-work catalog (`All`, `Product`, `Strategy`, `Analytics`) containing all 8 case studies. |
| `/work/snabbit` | Flagship Case Study | Scaling salon-at-home operations 5x (50→250 orders/day, 20%→50% retention, ₹50L/mo savings, Blush Prive, mani-pedi launch, 4.87 rating). |
| `/work/aequitas` | Flagship Case Study | Investment research platform (50% time cut), custom CRM for 1,000+ HNI clients (30% response time cut), LangGraph AI chatbot workflow. |
| `/work/frost-sullivan` | Flagship Case Study | Multi-country forecasting across $23M+ scope, Power BI decision model, 3 segments, 8.0% product returns, Nov-Dec seasonality. |
| `/work/india-accelerator` | Flagship Case Study | "The discipline of a clear 'Pass'" on 2 startups, TAM/SAM/SOM, unit economics, $130B sector benchmarking 15+ competitors. |
| `/work/3one4-capital` | Compact Proof Note | Debt financing playbooks (9-22% costs across 5 instruments), 4 runway extension briefs (up to 6 months), portfolio unit economics. |
| `/work/jobhunt-agent` | Builder Case Study | Automated full-stack job discovery assistant (Tavily API, xAI LLM resume tailoring, Google Sheets tracking saving 10+ hours, FastAPI pdflatex on Render). |
| `/work/amex-offer-ranking` | Analytics Case Study | Credit card offer ranking (MAP@7 0.652, 22.9% lift, E2R with XGBoost/LightGBM, NMF/UMAP/HDBSCAN, Optuna Bayesian tuning). |
| `/work/research-competitions`| Proof Note | Indian Case Challenge runner-up (Loyka ₹156 Cr valuation 28% IRR), Frammer AI bronze (98% SQL success), HAL & ACE equity research, Macro risk. |
| `/thinking` | How I Think | 5 core operating principles with direct case-study links and reflection notes. |
| `/about` | About Abhijeet | 250-350 word human bio, operations/finance/data foundation, 2027 graduation, India availability, builder timeline, documentary photo sequence. |
| `/contact` | Contact & Availability | Direct mailto, copy-email button with feedback toast, verified GitHub link, CV download/request policy. |
| `/sitemap.xml` | SEO Sitemap | Canonical sitemap covering all static pages and case study slugs. |
| `/robots.txt` | Crawler Directives | Standard crawler indexing directives. |
| `/opengraph-image` | Social Sharing Card | Dynamic, editorial branded Open Graph card in paper/ink palette. |

---

## 3. Local Development & Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run content integrity & schema tests
npm test

# Build production bundle
npm run build

# Start production server
npm start
```

---

## 4. Content Editing Guide

All text, case studies, principles, and timeline items are strongly typed and validated with Zod:

- **Case Studies**: Edit `content/work.ts`. Each case study follows the `CaseStudy` type in `lib/content-schema.ts`. Every metric in `verifiedFacts` requires a `sourceRef`.
- **Profile & Bio**: Edit `content/profile.ts` for headline, bio, contact email, availability, and education details.
- **Operating Principles**: Edit `content/principles.ts` to adjust quotes, descriptions, or evidence links on the `/thinking` page.
- **Builder Timeline**: Edit `content/timeline.ts` to add or update career milestones and verified proof tags.

---

## 5. Photo Replacement Guide

To add or replace photographs:
1. Place original high-resolution photos in `public/images/`.
2. Update `content/asset-manifest.ts` and `docs/asset-manifest.csv` with the new photo's slug, approved context, alt text, and confidentiality status.
3. Reference the image path in `content/work.ts` (inside `artifacts`), `components/photo-strip.tsx`, or `app/about/page.tsx`.

---

## 6. Verification & Quality Assurance

Run the automated test suite to ensure all case studies comply with schema rules:

```bash
npx vitest run
```

Checks performed:
- Exactly 8 case studies defined.
- Unique slug validation for all routes.
- Schema parsing via Zod (`CaseStudySchema`, `PrincipleSchema`, `TimelineItemSchema`).
- Mandatory `sourceRef` validation for every metric claim.
- Integrity of `nextSlug` navigation pointers.

---

## 7. Deployment

The application is fully compatible with Vercel or any Node.js environment:

```bash
# Push to your Git repository, then import into Vercel
# Configure environment variables in Vercel:
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=realabhijeet007@gmail.com
```
