# Websie — Setup Guide

## Requirements
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Theme tokens, animations
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   └── page.tsx          # Landing page (assembles sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/         # One file per page section
│   │   ├── HeroSection.tsx
│   │   ├── LogoBar.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── CtaSection.tsx
│   └── ui/               # shadcn/ui components
└── lib/
    ├── constants.ts      # All page copy and data
    └── utils.ts          # Tailwind utility helper
```

## Editing Content

All text, features, pricing, testimonials and FAQ items live in one file:
**`src/lib/constants.ts`** — edit this to update any page copy without touching JSX.
