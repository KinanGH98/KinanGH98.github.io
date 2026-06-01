export type ProjectCategory = "website" | "app";

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  role: string;
  year: string;
  stack: string[];
  blurb: string;
  category: ProjectCategory | ProjectCategory[];
  images: string[];
  liveUrl?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "balsam",
    title: "Balsam",
    oneLiner: "Charitable medical ERP — 110+ pages, 20+ business domains.",
    role: "Led a team of five, end to end",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "TanStack Query"],
    blurb:
      "A 110+ page bilingual enterprise platform for a charitable medical institution, unifying patient management, medical operations, inventory, and multi-level financial control. At QmindTech I led a team of five end to end — client communication, task assignment, delivery scheduling — and architected the full frontend. A unified role-aware dashboard spans 20+ business domains, governed by a custom RBAC system enforcing granular screen- and action-level permissions across roles. A multi-level financial control system covers receivables, expenses, financial periods, and cash and inventory movement.",
    category: "website",
    images: [
      "/images/projects/balsam/balsam-bg.png",
      "/images/projects/balsam/balsam-2.png",
      "/images/projects/balsam/balsam.jpg",
      "/images/projects/balsam/balsam-3.png",
      "/images/projects/balsam/balsam-4.png",
    ],
    featured: true,
  },
  {
    id: "financial-archive",
    title: "Aleppo Directorate of Finance",
    oneLiner:
      "Government document registry — 11 domains, 40+ granular permissions.",
    role: "Project lead — built the entire frontend independently",
    year: "2025",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "JavaScript"],
    blurb:
      "A bilingual (Arabic/English, RTL) records system for a government ministry-of-finance directorate, digitizing the full lifecycle of official documents — drafting, routing, courier delivery, replies, and archival — replacing a paper-based process across 11 feature domains. At QmindTech I led the project and independently built the entire frontend. The system runs on a bitmask-based RBAC engine with 40+ granular permissions enforced both server- and client-side. Dynamic multi-party document forms carry conditional validation and an embedded rich-text editor; virtualized tables handle thousands of records. Deployed to production as an internal government system.",
    category: "website",
    images: [
      "/images/projects/financial-archive/financial-archive-1.jpeg",
      "/images/projects/financial-archive/financial-archive-2.png",
      "/images/projects/financial-archive/financial-archive-bg.png",
      "/images/projects/financial-archive/financial-archive.jpg",
    ],
    featured: true,
  },
  {
    id: "lightotp",
    title: "LightOTP",
    oneLiner: "Syria's first WhatsApp OTP verification SaaS — Meta partner.",
    role: "Sole frontend developer",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "JavaScript"],
    blurb:
      "A developer-facing SaaS for sending OTP codes over WhatsApp via API — Syria's first WhatsApp OTP provider and a Meta partner. Live in production as a commercial product with paying business customers. At QmindTech I built the entire frontend independently — the API-key dashboard, subscription and balance system, traffic analytics, and admin tools. Client and admin dashboards share a single codebase with role-based routing, an encrypted session layer with token refresh, and shared models for maximum code reuse. Full English/Arabic localization with RTL throughout.",
    category: "website",
    images: [
      "/images/projects/light-otp/light-otp-bg.png",
      "/images/projects/light-otp/light-otp-1.jpeg",
      "/images/projects/light-otp/light-otp-2.png",
      "/images/projects/light-otp/light-otp-3.png",
      "/images/projects/light-otp/light-otp-4.png",
      "/images/projects/light-otp/light-otp.jpg",
    ],
    liveUrl: "https://lightotp.com",
    featured: true,
  },
  {
    id: "motora",
    title: "Motora",
    oneLiner:
      "Multilingual car marketplace with real-time chat and notifications.",
    role: "Frontend developer",
    year: "2025",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "SignalR",
      "next-intl",
    ],
    blurb:
      "The web platform for Motora, a multilingual car marketplace for the Syrian automotive market — the web counterpart to its native iOS and Android apps. Buyers search and filter listings, message sellers in real time, and manage their own listings; sellers get public profiles and listing pages. At QmindTech I built deep faceted vehicle search with dependent make/model dropdowns, multi-criteria filtering, and persistable saved searches. Real-time buyer–seller chat and push notifications run over SignalR with presence indicators, unread tracking, and automatic reconnection. Edge middleware handles locale routing, auth guards, and JWT refresh-token rotation, keeping server-rendered pages consistent with fresh auth state. A full authentication suite and a support-ticketing system with its own chat interface live in the same codebase.",
    category: ["website", "app"],
    images: [
      "/images/projects/motora/motora-bg.jpg",
      "/images/projects/motora/motora.png",
      "/images/projects/motora/motora-app.png",
      "/images/projects/motora/motora-banner.jpg",
    ],
    liveUrl: "https://motora-platform.com",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.qmindtech.motora",
    appStoreUrl: "https://apps.apple.com/de/app/motora-car-market/id6746699823",
    featured: true,
  },
  {
    id: "al-amal-group",
    title: "Al-Amal Group",
    oneLiner: "Trilingual corporate site with an interactive 3D hero.",
    role: "Sole frontend developer",
    year: "2025",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "GSAP",
    ],
    blurb:
      "A corporate marketing site for Al-Amal Group, a Syrian-German investment group spanning logistics, tech, finance, and automotive. Trilingual (English / Arabic / German) with full RTL switching for Arabic. At QmindTech, as sole frontend developer, I built an interactive 3D hero with Three.js and React Three Fiber — a GSAP-animated 3D logo with a layered entrance timeline and continuous idle motion, performance-tuned with adaptive resolution and GPU hints. Locale routing covers all three languages with SEO metadata, hreflang alternates, and Open Graph cards. The 3D scene is lazy-loaded so it never blocks initial paint, sections stay server-rendered, and every locale is statically exported to pre-rendered HTML for fast CDN delivery.",
    category: "website",
    images: [
      "/images/projects/al-amal-group/al-amal-group-bg.jpeg",
      "/images/projects/al-amal-group/al-amal-group.png",
    ],
    liveUrl: "https://amalgroup.de/",
    featured: true,
  },
  {
    id: "qmind-hr-app",
    title: "QMind HR",
    oneLiner: "HR & attendance — web and cross-platform desktop via Tauri.",
    role: "Sole frontend developer",
    year: "2025",
    stack: ["React", "TypeScript", "Tauri", "Tailwind", "TanStack Query"],
    blurb:
      "An HR and workforce-attendance management application, delivered as both a web app and a cross-platform desktop app via Tauri — managing employees, departments, attendance records, overtime, and automated salary calculation, with attendance data sourced from a biometric fingerprint device. Bilingual Arabic/English. At QmindTech, as sole frontend developer, I built the full interface for both targets from a single codebase. Role-based access control runs on a declarative permission system (Admin and Department Manager roles). The typed service and server-state layer is built on TanStack Query — parallel data fetching, response normalization, and timezone handling — with a reusable Radix-based component system and virtualized data tables for large employee lists.",
    category: "app",
    images: [
      "/images/projects/qmind-hr-app/qmind-hr-bg.jpeg",
      "/images/projects/qmind-hr-app/qmind-hr-2.jpeg",
      "/images/projects/qmind-hr-app/qmind-hr-app.webp",
      "/images/projects/qmind-hr-app/qmind-hr-1.jpeg",
    ],
    featured: true,
  },
  {
    id: "faaliyah",
    title: "Faaliyah",
    oneLiner:
      "Syria Ministry of Culture events platform — 14+ cities, bilingual.",
    role: "Team lead + frontend developer",
    year: "2025",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "TanStack Query"],
    blurb:
      "The official digital platform for Syria's Ministry of Culture, where citizens discover cultural and artistic events across 14+ cities. At QmindTech I led the team and built the frontend for both surfaces — the public website and the admin dashboard. The public platform is bilingual (Arabic/English, fully RTL-aware), server-rendered, SEO-optimized, with URL-driven search, filter, and pagination so filtered views are shareable and bookmarkable. The companion admin dashboard lets Ministry staff manage events, news, locations, and categories — full CRUD across 7 modules with reusable TanStack data tables (sorting, bulk actions, inline editing). Complex bilingual forms keep Arabic and English tabs in sync with validation, plus a custom drag-and-drop image uploader with preview and validation. Secure session authentication includes proactive token refresh with multi-tab coordination so concurrent tabs don't collide on refresh. The architecture is server-first with a layered service pattern and uniform error handling.",
    category: ["website", "app"],
    images: [
      "/images/projects/faaliyah/faaliyah-dashboard.jpg",
      "/images/projects/faaliyah/faaliyah-main.png",
      "/images/projects/faaliyah/faaliyah-2.png",
      "/images/projects/faaliyah/faaliyah-app.webp",
      "/images/projects/faaliyah/faaliyah.jpg",
    ],
    liveUrl: "https://events.moc.gov.sy",
    featured: true,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getThumbnail(project: Project): string {
  return project.images[0] ?? "";
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
