# PTTF Website Redesign — Implementation Plan

## Scope and source of truth

This project rebuilds the public Pakistan Textile Testing Foundation website using the accessible content inventory captured on 2026-10-21 from `https://pttflab.com/`. The crawler found 18 accessible HTML routes: the homepage, About Us, Contact Us, Blog, Terms and Conditions, Feedback, Privacy Policy, Accreditations, Global Presence, Photo Gallery, four published service pages, the Textile Asia 2023 article, category/author/date archive routes, and the homepage. The sitemap endpoint `/sitemap_index.xml` is a 404; `/robots.txt` correctly references `/wp-sitemap.xml`, which supplied the route set.

The original homepage names inspection and verification services (Status Check, Sample Evaluation, Inline Inspection, During Production Inspection, Final Random Inspection, Supervision of Loading, Vendor Assessment, and Post Delivery Inspection), but the current public sitemap/crawl exposed no dedicated pages for them. The redesign will preserve these labels and present an organized overview with a visible “service detail to be confirmed” note rather than fabricating technical descriptions.

Factual content is preserved from the source inventory: established in 2005; ISO/IEC 17025:2005 accreditation claim by Pakistan National Accreditation Council (PNAC); NEXT UK accreditation claim; ISO/IEC 17020 accredited inspection body claim; US CPSC approved laboratory claim; SDL-ATLAS UK and USA equipment claim; approximately 400 in-house methods claim; Faisalabad laboratory address; Lahore sample pickup/marketing address; phone and email contact details; and the Textile Asia 2023 article copy. Legal/privacy wording remains source-derived and is not rewritten beyond layout and headings.

## Technical approach

Build a maintainable TypeScript/Vite React single-page application with client-side route handling that serves every preserved source URL and the structured inspection overview routes. Use shared components for the header, mobile navigation, footer, page hero, breadcrumb, service cards, accreditation strip, contact/quote form, article cards, and disclosure/confirmation notices. Keep content in typed data modules so service labels, facts, route metadata, and source notes can be reviewed independently of presentation.

The client-side quote/contact form will validate name, email, company, service interest, and message. Because no submission provider or server credential was supplied, it will not pretend to send: it will provide a clear “ready to connect” state and direct users to `info@pttflab.com` / the contact numbers. The form architecture will be isolated so a provider endpoint can be connected later without redesigning the UI.

Use downloaded copies of suitable images from the existing PTTF site in `public/assets/pttf/` rather than inventing laboratory imagery or hotlinking. Add descriptive alt text. Add `public/manus-routes.json`, `public/robots.txt`, `public/sitemap.xml`, and canonical/metadata handling for the route set. The app listens on port 3000 and builds to `dist`.

## Design direction

### Considered movements

- Swiss International Typographic Style — probability 0.07: precise type, disciplined grids, and restrained color for laboratory credibility.
- Editorial industrial modernism — probability 0.08: oversized type, offset image compositions, and tactile material cues for a confident technical brand.
- Quiet luxury corporate — probability 0.06: soft neutrals, fine rules, and understated polish for an international client audience.

### Chosen movement: editorial industrial modernism

**Design Movement:** Editorial industrial modernism — a textile-and-lab identity that pairs precise information architecture with large, tactile image crops and confident typographic contrast.

**Core Principles:** (1) Evidence before ornament: credentials, methods, and contact paths remain prominent. (2) Material intelligence: fabric, testing, and inspection imagery carry the visual story. (3) Calm authority: whitespace and deep navy establish trust without template-like clutter. (4) Progressive disclosure: long technical content is chunked into scannable cards, lists, and accordions where helpful.

**Color Philosophy:** Deep navy anchors the site like a lab bench and communicates reliability. A restrained teal accent signals precision and modernity. Warm paper and mist surfaces keep dense information approachable. Safety amber is reserved for “confirm with PTTF” notes, never for decoration.

**Layout Paradigm:** Asymmetric editorial compositions use a strong left reading rail, offset media blocks, and narrow eyebrow labels. Desktop pages combine full-width section bands with contained reading measures; mobile collapses into a single clear column without losing the visual rhythm.

**Signature Elements:** Navy “lab note” labels; teal measurement lines and corner rules; oversized numerals used only for verified service/fact groupings.

**Interaction Philosophy:** Interactions should clarify a next step: nav opens softly, service cards reveal their purpose on hover/focus, accordions expose detail without movement surprises, and form feedback explains what can and cannot happen.

**Animation:** Use short 160–240ms opacity/translate transitions, subtle image scale on hover, and an understated hero reveal. Respect `prefers-reduced-motion`; no looping decorative motion.

**Typography System:** Use `DM Sans` for interface and body copy with `Playfair Display` for occasional editorial emphasis in hero display lines. Maintain a readable 1.55–1.7 body line-height, uppercase eyebrow labels with generous tracking, and a clear H1/H2/H3 scale.

**Brand Essence:** A Pakistan-based testing and inspection partner helping textile and adjacent industries verify quality with confidence. Personality: exacting, established, helpful.

**Brand Voice:** Direct, informed, and calm. Example lines: “Evidence you can build an export decision on.” “Bring us the material, standard, or question — we’ll show you the next reliable step.”

**Wordmark & Logo:** Present the existing PTTF mark as a compact source-derived mark inside a navy lockup, paired with a custom stacked wordmark treatment rather than treating the full company name as a generic logo.

**Signature Brand Color:** PTTF Teal `#0E8F8A`, used sparingly for action states, measurement lines, and key data cues.

## Project structure

- `src/main.tsx` — app bootstrap and global metadata setup.
- `src/App.tsx` — route resolution, shared shell, and route-level rendering.
- `src/content/site.ts` — typed navigation, service, fact, page, legal, and article content sourced from the inventory.
- `src/components/` — Header, Footer, Button, PageHero, SectionHeading, ServiceCard, ContactForm, AccreditationBand, ArticleCard, and disclosure components.
- `src/styles.css` — design tokens, responsive layout, typography, motion, and accessible states.
- `public/assets/pttf/` — downloaded source images and logo/credential assets.
- `public/manus-routes.json` — complete route declaration for the platform.
- `public/sitemap.xml`, `public/robots.txt` — crawler support.
- `app.config.ts` — project logo metadata.

## Build and delivery

Use the pinned package lock, `npm run dev -- --host 0.0.0.0`, `npm run build`, and `npm run preview -- --host 0.0.0.0`. Before checkpointing, verify route manifest, build output, source-derived content coverage, metadata, and the absence of broken internal hrefs through code inspection and a production build. Keep unverified or inaccessible claims visible in the content confirmation list rather than silently upgrading them to fact.
