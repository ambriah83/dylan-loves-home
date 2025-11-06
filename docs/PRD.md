# Dylan Lawrence Real Estate Website PRD

**Prepared for:** Dylan Lawrence — Tampa, FL Realtor  
**Prepared by:** Automation Specialist  
**Last Updated:** 2025-11-06

---

## Table of Contents

- [Executive Summary](#executive-summary)
- [Goals & KPIs](#goals--kpis)
- [Target Audience & User Personas](#target-audience--user-personas)
- [Brand & Tone](#brand--tone)
- [Design Tokens](#design-tokens)
- [Site Map & Page Descriptions](#site-map--page-descriptions)
- [SEO & Content Strategy](#seo--content-strategy)
- [Lead Generation & Conversion Flow](#lead-generation--conversion-flow)
- [Follow Up Boss Integration & Automation](#follow-up-boss-integration--automation)
- [IDX / Listings Strategy](#idx--listings-strategy)
- [Technical Stack & Architecture](#technical-stack--architecture)
- [Accessibility & Performance](#accessibility--performance)
- [Example Homepage Copy](#example-homepage-copy)
- [Acceptance Criteria](#acceptance-criteria)
- [Roadmap & Priorities](#roadmap--priorities)
- [Developer Handoff Checklist](#developer-handoff-checklist)
- [Appendix: Example JSON-LD](#appendix-example-json-ld)

---

## Executive Summary

This Product Requirements Document (PRD) defines the scope, features, content and technical requirements for the Dylan Lawrence real estate website. The primary objective is **lead generation** for first-time homebuyers and single women in Tampa/Florida, with automated CRM integration (Follow Up Boss), IDX listing integration, and SEO-first content strategy. 

The design should feel **warm, empowering, feminine and professional** — modern and not cringey.

---

## Goals & KPIs

### Primary Goal
- Generate qualified buyer and seller leads and route them to Follow Up Boss.

### Key Performance Indicators (KPIs)
- **Monthly leads:** 50+ (initial target)
- **Lead conversion rate:** 4%+
- **Organic traffic to local landing pages:** 500+ sessions/month
- **CTA click-through rate (hero):** 5%+
- **Time to first response via automation:** <5 minutes (text/email)

---

## Target Audience & User Personas

### Primary Audience
- First-time homebuyers (25–40), especially single moms and single women
- Relocators to Florida (out-of-state buyers)

### Personas

#### 1. Single-Mom Sarah — Age 32
- **Wants:** Safe neighborhood, affordability, easy process
- **Values:** Guidance and empathy

#### 2. First-Time Buyer Alex — Age 27
- **Needs:** Education on financing, timelines, and local schools

#### 3. Relocator Matt/May — Age 35
- **Relocating for work**
- **Values:** Local market knowledge and simplified search

---

## Brand & Tone

### Voice & Tone
- **Supportive, practical, encouraging, clear**
- Avoid aggressive 'girl boss' clichés
- Use accessible language: **"You can do this"** > "Dominate the market"

### Visual Direction
- **Palette:** Soft neutrals with a warm accent
- **Imagery:** Lifestyle, real clients, staged homes; authentic, light, and warmly lit

### Brand Assets Needed
- Professional headshots (lifestyle + portrait)
- Logo (primary + simplified)
- Business card design
- Branded PDF templates for lead magnets

---

## Design Tokens

### Colors (Tailwind/CSS Variables)

| Token | Hex Code | Description |
|-------|----------|-------------|
| `--color-bg` | `#ffffff` | Clean white background |
| `--color-text` | `#1f2937` | Neutral slate text |
| `--color-accent` | `#708238` | Rich olive green |
| `--color-accent-2` | `#d9d6c1` | Soft warm beige accent |
| `--color-cta` | `#556b2f` | Deep olive/green-brown CTA |
| `--color-highlight` | `#a3b18a` | Sage highlight tone |
| `--color-border` | `#e2e8f0` | Light neutral divider |

### Typography

| Element | Font Family | Size |
|---------|-------------|------|
| **Heading** | 'Playfair Display' or 'Merriweather' | H1: ~48px, H2: ~28px |
| **UI / Body** | 'Inter' or 'Rubik' | 16px |

---

## Site Map & Page Descriptions

### Core Pages

#### Home
- Hero, search CTA, value props, testimonials, lead magnets, featured neighborhoods

#### Buy
- First-time buyer guide, process steps, lender/FAQ, mortgage calculator, contact

#### Sell
- Staging, valuation CTA, seller process, testimonials, free staging consult form

#### Search/Listings
- IDX integration or IDX-hosted embed, property search, saved search CTA

#### About
- Dylan bio, mission, social proof, trust badges

#### Resources / Blog
- Market guides, neighborhood pages, SEO landing pages

#### Contact
- Short lead form, calendar booking link, phone, office address

#### Legal
- Privacy Policy, Terms, Broker/License info, Equal Housing logo

---

## SEO & Content Strategy

### SEO Foundations
- Use server-side rendering / SSG for public landing pages (Next.js recommended)
- Implement SEO helper (SEO.tsx) for meta tags, OG tags, and JSON-LD schema
- Generate sitemap.xml and robots.txt with link to sitemap

### Keyword & Landing Page Strategy

**Priority keywords:**
- Tampa Realtor
- First time homebuyer Tampa
- Homes for sale Tampa
- Realtor for single moms Tampa

**Create location + intent landing pages:**
- `/tampa-first-time-homebuyer`
- `/tampa-homes-for-sale`
- `/moving-to-tampa-guide`

### Content Plan
- Weekly or bi-weekly blog posts for local topics, buyer education, and market updates
- **Pillar post ideas:**
  - Complete Guide to Buying Your First Home in Tampa
  - Moving to Tampa: Neighborhoods & Costs
  - Top Staging Tips to Sell Fast

---

## Lead Generation & Conversion Flow

### Primary Funnel
1. Visitor → Homepage hero CTA or landing page → short lead form → Follow Up Boss
2. On submit: instant auto-reply (SMS + email), tag in Follow Up Boss, start nurture action plan

### Lead Magnets
- First-Time Homebuyer Checklist (PDF)
- Moving to Tampa Starter Pack
- Seller Staging Checklist

### Forms & CTAs

**Short forms (3 fields preferred on hero):**
- Name, email, phone

**Longer qualification forms for consultations:**
- Additional dropdowns and fields

**CTAs:**
- 'Search Homes'
- 'Get My Guide'
- 'Free Staging Consult'
- 'Talk to Dylan'

---

## Follow Up Boss Integration & Automation

### Integration Approach
- Use Follow Up Boss API or inbound form endpoint (Zapier/Webhook) to push leads directly into FUB
- Include source and landing page metadata in the lead payload (utm_source, utm_campaign, landing_page)

### Automations
- **Immediate SMS/Email reply** (Action Plan) on new lead
- **Tag leads by intent:** buyer, seller, relocating
- **On Closed Won:** auto-trigger review request and testimonial workflow (email + SMS link)

### List Imports & Lead Enrichment
- Automate ingestion of list leads (probate/foreclosure/divorce) via CSV import job that tags and schedules reach-outs
- Enrich leads with basic property data and append to Follow Up Boss

---

## IDX / Listings Strategy

### Options & MVP Recommendations
- **Quick MVP:** Add an IDX-hosted search (Showcase IDX or iHomeFinder) linked and styled to match brand
- **Full integration:** Embed IDX widgets and enable saved searches / email capture behind gating features
- Ensure IDX lead capture maps to Follow Up Boss

### UX Considerations
- Prominent search bar on home
- Featured neighborhoods
- Save search CTA
- Email gating after X images or when saving search

---

## Technical Stack & Architecture

### Recommended Stack
- **Frontend:** Next.js (for SSG/ISR), TypeScript, Tailwind CSS, shadcn/ui components
- **Hosting:** Vercel (Next.js optimization) or Netlify (if staying static)
- **CRM:** Follow Up Boss (primary)
- **IDX:** Showcase IDX / iHomeFinder / Real Geeks
- **Automation:** Zapier / Make for intermediate webhooks; serverless functions for secure API calls
- **Analytics:** GA4 + GTM; backup: Plausible for privacy-friendly option

### Dev Ops & Security
- Env vars for API keys (FUB, IDX, GA)
- HTTPS enforced, CSP headers, robots & sitemap generation during build

---

## Accessibility & Performance

### Requirements
- Ensure semantic HTML, alt text on images, keyboard navigation, and color contrast checks
- Optimize images (WebP), lazy load below the fold, use preconnect for fonts, and keep bundle size small

### Lighthouse Targets
- **Performance:** 90+
- **Accessibility:** 90+
- **Best Practices:** 90+
- **SEO:** 90+

---

## Example Homepage Copy

### Hero Section

**Headline:**
> Empowering You to Own Where You Belong

**Subheadline:**
> Tampa realtor specializing in first-time buyers and single moms — guidance at every step. Get your free First-Time Buyer Checklist.

**Primary CTA:** 'Get My Free Guide' (opens short form)  
**Secondary CTA:** 'Search Homes' (IDX or search page)

---

## Acceptance Criteria

### Per Page Requirements

| Page | Requirements |
|------|--------------|
| **Home** | Hero with CTA, functioning short lead form pushing to FUB, SEO meta tags, testimonials section |
| **Buy** | Educational content, lead magnet, contact form mapped to FUB |
| **Sell** | Valuation CTA, staging consult form, testimonials |
| **Search/Listings** | IDX embed or link, save search CTA, gated capture flows |
| **About** | Photo, bio, social proof, contact CTA |
| **Resources** | At least 3 SEO-optimized pages and blog setup |

---

## Roadmap & Priorities

### Phase 1 (MVP - 2 weeks)
- [ ] Implement LeadCapture component + Follow Up Boss webhook
- [ ] Publish Home, About, Contact pages with SEO tags
- [ ] Add 2 SEO landing pages (First-Time Buyer + Moving to Tampa)
- [ ] Add sitemap.xml and update robots.txt

### Phase 2 (4–6 weeks)
- [ ] Add IDX integration (hosted or embedded) and gating flows
- [ ] Build Resources/Blog and integrate GA4 and GTM
- [ ] Implement testimonials & review automation

### Phase 3 (6–12 weeks)
- [ ] Full automation: inbox digest, list imports, advanced FUB action plans, multi-location pages

---

## Developer Handoff Checklist

### Environment Variables Needed
- `FUB_API_KEY`
- `IDX_KEY`
- `GA4_MEASUREMENT_ID`
- `SENTRY_DSN` (optional)

### Assets & Access Required
- [ ] Brand assets: headshot, logo files, brand color tokens
- [ ] Follow Up Boss webhook endpoint or API key and mapping
- [ ] IDX provider account details
- [ ] Access to domain DNS and hosting

---

## Appendix: Example JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dylan Lawrence",
  "url": "https://dylansellsfloridahomes.com",
  "logo": "https://dylansellsfloridahomes.com/logo.png",
  "sameAs": ["https://www.instagram.com/dylsellsflorida/"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL"
  }
}
```

---

## Contact Information

**Dylan Lawrence**  
License #: SL3518205  
Brokerage: RE/MAX Realtec Group  
Phone: (813) 616-0846  
Email: dylsellsfl@gmail.com  
Instagram: [@dylsellsflorida](https://www.instagram.com/dylsellsflorida/)
