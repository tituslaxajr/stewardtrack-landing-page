# StewardTrack Landing Page — Design System

## Overview

StewardTrack is a church management SaaS platform built for Filipino churches. The design language is warm, trustworthy, and ministry-focused — using deep forest greens and earthy golds as primary anchors, light sage tints for backgrounds, and crisp white for cards. The overall mood is professional but pastoral: not corporate, not clinical.

---

## Color Palette

### Primary — Forest Green

| Token | Hex | Usage |
|---|---|---|
| `green-900` | `#00351d` | Primary CTA buttons, nav CTA, darkest headings, footer background base |
| `green-700` | `#1a6640` | Section headings, secondary CTAs, bullet dots, active states, bar fills |
| `green-600` | `#134d30` | Community module card background |
| `green-500` | `#009b55` | Gradient end stop (Who Benefits, How It Works, Final CTA) |

### Secondary — Earthy Gold / Amber

| Token | Hex | Usage |
|---|---|---|
| `gold-600` | `#b8973a` | Accent headings (hero "better tools" span), testimonial quotes, star ratings, badge backgrounds |
| `gold-500` | `#d4af55` | Section eyebrow labels on dark backgrounds |
| `gold-bg` | `#f5ecd0` | Eyebrow pill backgrounds in hero + "All Tiers" badges |
| `gold-700` | `#8a6020` | Professional tier badge text |
| `gold-750` | `#7a5e18` | Stewardship module card header background |

### Neutral — Dark Text

| Token | Hex | Usage |
|---|---|---|
| `ink-900` | `#181d18` | Primary body text, card titles, testimonial quotes |
| `ink-600` | `#4a5a4a` | Secondary body text, nav links, descriptive copy |

### Surface — Light Sage

| Token | Hex | Usage |
|---|---|---|
| `sage-50` | `#f6fbf3` | Page background, hero background, features section background |
| `sage-100` | `#eaf3e5` | Pain Points background, Testimonials background, Trust section background, KPI card fills, bar chart track fills, chip backgrounds |
| `sage-200` | `#ddecd6` | Bar chart track (empty portion) |
| `sage-300` | `#d0ebd8` | Hover background for light CTA buttons, tab hover state |

### Module-Specific Card Headers

| Module | Hex |
|---|---|
| Community | `#134d30` |
| Stewardship | `#7a5e18` |
| Planning | `#1a4a6a` |
| Communication | `#1d2a50` |

### Semantic / Status

| Token | Hex | Usage |
|---|---|---|
| `danger` | `#c0392b` | Pain point number badges, "FEAR" labels in Trust section |
| `live-green` | `#28c840` | Live data pulsing indicator dot |
| `macOS-red` | `#ff5f57` | Dashboard window chrome dot |
| `macOS-yellow` | `#febc2e` | Dashboard window chrome dot |
| `macOS-green` | `#28c840` | Dashboard window chrome dot |

### Surface — Dark

| Token | Hex | Usage |
|---|---|---|
| `footer-bg` | `#0c2115` | Footer background |
| `white` | `#ffffff` | Card backgrounds, pricing non-featured cards |
| `white/98` | `rgba(255,255,255,0.98)` | Nav background when scrolled |

---

## Gradients

| Name | Value | Used In |
|---|---|---|
| Dark-to-green | `linear-gradient(68deg, #00351d 13%, #009b55 100%)` | Who Benefits section |
| Dark-to-green (alt angle) | `linear-gradient(65deg, #00351d 13%, #009b55 103%)` | How It Works section |
| Dark-to-green (CTA angle) | `linear-gradient(63deg, #00351d 13%, #009b55 103%)` | Final CTA section |
| Premium pricing card | `linear-gradient(92deg, #00351d 14%, #009b55 175%)` | Featured pricing card |

---

## Typography

### Font Families

| Variable | Font | Usage |
|---|---|---|
| `U` / `Urbanist` | `Urbanist, sans-serif` | Headings, display text, eyebrow labels, badge text, CTA buttons, stat values, nav CTA |
| `DM` / `DM Sans` | `DM Sans, sans-serif` | Body copy, descriptive paragraphs, nav links, card descriptions, sub-labels, footer text |

> Both fonts are applied via inline `style` props (`style={U}` or `style={DM}`) rather than Tailwind classes, since the base theme defaults need to be overridden selectively.

### Type Scale

| Role | Size | Weight | Font | Color |
|---|---|---|---|---|
| Hero headline | `48–56px` | `extrabold (800)` | Urbanist | `#1a6640` |
| Section h2 | `40px` | `extrabold (800)` | Urbanist | `#1a6640` / `white` |
| Final CTA h2 | `48–52px` | `extrabold (800)` | Urbanist | `white` |
| Eyebrow label | `12px` | `bold (700)` | Urbanist | `#b8973a` / `#d4af55` |
| Body / description | `16–17px` | `400` | DM Sans | `#4a5a4a` |
| Card body | `12–13px` | `400` | DM Sans | `#4a5a4a` |
| Card title | `13–15px` | `bold (700)` | Urbanist | `#181d18` / `white` |
| Stat value (hero) | `26px` | `extrabold (800)` | Urbanist | `#00351d` |
| KPI value (dashboard) | `22px` | `extrabold (800)` | Urbanist | `#00351d` |
| Price display | `36px` | `extrabold (800)` | Urbanist | `#00351d` / `white` |
| Badge / tier label | `10–11px` | `bold (700)` | Urbanist | varies |
| Muted / supporting | `11–13px` | `400` | DM Sans | `#4a5a4a` |
| Footer copyright | `12px` | `400` | DM Sans | `rgba(255,255,255,0.38)` |

### Letter Spacing

- Section headings: `tracking-[-0.6px]` (`letter-spacing: -0.6px`)
- Hero headline: `tracking-[-1.12px]`
- Final CTA headline: `tracking-[-1.04px]`

### Line Height

- Display headings: `leading-[1.1]` to `leading-[1.25]`
- Body copy: `leading-[26–28px]`
- Card descriptions: `leading-[18–21px]`

---

## Spacing & Layout

### Page Container

- **Max width:** `1200px` (`max-w-[1200px]`) for most sections; `1000px` for Pricing; `1440px` for Hero
- **Horizontal padding:** `px-8` (mobile) → `lg:px-24` (desktop)
- **Section vertical padding:** `py-20` standard; `py-24` for Final CTA

### Nav

- **Height:** `h-16` (64px) — used as offset in `scrollToSection`
- **Position:** `sticky top-0 z-50`
- **Transitions:** Background and shadow shift on scroll past 20px

### Grid Systems

| Section | Grid |
|---|---|
| Who Benefits cards | `lg:grid-cols-5` |
| Platform Modules | `lg:grid-cols-4` |
| How It Works steps | `lg:grid-cols-4` |
| Testimonials | `md:grid-cols-3` |
| Pricing | `md:grid-cols-3` |
| Trust/Fears | `lg:grid-cols-3` |
| Pain Points | Two-column flex (card + copy) on `lg` |

### Gap Sizes

- Section internal gaps: `gap-12` to `gap-14`
- Card grid gaps: `gap-4` to `gap-5`
- Internal card gaps: `gap-3`
- Hero stat items: `gap-10`
- CTA buttons row: `gap-4`

---

## Border Radius

| Context | Radius |
|---|---|
| Standard cards | `rounded-[20px]` |
| Large / feature cards | `rounded-3xl` (24px) |
| Dashboard card | `rounded-3xl` (24px) |
| KPI cards (dashboard) | `rounded-xl` (12px) |
| Bar chart container (dashboard) | `rounded-xl` (12px) |
| Buttons (all CTAs) | `rounded-full` |
| Eyebrow pills | `rounded-full` |
| Badge chips | `rounded-full` |
| Avatar dots | `rounded-full` |
| Module tier labels | `rounded-full` |
| Pain point number badges | `rounded-full` |
| Icon placeholder squares | `rounded-[10px]` |

---

## Shadows

| Context | Shadow |
|---|---|
| Pain Points card | `shadow-[0_20px_60px_rgba(0,51,26,0.1)]` |
| Module cards (default) | `shadow-[0_4px_24px_rgba(0,51,26,0.06)]` |
| Module cards (hover) | `0 16px 48px rgba(0,51,26,0.12)` |
| Testimonial cards (default) | `shadow-[0_4px_20px_rgba(0,51,26,0.06)]` |
| Testimonial cards (hover) | `0 16px 40px rgba(0,51,26,0.1)` |
| Trust/Fear cards (default) | `shadow-[0_2px_12px_rgba(0,51,26,0.05)]` |
| Trust/Fear cards (hover) | `0 12px 36px rgba(0,51,26,0.1)` |
| Featured Pricing card | `0 24px 64px rgba(0,51,26,0.22)` |
| Dashboard card | `shadow-[0px_32px_80px_0px_rgba(0,53,29,0.15)]` |
| Primary CTA button (Hero) | `shadow-[0_8px_30px_rgba(26,102,64,0.3)]` |
| Final CTA button (default) | `shadow-[0_8px_30px_rgba(184,150,59,0.35)]` |
| Final CTA button (hover) | `0 16px 48px rgba(184,150,59,0.5)` |
| Nav (scrolled) | `shadow-[0_2px_20px_rgba(0,53,29,0.08)]` |

> All shadows use the brand green family (`rgba(0,51–53,29,...)`) or gold (`rgba(184,150,59,...)`) as the shadow color rather than neutral black. This keeps shadows warm and on-brand.

---

## Buttons

### Primary (Dark Green)

```
bg-[#00351d] text-white font-bold px-6–7 py-2.5–3.5 rounded-full
hover:bg-[#1a6640] transition-colors duration-200
```
Used in: Nav CTA, Pain Points CTA

### Primary (Medium Green)

```
bg-[#1a6640] text-white font-bold px-7 py-3.5 rounded-full
hover:bg-[#00351d] shadow-[0_8px_30px_rgba(26,102,64,0.3)]
```
Used in: Hero primary CTA

### Secondary (Outlined)

```
text-[#00351d] font-bold px-7 py-3.5 rounded-full
border-[1.5px] border-[rgba(0,53,29,0.22)] bg-white
hover:bg-[#f0faf0] transition-colors duration-200
```
Used in: Hero secondary CTA ("See how it works"), Essential pricing CTA

### Gold Accent

```
bg-[#b8973a] text-white font-bold px-10 py-5 rounded-full
hover:bg-[#a07e2e] shadow-[0_8px_30px_rgba(184,150,59,0.35)]
```
Used in: Final CTA, Premium pricing CTA

### Light Outlined (Pricing)

```
border border-[rgba(0,53,29,0.22)] text-[#00351d]
hover:bg-[#d0ebd8] py-3 rounded-full w-full
```
Used in: Essential and Professional pricing cards

---

## Section Backgrounds

| Section | Background |
|---|---|
| Page root | `#f6fbf3` (sage-50) |
| Nav (default) | `rgba(246,251,243,0.95)` |
| Nav (scrolled) | `rgba(255,255,255,0.98)` |
| Hero | `#f6fbf3` |
| Who Benefits | Gradient dark-to-green |
| Pain Points | `#eaf3e5` |
| Platform Modules | `#f6fbf3` |
| How It Works | Gradient dark-to-green |
| Testimonials | `#eaf3e5` |
| Pricing | `#ffffff` |
| Trust/FAQ | `#eaf3e5` |
| Final CTA | Gradient dark-to-green |
| Footer | `#0c2115` |

> The page alternates between `#f6fbf3` (light sage), `#eaf3e5` (slightly deeper sage), white, and the dark gradient — creating visual rhythm without feeling jarring.

---

## Animation System

### Library
- `motion` package (re-exporting from Framer Motion) — imported as `import { motion, useInView, AnimatePresence } from "motion/react"`

### Shared Easing Curve
All primary transitions use: `ease: [0.16, 1, 0.3, 1]` — a custom spring-like ease-out that feels snappy and natural.

### `FadeUp` — Scroll-Triggered Reveal

```tsx
initial: { opacity: 0, y: 32 }
animate (in-view): { opacity: 1, y: 0 }
transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
inView margin: "-60px"  // triggers slightly before element enters viewport
once: true
```

Used on: All section headings, card grids (with staggered delay `i * 0.07–0.1`), copy blocks.

### Hero Entry Animations (Mount-triggered, not scroll)

| Element | initial | animate | duration | delay |
|---|---|---|---|---|
| Eyebrow pill | `{opacity:0, y:20}` | `{opacity:1, y:0}` | 0.5s | 0.1s |
| Headline | `{opacity:0, y:24}` | `{opacity:1, y:0}` | 0.6s | 0.2s |
| Body copy | `{opacity:0, y:20}` | `{opacity:1, y:0}` | 0.6s | 0.3s |
| CTA buttons | `{opacity:0, y:16}` | `{opacity:1, y:0}` | 0.5s | 0.4s |
| Stats row | `{opacity:0}` | `{opacity:1}` | 0.6s | 0.55s |

### Dashboard Entry Animation

```
initial: { opacity: 0, y: 70, scale: 0.92 }
animate: { opacity: 1, y: 0, scale: 1 }
transition: { duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
```

### Dashboard 3D Tilt (Hover)

```
transformStyle: "preserve-3d"
perspective: 1200px
rotateX: -tiltY * 7deg
rotateY: tiltX * 7deg
scale: 1.025 (on hover)
transition (entering): "transform 0.08s linear"   // fast tracking
transition (leaving):  "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"  // smooth spring-back
```

### Dashboard Radial Glow

```
background: radial-gradient(ellipse at {50 + tilt.x*80}% {50 + tilt.y*80}%,
  rgba(26,102,64,0.07) 0%, transparent 65%)
opacity: 0 → 1 on hover
transition: opacity duration-400
```

### Dashboard Tab Switching (`AnimatePresence mode="wait"`)

| Element | initial | animate | exit | duration |
|---|---|---|---|---|
| Title text | `{opacity:0, x:-4}` | `{opacity:1, x:0}` | `{opacity:0, x:4}` | 0.2s |
| KPI section | `{opacity:0, y:6}` | `{opacity:1, y:0}` | `{opacity:0, y:-6}` | 0.28s |
| Bar chart section | `{opacity:0, y:6}` | `{opacity:1, y:0}` | `{opacity:0, y:-6}` | 0.28s, delay 0.05s |
| Chips section | `{opacity:0}` | `{opacity:1}` | `{opacity:0}` | 0.25s, delay 0.1s |

### Bar Chart Fill Animation

```
initial: { width: 0 }
animate: { width: `${pct}%` }
transition: { duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }
```

### Live Indicator (Pulse)

```
animate: { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }
transition: { repeat: Infinity, duration: 1.4, ease: "easeInOut" }
```

### Card Hover Micro-interactions

| Component | Hover effect |
|---|---|
| Who Benefits cards | `y: -4`, `backgroundColor: rgba(255,255,255,0.12)` |
| Platform Module cards | `y: -6`, `boxShadow: 0 16px 48px ...` |
| Testimonial cards | `y: -5`, `boxShadow: 0 16px 40px ...` |
| Pricing cards (non-featured) | `y: -4`, `boxShadow: 0 16px 48px ...` |
| Trust/Fear cards | `y: -4`, `boxShadow: 0 12px 36px ...` |
| Pain Point rows | `x: 4` |
| How It Works icons | `scale: 1.1`, `rotate: 5deg` |
| KPI cards (dashboard) | `scale: 1.03`, `y: -2` |
| Tab buttons (dashboard) | `scale: 1.05` (hover), `scale: 0.95` (tap) |
| Final CTA button | `scale: 1.04`, enhanced gold shadow |
| Chip items (dashboard) | `scale: 1.04`, `backgroundColor: #d0ebd8` |

---

## Interactive Dashboard Component

**File:** `/src/app/components/InteractiveDashboard.tsx`

### Tabs

| Tab | Title | KPI 1 | KPI 2 | Bar Section |
|---|---|---|---|---|
| `overview` | Treasury Overview | Total Giving | Active Members | Ministry Budgets |
| `giving` | Giving Trends | This Month | Avg per Member | Monthly Giving Trend |
| `members` | Member Overview | Total Members | Attendance Rate | Membership Status |

### Internal Structure

```
motion.div (entry animation wrapper)
  └─ div (3D tilt wrapper)
      ├─ div (radial glow — pointer-events-none)
      ├─ div (macOS topbar: 3 dots + title + tab switcher)
      ├─ AnimatePresence → 2× KPICard
      ├─ AnimatePresence → bar chart section with 3 BarRows
      ├─ AnimatePresence → chip row
      └─ AnimatePresence → live indicator (visible on hover)
```

### KPI Card colors

- Background: `#eaf3e5`
- Label: `#4a5a4a` (DM Sans, 10px)
- Value: `#00351d` (Urbanist, 22px, extrabold)
- Trend: `#b8973a` (DM Sans, 10px, semibold)

### Bar Chart colors

- Track (empty): `#ddecd6`, `h-[6px]`, `rounded-full`
- Bar fill (normal): `#1a6640`
- Bar fill (hovered): `#0d4225`
- Overlay on hover: `bg-white/20`
- Label (normal): `#181d18`
- Label (hovered): `#1a6640`, bold
- Amount (hovered): `#1a6640`, bold

### Dashboard Card

- Width: `560px` fixed
- Background: `#ffffff`
- Border radius: `rounded-3xl`
- Shadow: `0px 32px 80px 0px rgba(0,53,29,0.15)`

---

## Section IDs (Scroll Targets)

| Section | `id` attribute |
|---|---|
| Who Benefits | `who-benefits` |
| Platform Modules | `features` |
| Pricing | `pricing` |
| Trust / FAQ | `faq` |

Nav scroll offset: `64px` (nav height) subtracted from `getBoundingClientRect().top + scrollY`.

---

## Component Architecture

```
/src/app/App.tsx
  ├─ FadeUp (scroll animation wrapper)
  ├─ Nav
  ├─ Hero
  │   └─ InteractiveDashboard (imported)
  ├─ WhoBenefits
  ├─ PainPoints
  ├─ PlatformModules
  ├─ HowItWorks
  ├─ Testimonials
  ├─ Pricing
  ├─ TrustSection
  ├─ FinalCta
  └─ Footer

/src/app/components/InteractiveDashboard.tsx
  ├─ KPICard
  └─ BarRow
```

---

## Assets

| Asset | File | Used In |
|---|---|---|
| Logo (nav) | `figma:asset/a65d01e...` | Nav |
| Logo (footer) | `figma:asset/195d19c...` | Footer |
| Hero background shape | `figma:asset/0c7863a...` | (imported, currently not rendered) |
| Community banner | `figma:asset/05796020...` | Platform Module card |
| Stewardship banner | `figma:asset/3d6d946...` | Platform Module card |
| Planning banner | `figma:asset/6d9bc748...` | Platform Module card |
| Communication banner | `figma:asset/3868d4a7...` | Platform Module card |

---

## Design Principles & Notes

1. **Green-first hierarchy:** Deep forest green (`#00351d`) anchors trust and authority. Mid-green (`#1a6640`) carries interactive and heading energy.
2. **Gold as the accent:** Gold (`#b8973a`) never competes with green — it punctuates, highlights, and rewards attention (headlines, stats, stars, badges).
3. **Sage surfaces breathe:** `#f6fbf3` and `#eaf3e5` alternate as section backgrounds to create rhythm without harsh contrast changes.
4. **Shadows are branded:** All drop shadows tint toward the brand green rather than black — maintaining warmth and cohesion.
5. **Typography is binary:** Every text element is either Urbanist (display, identity, numbers) or DM Sans (reading, description). No mixing within a context.
6. **Radius is generous:** Cards use `rounded-[20px]` minimum; primary containers use `rounded-3xl`. Pills and badges are always `rounded-full`.
7. **Micro-interactions are intentional:** Every hover state lifts, shifts, or highlights — never just a color change alone. Motion reinforces the "premium but approachable" feel.
8. **Animation ease is spring-like:** The shared `[0.16, 1, 0.3, 1]` cubic-bezier creates a subtle bounce-settle that feels lively without being bouncy.
9. **Stagger is subtle:** Card grids stagger with `i * 0.07–0.1s` delay — visible enough to feel choreographed, subtle enough not to feel slow.
10. **Dark sections use opacity-based text:** On gradient backgrounds, body text uses `rgba(255,255,255,0.62)` or `rgba(255,255,255,0.55)` — never pure white for body, which would feel harsh.
