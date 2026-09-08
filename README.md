# Selvana — Website

Marketing website for Selvana, a boutique cottage resort in Jibhi, Tirthan Valley, Himachal Pradesh. Built with React, Vite, React Router, and Tailwind CSS v4, implementing the Stitch design system found in `../stitch design selvana/`.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Structure

- `src/data/` — content: cottage details, amenities, packages, testimonials, cancellation policy & terms text, site-wide constants (phone/email/WhatsApp links)
- `src/data/imageManifest.json` — auto-generated map of cottage photos, regenerate with `node scripts/copy-images.mjs` if source photos in `../<Cottage Folder>/` change
- `src/components/` — shared UI (Navbar, Footer, cards, lightbox, etc.)
- `src/pages/` — routed pages: Home, Cottages, PropertyDetail, Packages, Gallery, CancellationPolicy, Terms
- `src/index.css` — design tokens (colors, fonts) and typography scale, matching `DESIGN.md` from the Stitch export

## Content notes

- Cottage names, descriptions, amenities, and policies are sourced directly from the `.docx` files in the parent `selvana/` folder.
- Curated package details and guest testimonials are placeholders carried over from the approved design mock-up — replace with real packages/pricing and verified guest reviews before launch.
- "Enquire" and "Book" actions currently open WhatsApp/email rather than a live booking flow, since this phase is the marketing frontend only (per the project estimate, the booking engine and admin backend are a separate phase).
