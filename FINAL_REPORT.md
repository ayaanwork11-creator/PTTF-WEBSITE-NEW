# PTTF website redesign — final report

## Pages researched

The live website at `https://pttflab.com/` was crawled through the homepage, robots file, WordPress sitemap, and same-domain internal links. The current sitemap endpoint `/sitemap_index.xml` returns a 404 page; `/robots.txt` points to the working `/wp-sitemap.xml`. The crawl found 18 accessible HTML routes: `/`, `/idex-2022/`, `/privacy-policy/`, `/blog/`, `/contact-us/`, `/about-us/`, `/accreditations/`, `/global-presence/`, `/photo-gallery/`, `/terms-and-conditions/`, `/feedback/`, the four published services under `/services/`, `/category/uncategorized/`, `/author/mczind_admin/`, and `/2024/05/08/`.

The inventory is preserved in `research/RESEARCH_INVENTORY.md` and `research/inventory.json`. The source exposed one published article, Textile Asia 2023, dated May 8, 2024, and the source footer supplied Faisalabad laboratory and Lahore sample pickup/marketing contact points.

The homepage also listed eight inspection and verification services—Status Check, Sample Evaluation, Inline Inspection, During Production Inspection, Final Random Inspection, Supervision of Loading, Vendor Assessment, and Post Delivery Inspection—and listed Restricted Substances Testing, but the crawl did not discover dedicated public detail pages for these items. The redesign includes routes and clear “confirm with PTTF” notices rather than inventing technical scope.

## Pages completed

All 18 discovered source routes are preserved, including the archive and author/date routes. The redesign also adds `/services/leather-footwear-ppe/`, `/services/restricted-substances/`, `/inspection/`, and the eight inspection detail routes so the homepage-listed categories have usable destinations. Shared navigation and footer links work through the route-aware React shell.

## Implemented features

The site now has a premium editorial-industrial visual system with deep navy, PTTF teal, light paper surfaces, local source-derived textile/lab/event imagery, responsive desktop/tablet/mobile layouts, keyboard focus states, reduced-motion handling, accessible mobile menu semantics, clickable phone/email contacts, breadcrumbs-by-context through page heroes, service cards, inspection cards, accreditation blocks, news cards, gallery, legal layouts, and client-review disclosures.

The homepage includes the requested hero, Explore Services and Request a Quote actions, source-derived company introduction, testing service overview, inspection overview, quality credential band, laboratory imagery, latest news, and contact CTA. The contact and feedback forms validate required fields and email format, then state honestly that a submission provider is not connected in this preview and direct the visitor to the PTTF email/phone contacts.

SEO scaffolding includes route-aware page titles/descriptions, canonical links, Open Graph title/description/type tags, `public/manus-routes.json`, absolute-URL `public/sitemap.xml`, and `public/robots.txt`. `app.config.ts` includes the source-derived PTTF logo URL.

## Verification performed

`npm run build` passes. `npx tsc -b --pretty false` passes. The preview server responds with HTTP 200 for the homepage, route manifest, service route, inspection route, contact route, and sitemap. Desktop and mobile screenshots were reviewed for the homepage, About Us, Textile Testing, Contact Us, and Inspection pages.

## Content and assets requiring PTTF confirmation

Before launch, PTTF should confirm the current validity and scope of the ISO/IEC 17025:2005, ISO/IEC 17020, US CPSC, and NEXT UK claims; the exact number and scope of in-house methods; all inspection and testing offerings including restricted substances; any global office or country coverage details; approved Terms and Conditions copy; image rights and captions; and the final form submission destination. No replacement legal terms or unverified inspection methods were invented.

## Local run and deployment

```bash
npm install
npm run dev -- --host 0.0.0.0
npm run build
npm run preview -- --host 0.0.0.0
```

The static output is `dist/`. Deploy it on a static host with SPA fallback enabled for the preserved routes, then connect the PTTF domain after DNS is configured. A real form endpoint or provider is required to make the contact and feedback forms operational; no environment variables are required by the current preview.
