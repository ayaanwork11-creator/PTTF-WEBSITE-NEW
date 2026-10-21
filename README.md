# PTTF website redesign

This is the research-backed redesign of the Pakistan Textile Testing Foundation public website. The source inventory is stored in `research/RESEARCH_INVENTORY.md` and `research/inventory.json`; the design and implementation decisions are in `plan.md`.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

The site uses Vite and listens on port `3000`. Create a production build with `npm run build` and preview it with `npm run preview -- --host 0.0.0.0`.

## Deployment notes

The project is a static Vite build. Publish the generated `dist/` directory through the chosen static host, keep SPA fallback enabled for the preserved routes, and connect the PTTF domain after the hosting provider confirms the DNS records. No environment variables are required for the current preview. A real form submission provider or PTTF-owned backend endpoint is still required before the contact/feedback forms can send messages; the current UI deliberately displays an honest “ready to connect” state and provides direct email/phone alternatives.

## Content confirmation before launch

PTTF should confirm the current validity and scope of the ISO/IEC 17025:2005, ISO/IEC 17020, US CPSC, and NEXT UK claims; the exact number and scope of in-house methods; all inspection and verification offerings; any global office/coverage details; the approved legal Terms and Conditions copy; the source-derived image rights and captions; and the form submission destination. The current public source crawl exposed only one published news story and no dedicated pages for the listed inspection services or restricted substances testing.
