import {
  Layers,
  Zap,
  GitBranch,
  Link2,
  Sparkles,
  Download,
  Upload,
  Play,
  Share2,
  LucideIcon,
} from "lucide-react";

// ─── Navigation ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── Features ─────────────────────────────────────────────────────
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: "Timeline Editor",
    description:
      "Multi-track, frame-accurate timeline with smooth keyframe interpolation. Build complex sequences with full precision and control.",
  },
  {
    icon: Zap,
    title: "Physics Engine",
    description:
      "Spring, gravity, and friction-based motion presets built in. Make elements feel alive with one click.",
  },
  {
    icon: GitBranch,
    title: "SVG Path Animation",
    description:
      "Animate any SVG path with draw-on, morph, and trim effects. Full control over stroke, fill, and shape transitions.",
  },
  {
    icon: Link2,
    title: "Component Sync",
    description:
      "Live two-way sync with Figma and Framer components. Your design and animation stay in perfect harmony.",
  },
  {
    icon: Sparkles,
    title: "AI Motion Assist",
    description:
      "Describe movement in plain English and AI generates the keyframes instantly. From idea to animation in seconds.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description:
      "Export to Lottie, CSS keyframes, MP4, WebM, or GIF in one click. Every format your workflow demands.",
  },
];

// ─── How It Works ─────────────────────────────────────────────────
export interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: "01",
    icon: Upload,
    title: "Import",
    description:
      "Paste a Figma link or upload SVG, PNG, or Lottie assets directly into the canvas. Your existing design work comes in pixel-perfect.",
  },
  {
    number: "02",
    icon: Play,
    title: "Animate",
    description:
      "Drag keyframes on the timeline, apply easing presets, or let AI Motion Assist generate the motion for you. Iterate in real time.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Export",
    description:
      "Choose your format, hit export. Your animation is ready for production in seconds — no re-exporting, no conversion scripts.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  avatarColor: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Motionix replaced After Effects for all my UI animation work. The timeline is snappier, the export is cleaner, and I've cut my delivery time in half.",
    name: "Sarah K.",
    title: "Lead Product Designer",
    company: "Lumen",
    initials: "SK",
    avatarColor: "bg-violet-600",
  },
  {
    quote:
      "The AI keyframe feature is genuinely magic. I described a bounce entrance and got a perfectly eased animation in under three seconds. Wild.",
    name: "Daniel R.",
    title: "Motion Designer",
    company: "ArcStudio",
    initials: "DR",
    avatarColor: "bg-purple-600",
  },
  {
    quote:
      "Finally an export pipeline that doesn't break Lottie. I can hand off to engineers without a single manual fix. This is the tool I've been waiting for.",
    name: "Priya M.",
    title: "Frontend Engineer",
    company: "Voxel",
    initials: "PM",
    avatarColor: "bg-indigo-600",
  },
  {
    quote:
      "The physics presets save me hours every week. Spring animations that used to take 30 minutes of tweaking now take 30 seconds.",
    name: "James T.",
    title: "Creative Director",
    company: "NovaCraft",
    initials: "JT",
    avatarColor: "bg-violet-700",
  },
  {
    quote:
      "Component sync with Figma is the feature I didn't know I needed. My design and animation are always in sync — no more manual updates.",
    name: "Aiko N.",
    title: "UX Designer",
    company: "Prisma",
    initials: "AN",
    avatarColor: "bg-purple-700",
  },
  {
    quote:
      "Clean interface, powerful engine. This is the future of motion tooling and I'm genuinely not going back to anything else.",
    name: "Carlos V.",
    title: "Freelance Animator",
    company: "Independent",
    initials: "CV",
    avatarColor: "bg-fuchsia-700",
  },
];

// ─── Pricing ──────────────────────────────────────────────────────
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: PricingFeature[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for hobbyists and students exploring motion design.",
    features: [
      { text: "3 active projects", included: true },
      { text: "Lottie & GIF export", included: true },
      { text: "Basic easing presets", included: true },
      { text: "Community support", included: true },
      { text: "AI Motion Assist", included: false },
      { text: "Figma & Framer sync", included: false },
      { text: "MP4 / WebM export", included: false },
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For professional designers who need the full toolkit.",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "All export formats", included: true },
      { text: "Physics engine", included: true },
      { text: "AI Motion Assist", included: true },
      { text: "Figma & Framer sync", included: true },
      { text: "Priority support", included: true },
      { text: "Team collaboration", included: false },
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For studios and teams who move fast together.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Shared asset library", included: true },
      { text: "Admin & permissions", included: true },
      { text: "SSO & SAML", included: true },
      { text: "Dedicated Slack support", included: true },
      { text: "Custom export presets", included: true },
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is Motionix free to use?",
    answer:
      "Yes. The Starter plan is free forever with no credit card required. You get 3 active projects, Lottie and GIF export, and access to our core timeline editor.",
  },
  {
    question: "Do I need coding knowledge to use Motionix?",
    answer:
      "Not at all. Motionix is designed for visual designers. You work entirely in the canvas and timeline UI. If you want to export CSS keyframes for a developer, we generate clean, production-ready code automatically.",
  },
  {
    question: "How does Figma sync work?",
    answer:
      "Paste a Figma share link into Motionix and your frames import as editable layers. Any changes made in Figma can be re-synced with a single click, so your source of truth stays in Figma while animation lives in Motionix.",
  },
  {
    question: "What formats can I export to?",
    answer:
      "On Starter you can export Lottie JSON and GIF. Pro and Team plans unlock MP4, WebM, and CSS keyframe export. All exports are optimized for file size without sacrificing quality.",
  },
  {
    question: "Can I use Motionix for commercial projects on the free plan?",
    answer:
      "Yes. All plans, including Starter, allow commercial use. Your animations belong to you.",
  },
  {
    question: "Does Motionix work offline?",
    answer:
      "Motionix is a web-based tool that requires an internet connection for syncing and cloud saves. A desktop app with offline support is on our public roadmap for late 2025.",
  },
  {
    question: "How does the AI Motion Assist feature work?",
    answer:
      "Type a plain-English description of the movement you want — for example, 'bounce in from the left with a spring overshoot' — and the AI generates a full keyframe sequence on your selected layer. You can refine it freely after.",
  },
  {
    question: "Is my work saved automatically?",
    answer:
      "Yes. Motionix auto-saves every change to the cloud in real time. Version history lets you step back to any previous state within the last 30 days on Pro and Team plans.",
  },
];

// ─── Logo Bar ─────────────────────────────────────────────────────
export const LOGO_COMPANIES = [
  "ArcStudio",
  "NovaCraft",
  "Voxel",
  "Lumen",
  "Prisma",
  "Helix",
  "Orbit",
  "Tangent",
];
