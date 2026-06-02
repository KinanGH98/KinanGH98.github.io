# Kinan Ghbash — Profile & Context

Context file for generating bio copy and project write-ups for the portfolio. Use alongside `CLAUDE.md`. **This is the source of truth — do not invent facts, titles, metrics, or projects beyond what's here.** All numbers (110+ pages, 40+ permissions, 12 projects, etc.) are real and should be used; they're what makes the copy concrete instead of generic.

---

## Identity

- **Name:** Ahmed Kinan Ghbash (goes by **Kinan**)
- **Title:** Senior Front-End Web Developer
- **Based in:** Aleppo, Syria
- **Current portfolio:** kinangh98.github.io *(confirm: is this the repo we're refactoring?)*
- **Open to:** Frontend Web Developer and Game Programmer roles
- **Contact:** *(email not provided — add it; the footer/contact section needs it)*

---

## Positioning — the one-line story

A frontend engineer who came from **game development**. Five years founding and leading a studio, architecting complex real-time systems in Unity/C# and shipping a 2D platformer demo on Steam — now applying that same systems-first engineering to large **bilingual (Arabic/English, RTL)** web platforms across government, enterprise, and SaaS, with React, Next.js, and TypeScript.

Frame the experience honestly as he does: **~7 years total engineering experience**, of which **~2 years are focused on React/Next.js/TypeScript web**, on top of a **5+ year game-development background**. Don't pad it; the breadth is the selling point, not a single big tenure number.

**Engineering signature (the recurring themes — these are what differentiate him):**
- Serious bilingual **Arabic/English with full RTL** support, repeatedly, at production scale
- **Access-control systems** built from scratch — custom RBAC, bitmask permission engines, granular screen/action-level enforcement
- **Real-time** features — chat, presence, push, auto-reconnect over SignalR / WebSocket
- **Performance & server-first Next.js** — App Router, React Server Components, edge middleware, static per-locale export, lazy-loaded 3D
- **Ownership** — frequently the *sole* frontend developer, or the *lead* of a cross-functional team
- **Domain breadth** — government, enterprise ERP, commercial SaaS, consumer marketplace, 3D marketing, desktop apps

---

## Stack & tools

- **Core:** React, Next.js (App Router + RSC), TypeScript, JavaScript, HTML, CSS, Tailwind CSS
- **Data / state / real-time:** TanStack Query, REST APIs, SignalR, WebSocket
- **i18n:** next-intl, full RTL layout systems, multi-locale routing (up to trilingual)
- **3D / animation:** Three.js, React Three Fiber, GSAP
- **UI systems:** Radix-based component libraries, virtualized data tables
- **Cross-platform:** Tauri (desktop apps from a web codebase)
- **Infra / DevOps:** Ubuntu VPS, CI/CD via Coolify + GitLab, Docker, Cloudflare (DNS/CDN), GitHub, Google Analytics, Search Console
- **Game development:** Unity, C#, FMOD, level/game/sound design, Adobe suite (Illustrator, Photoshop, Premiere, Audition), Steam, Rider

---

## Experience

**Senior Front-End Web Developer — QmindTech** · Aleppo · May 2025–present
- Led a cross-functional team of five (engineering, UI/UX, business analysis), driving technical delivery across multiple client projects.
- Delivered the frontend for **12 production projects** — ERP systems, SaaS, developer services, and government platforms (incl. the Ministry of Culture and Aleppo Directorate of Finance).
- Built applications serving **thousands of concurrent users**, focused on performance and scalability.
- Owned deployment infrastructure end to end — Ubuntu VPS with automated CI/CD (Coolify + GitLab), DNS/CDN, email, Git repos, and team access controls.

**Founder & Game Developer — Rovln** (self-employed) · Aleppo · Nov 2019–present
- Founded and led a team of 4 building a 2D platformer for PC.
- Launched a playable demo on Steam with positive reception from players and content creators.
- Architected complex game systems over 5 years, applying software design patterns and performance-focused engineering.

**Education:** Syrian Virtual University — BSc Information Technology / Computer Science (2019–2025, did not complete, deferred 4th year). Earlier: Technical Computer Institute (2017–2019), Technical Computer High School (2013–2016). *(See "Decisions" below on whether to surface the incomplete degree.)*

---

## Projects (copy-ready, ordered by suggested impact)

> **Suggested featured set (4–6):** Al-Amal (visual / 3D), Motora (consumer real-time), Faaliyah (government / prestige), Balsam (enterprise scale), LightOTP (commercial SaaS). They cover the full range. List the rest below the fold.

### Al-Amal Group — Corporate Website
- **Type:** Trilingual (EN/AR/DE) corporate site · **Role:** Sole frontend developer
- **Stack:** Next.js, React, TypeScript, Three.js / React Three Fiber, GSAP
- Interactive 3D hero — a GSAP-animated 3D logo with a layered entrance timeline and continuous idle motion, performance-tuned with adaptive resolution and GPU hints.
- Three-language locale routing with full RTL switching for Arabic; SEO metadata, hreflang, Open Graph.
- Lazy-loaded the 3D scene so it never blocks first paint; statically exported every locale to pre-rendered HTML for fast CDN delivery.
- *Standout: the most visually striking project — likely lead the work section with this.*

### Motora — Car Marketplace
- **Type:** Multilingual consumer marketplace (web counterpart to native iOS/Android) · **Role:** Frontend developer
- **Stack:** Next.js (App Router, RSC), React, TypeScript, Tailwind, SignalR, next-intl
- Deep faceted vehicle search — dependent make/model dropdowns, multi-criteria filtering, persistable saved searches.
- Real-time buyer–seller chat and push notifications over SignalR: presence indicators, unread tracking, automatic reconnection.
- Edge middleware for locale routing, auth guards, and JWT refresh-token rotation; full auth suite and a support-ticketing system with its own chat.

### Faaliyah — Syrian Ministry of Culture Events Platform
- **Type:** Government public platform + admin dashboard · **Role:** Team lead + frontend developer (both surfaces)
- **Stack:** Next.js (App Router, RSC), React, TypeScript, Tailwind
- Bilingual, fully RTL public platform for discovering cultural events across 14+ cities — server-rendered, SEO-optimized, with URL-driven search/filter/pagination so views are shareable and bookmarkable.
- Companion admin dashboard: full CRUD across 7 modules with reusable TanStack data tables (sorting, bulk actions, inline editing).
- Synchronized bilingual forms (AR/EN tabs + validation), custom drag-and-drop image uploader, secure session auth with proactive token refresh and multi-tab coordination.

### Balsam — Charitable Medical ERP
- **Type:** Enterprise medical management system · **Role:** Led a team of five, end to end
- **Stack:** Next.js, React, TypeScript, Tailwind
- A **110+ page** bilingual platform unifying patient management, medical operations, inventory, and multi-level financial control.
- Unified role-aware dashboard spanning **20+ business domains**, with a custom RBAC system enforcing granular screen- and action-level permissions.
- Multi-level financial control — receivables, expenses, financial periods, cash and inventory movement.
- Owned client communication, task assignment, and delivery scheduling alongside the architecture.

### LightOTP — WhatsApp OTP Verification (SaaS)
- **Type:** Developer-facing commercial SaaS · **Role:** Sole frontend developer
- **Stack:** Next.js, React, TypeScript
- **Syria's first WhatsApp OTP provider** and a Meta partner; live with paying business customers.
- Built the full product frontend — API-key dashboard, subscription and balance system, traffic analytics, admin tools.
- Client and admin dashboards in one codebase with role-based routing, an encrypted session layer with token refresh, and shared models; full EN/AR + RTL.

### Aleppo Directorate of Finance — Document Registry & Workflow
- **Type:** Government records system · **Role:** Project lead; built the entire frontend independently
- **Stack:** Next.js, React, TypeScript, Tailwind
- Digitized the full lifecycle of official documents — drafting, routing, courier delivery, replies, archival — replacing a paper process, across 11 feature domains.
- Bitmask-based RBAC with **40+ granular permissions**, enforced server- and client-side.
- Dynamic multi-party document forms with conditional validation, an embedded rich-text editor, and virtualized tables handling thousands of records. In production as an internal government system.

### QMind HR — HR & Attendance Platform
- **Type:** HR / workforce app, web + cross-platform desktop · **Role:** Sole frontend developer
- **Stack:** React, TypeScript, Tauri, Tailwind, TanStack Query
- Delivered as both a web app and a Tauri-packaged desktop app — employee/department management, attendance and overtime, automated salary calculation, with data from a biometric fingerprint device.
- Declarative RBAC permission system (Admin, Department Manager); bilingual, RTL-aware.
- Typed service + server-state layer with TanStack Query (parallel fetching, normalization, timezone handling); reusable Radix component system with virtualized tables.

### Rovln — 2D Platformer (Game)
- **Type:** PC game · **Role:** Founder, led a team of 4
- **Stack:** Unity, C#, FMOD
- Architected complex game systems over 5 years; launched a playable demo on Steam with positive reception.
- *Worth including as the origin story — it explains the systems-first engineering style. Could live in the About section rather than the work grid.*

---

## Voice & tone for copy

- **Understated, concrete, results-led.** Let the numbers and the systems speak; no hype adjectives.
- **Technical and precise** — name the real engineering (RBAC, RTL, SignalR, RSC), don't dumb it down. The audience is technical.
- Matches the near-black / League Spartan direction: calm, confident, a little serious.
- **Avoid:** "passionate developer," "I love crafting beautiful experiences," "let's build something amazing together," emoji-led headers. (See the ban-list in `CLAUDE.md`.)

### Drafted starting copy (edit freely)

**Hero / role line:** Senior Front-End Developer — React · Next.js · TypeScript

**Hero statement option:** *I build bilingual web platforms that handle real complexity.*

**Short about (2 sentences):**
> Senior frontend engineer building bilingual, large-scale web platforms in React, Next.js, and TypeScript. Came up through five years in game development — now shipping government, enterprise, and SaaS frontends, sometimes solo, sometimes leading the team.

**Full about (About section):**
> I'm a senior frontend engineer based in Aleppo, Syria, building large-scale web platforms with React, Next.js, and TypeScript. Over the past two years I've shipped the frontend for 12 production systems at QmindTech — government platforms, enterprise ERPs, and developer-facing SaaS — often as the sole frontend developer, and recently leading a team of five.
>
> I came to the web from game development. For five years I founded and led a studio building a 2D platformer that shipped a demo on Steam, architecting complex real-time systems in Unity and C#. That systems-first instinct runs through everything I build now: granular permission engines, real-time chat over SignalR, and bilingual Arabic/English interfaces with full RTL support — all engineered for performance and scale.

---

## Decisions / confirm before building

1. **Contact email** — not in the source; needed for the footer/CTA. What should it be?
2. **Which repo** — refactoring kinangh98.github.io, or a fresh Next.js repo?
3. **Featured projects** — agree with the suggested 5, or swap any? How many do you want to show?
4. **Screenshots/visuals** — several projects are government/internal. Confirm which you're allowed to show images of vs. describe text-only. (The work section can be type-led with no images, which suits the design — but flag any NDA limits.)
5. **Incomplete degree** — include it (framed as "Studied Computer Science, Syrian Virtual University") or omit entirely? Your call; for a portfolio, omitting or soft-framing is common and fine.
6. **Game Programmer roles** — you're open to these too. Want the portfolio to subtly support that second track (lean into the Rovln/Unity story), or stay purely frontend-focused?
