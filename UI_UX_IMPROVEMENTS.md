# StewardTrack Landing Page — UI/UX Improvement Notes

Target audience: Filipino church leaders — treasurers, pastors, admins, secretaries, volunteers.
Tone principle: Every suggestion honors their faithful work. StewardTrack is a gift and companion, never a replacement.

---

## 🟢 HIGH PRIORITY — Conversion & Clarity

### 1. Mobile Navigation is Missing
**Problem:** Nav links (`Who It's For`, `Features`, `Pricing`, `FAQ`) are hidden on mobile (`hidden md:flex`). The only clickable element on mobile is the "Try Free" button. Users scrolling on phones have no way to jump to sections.
**Fix:** Add a hamburger menu (`☰`) that opens a slide-down or drawer menu on mobile. Or at minimum, show a compact row of 3–4 icon-only links.

---

### 2. Hero CTA — "Replace notebooks" wording still feels slightly critical
**Current:** `"Replace notebooks with clarity — without losing control."`
**Problem:** "Replace" still implies the old way was wrong. The audience is proud of their faithfulness.
**Suggested revision:** `"Bring your faithful records into the digital age — without losing a thing."` or `"Keep your faithfulness. Add the clarity your church deserves."`

---

### 3. Pricing — Filipino tier names need a short English subtitle
**Problem:** `Mananampalataya`, `Lingkod`, `Katiwala`, `Tagapangasiwa` are meaningful in Tagalog but could confuse Visayan or Ilocano church leaders — and make quick price comparison harder at a glance.
**Current state:** Each card has a `subtitle` field (e.g., "Perfect Start", "Full Power") but these are shown in small grey text.
**Fix:** Make the Filipino name secondary, the English subtitle the prominent label. Or add a tooltip/footnote with the English translation and meaning:
- *Mananampalataya* — "Believer" (Free)
- *Lingkod* — "Servant"
- *Katiwala* — "Steward"
- *Tagapangasiwa* — "Administrator"
The names are beautiful — give users a chance to appreciate them.

---

### 4. Pricing — Tagapangasiwa (enterprise) CTA should say "Talk to Us"
**Problem:** The top-tier plan says "Start Free Trial" — but large/multi-campus churches typically need a conversation before committing.
**Fix:** Change CTA to `"Talk to Us"` or `"Get a Demo"` linking to a contact form or email. This also sets the right expectation for that tier.

---

### 5. Pain Points — Numbered circles are red (alarming color)
**Problem:** The 5 pain-point items use `bg-[#c0392b]` (bright red) numbered badges. On a page that's all gentle green and gold, the red reads as errors or warnings — adding anxiety rather than empathy.
**Fix:** Change to `bg-[#b8973a]` (gold) or `bg-[#1a6640]` (brand green). The goal is "we understand your challenges" not "these are critical failures."

---

### 6. "Who It's For" — 5-column grid orphans last card on medium screens
**Problem:** `lg:grid-cols-5` + `sm:grid-cols-2` = 2+2+1 layout. The 5th card (Volunteers) sits alone at full width in a row, which looks unfinished.
**Fix:** Use `sm:grid-cols-2 lg:grid-cols-5` but wrap the 5-card set in a centered flex container instead of a strict grid, or use `grid-cols-3` on medium → `grid-cols-5` on large.

---

## 🟡 MEDIUM PRIORITY — Engagement & Trust

### 7. Getting Started section — no CTA after the flow
**Problem:** After a user reads the 4-step "Sign Up → Set Up → Enter → See" flow, there's no button to act on it. The user's momentum dies at the section break.
**Fix:** Add a centered CTA button below the step row:
```
[ Start for Free — It Takes 10 Minutes ]
```
Use the gold button style (`bg-[#b8973a]`) to stand out on the dark green background.

---

### 8. Testimonials — initials-only avatars feel anonymous
**Problem:** Colored circles with single letters (M, P, A) are better than nothing but feel impersonal for an audience that values relationship and trust.
**Options (in order of effort):**
- Add a church icon or simple illustrated avatar (can be done with Lucide's `Church` or `User` icon)
- Add the church name as a separate line beneath the person's name (already done — good!)
- Consider illustrated head silhouettes with different skin tones representing Filipino faces
**Note:** Do NOT use stock photos — fake photos erode trust faster than initials.

---

### 9. Testimonials — quote marks are decorative gold `"` but the actual quote is grey
**Problem:** The visual hierarchy shows a large gold `"` then a grey quote — but the *reader* instinctively looks for the name/role after the quote mark, not before. The flow feels backwards.
**Fix:** Move the large opening quote mark inline at the start of the quote text, or use a full-width quote-mark background watermark. Alternatively, start the card with the person's name + role at the top, then the quote below — this lets readers immediately connect the face/name to the words.

---

### 10. PlatformModules — "Tier" badges need a legend or tooltip
**Problem:** Cards show badges like `All Tiers`, `Professional`, `Premium+` — but there's no reference to the pricing section here. A first-time visitor won't know what these mean.
**Fix:** Make the badge a link that scrolls to the pricing section, or add a small footnote: `"See all plans ↓"` beneath the module grid.

---

### 11. Footer is minimal — missing important links
**Current:** Logo · Copyright · `docs.stewardtrack.com` · Privacy · Terms
**Missing for a Filipino church SaaS audience:**
- Contact / Support email or link
- Facebook page link (Filipinos use Facebook heavily — this is a trust signal)
- "About Us" or "Our Story" (who built this and why — builds credibility)
- Language: Consider a `Filipino / English` toggle — even a placeholder shows cultural intent

---

### 12. Hero stats animation — counters could animate up on load
**Current:** Stats (`₱0 to start`, `10 min`, `100%`) appear via `FadeUp` opacity animation.
**Opportunity:** Animate the numeric values counting up (e.g., `0% → 100%`, `0 → 10 min`). This is a micro-delight that draws eyes to the numbers and makes them feel earned.
**Note:** Only worth doing if it doesn't delay perceived load time.

---

## 🔵 LOW PRIORITY — Polish & Delight

### 13. Hero badge — star emoji feels out of place
**Current:** `⭐ Built for Filipino Churches`
**Problem:** The star emoji breaks the icon consistency (all other icons are Lucide throughout). It also renders differently across OS and devices.
**Fix:** Replace with a Lucide icon — `<Heart size={12} />` or `<Church size={12} />` (if available) or `<MapPin size={12} />` — inside the gold pill badge.

---

### 14. Section alternation — too many dark green sections back to back
**Current page color flow:**
1. Hero → `#f6fbf3` (light green) ✅
2. Who It's For → dark green gradient ✅
3. Pain Points → `#eaf3e5` (soft green) ✅
4. Platform Modules → `#f6fbf3` (light) ✅
5. Getting Started → dark green gradient ⚠️ (same as #2)
6. Testimonials → `#eaf3e5` ✅
7. Pricing → white ✅
8. Trust/FAQ → `#eaf3e5` ⚠️ (same as #6 and #3)
9. Final CTA → dark green gradient ⚠️ (3rd dark green)
**Fix:** Consider making Getting Started use a subtle gold/warm tone (`#fdf6e3` background with dark text) to break the green repetition. Or vary the Trust/FAQ section to use a white background.

---

### 15. Dashboard mockup — "Live data" indicator always shows while hovering
The blinking green dot labeled "Live data" that appears on hover is a nice touch, but the copy could be warmer for the church context:
- `Live data` → `Real records, always safe`
- or keep it — it signals modernity which appeals to younger church leaders

---

### 16. Pain Points — card has no visual anchor for the right-side copy
**Problem:** The left card (pain list) and right copy text sit side-by-side. On larger screens the right side has a lot of empty vertical space below the button.
**Fix:** Add a small visual element below the "See the Solution" button — e.g., 3 small trust badges or icons: `🔒 Secure · 🇵🇭 Filipino-made · ₱0 to start`.

---

### 17. Accessibility — color contrast check needed
The following combinations should be verified for WCAG AA compliance (4.5:1 ratio for normal text):
- `text-[rgba(255,255,255,0.55)]` on dark green background (Step descriptions, Who It's For descriptions)
- `text-[rgba(255,255,255,0.38)]` in footer — this is very faint
- `text-[#4a5a4a]` on `#eaf3e5` background (Pain Points, Trust section body text)
- Gold text `#b8973a` on white — used in KPI trend labels
**Tool to check:** [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker)

---

## 📋 Summary Table

| # | Area | Priority | Effort |
|---|------|----------|--------|
| 1 | Mobile navigation hamburger menu | 🔴 High | Medium |
| 2 | Hero "Replace notebooks" wording | 🔴 High | Low |
| 3 | Pricing — Filipino name translations | 🔴 High | Low |
| 4 | Tagapangasiwa CTA → "Talk to Us" | 🔴 High | Low |
| 5 | Pain point badges — red → gold/green | 🔴 High | Low |
| 6 | Who It's For — 5-col grid orphan fix | 🔴 High | Low |
| 7 | Getting Started — add CTA button | 🟡 Medium | Low |
| 8 | Testimonials — improve avatars | 🟡 Medium | Medium |
| 9 | Testimonials — quote flow/hierarchy | 🟡 Medium | Low |
| 10 | Module tier badges → link to pricing | 🟡 Medium | Low |
| 11 | Footer — add contact, Facebook, About | 🟡 Medium | Medium |
| 12 | Hero stats counter animation | 🟡 Medium | Medium |
| 13 | Hero badge — replace star emoji | 🔵 Low | Low |
| 14 | Section color alternation | 🔵 Low | Low |
| 15 | Dashboard "Live data" copy | 🔵 Low | Low |
| 16 | Pain Points — right column anchor | 🔵 Low | Low |
| 17 | Accessibility contrast audit | 🔵 Low | Low |

---

*Generated: 2026-04-02 · For StewardTrack v1 launch · Filipino church leaders audience*
