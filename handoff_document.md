<USER_REQUEST>
# ownRewards — Frontend Developer Handoff Document
## Promotional Website — Complete Specification

**Product:** ownRewards
**Company:** iEyal Solutions
**Prepared by:** Product & Engineering Team
**Date:** July 2026
**Version:** 1.0
**For:** Frontend Developer — Antigravity Build

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Website Architecture](#2-website-architecture)
3. [Design System](#3-design-system)
4. [Shared Components — Navbar & Footer](#4-shared-components)
5. [Page 1 — Home](#5-page-1-home)
6. [Page 2 — Features](#6-page-2-features)
7. [Page 3 — How It Works](#7-page-3-how-it-works)
8. [Page 4 — Use Cases](#8-page-4-use-cases)
9. [Page 5 — Analytics](#9-page-5-analytics)
10. [Page 6 — Pricing](#10-page-6-pricing)
11. [Page 7 — About](#11-page-7-about)
12. [Mock UI Component Specs](#12-mock-ui-component-specs)
13. [SEO Requirements](#13-seo-requirements)
14. [Technical Requirements](#14-technical-requirements)
15. [Master Antigravity Build Prompt](#15-master-antigravity-build-prompt)

---

## 1. Product Overview

**ownRewards** is a full-stack customer retention intelligence engine — a multi-tenant loyalty, rewards, rule, referral, and analytics platform built for restaurants, retail chains, and e-commerce brands.

### What ownRewards Does (The 6 Pillars)

| Pillar | Description |
|---|---|
| **Loyalty Points Engine** | Customers earn points on every purchase. 4-tier system: Bronze → Silver → Gold → Platinum |
| **Rule Engine** | 30+ event triggers fire automatic actions — award points, grant rewards, issue coupons, send notifications |
| **Smart Rewards & Coupons** | Percentage, flat, free product, free shipping, buy-X-get-Y — with budget controls and eligibility rules |
| **Referral Programs** | Dual-sided rewards (referrer + referee), loyalty gates, anti-fraud limits, 4 program types |
| **Campaigns** | 7 campaign types with A/B testing, audience targeting by segment/tier, omnichannel delivery |
| **Analytics** | Reward ROI, cohort retention, product intelligence, tier distribution, LTV prediction |

### Target Audience for the Website
- Restaurant chain owners and operations managers
- Retail brand managers running multi-outlet operations
- D2C / e-commerce marketing managers
- IT managers evaluating loyalty platform integrations

### Positioning Statement
> *"ownRewards is the intelligent loyalty and retention platform for growing businesses — combining points, rewards, coupons, referrals, and AI-driven rules in one engine."*

---

## 2. Website Architecture

### File Structure
```
ownrewards-website/
├── index.html           ← Page 1: Home (Main Landing)
├── features.html        ← Page 2: Full Feature Showcase
├── how-it-works.html    ← Page 3: Step-by-Step Flow
├── use-cases.html       ← Page 4: Industry Use Cases
├── analytics.html       ← Page 5: Analytics & ROI Showcase
├── pricing.html         ← Page 6: Pricing Plans + FAQ
├── about.html           ← Page 7: About iEyal Solutions
└── css/
    └── style.css        ← Shared Design System (all pages link this)
```

### Navigation Structure
```
Logo (🏆 ownRewards) | Features | How It Works | Use Cases | Analytics | Pricing | About | [Start Free →]
```

### Page Flow
```
Home → Features → How It Works → Use Cases → Analytics → Pricing → About
  ↓        ↓           ↓              ↓            ↓          ↓
[Get Started Free] appears on EVERY page as the primary CTA
```

---

## 3. Design System

### 3.1 Color Palette

Implement all of these as CSS custom properties in `css/style.css`:

```css
:root {
  /* ── Page Backgrounds ──────────────────────── */
  --bg:             #07070F;   /* Deepest page background */
  --surface:        #0D0D1C;   /* Section alternating background */
  --card:           #121228;   /* Card base */
  --card-hover:     #171738;   /* Card on hover */

  /* ── Brand Colors ───────────────────────────── */
  --primary:        #F59E0B;   /* Loyalty Gold — primary brand */
  --primary-dark:   #D97706;   /* Darker gold for button hover */
  --secondary:      #6366F1;   /* Indigo — secondary tech accent */
  --accent:         #EC4899;   /* Magenta — for campaigns/energy */

  /* ── Gradients ──────────────────────────────── */
  --gradient:       linear-gradient(135deg, #F59E0B, #EC4899);
  --gradient-cool:  linear-gradient(135deg, #6366F1, #8B5CF6);
  --gradient-gold:  linear-gradient(135deg, #F59E0B, #D97706);

  /* ── Loyalty Tier Colors (EXACT — from DB enum) ─ */
  --tier-bronze:    #CD7F32;
  --tier-silver:    #94A3B8;
  --tier-gold:      #F59E0B;
  --tier-platinum:  #E2E8F0;

  /* ── Status Colors ──────────────────────────── */
  --success:        #10B981;   /* Active, earned, completed */
  --warning:        #F59E0B;   /* Pending, at-risk */
  --error:          #EF4444;   /* Expired, churned, depleted */
  --info:           #3B82F6;   /* Processing, neutral info */

  /* ── Text ───────────────────────────────────── */
  --text:           #F1F5F9;   /* Primary body text */
  --muted:          #94A3B8;   /* Secondary / label text */
  --faint:          #64748B;   /* Placeholder / footer text */

  /* ── Borders ────────────────────────────────── */
  --border:         rgba(255, 255, 255, 0.07);
  --border-glow:    rgba(245, 158, 11, 0.30);   /* Gold glow on hover */
  --border-glow-secondary: rgba(99, 102, 241, 0.30); /* Indigo glow */

  /* ── Spacing & Radius ────────────────────────── */
  --radius-sm:      8px;
  --radius:         16px;
  --radius-lg:      24px;
  --radius-xl:      32px;
  --nav-h:          72px;
  --section-pad:    100px 0;
  --container-max:  1200px;
  --container-pad:  0 24px;
}
```

### 3.2 Tier Badge Styles (Use exactly — must match product UI)

```css
.badge-bronze {
  background: rgba(205, 127, 50, 0.15);
  color: #CD7F32;
  border: 1px solid rgba(205, 127, 50, 0.3);
}
.badge-silver {
  background: rgba(148, 163, 184, 0.15);
  color: #94A3B8;
  border: 1px solid rgba(148, 163, 184, 0.3);
}
.badge-gold {
  background: rgba(245, 158, 11, 0.15);
  color: #F59E0B;
  border: 1px solid rgba(245, 158, 11, 0.3);
}
.badge-platinum {
  background: rgba(226, 232, 240, 0.15);
  color: #E2E8F0;
  border: 1px solid rgba(226, 232, 240, 0.3);
}
```

### 3.3 Typography

```css
/* Import in <head> of every HTML file */
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

/* Base */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text);
  background: var(--bg);
}

/* Scale */
.display   { font-size: clamp(3rem, 7vw, 5.5rem);    font-weight: 900; }
.headline  { font-size: clamp(1.75rem, 4vw, 3rem);   font-weight: 800; }
.title     { font-size: clamp(1.25rem, 2.5vw, 1.75rem); font-weight: 700; }
.body-lg   { font-size: 1.125rem; line-height: 1.75; }
.body      { font-size: 1rem;     line-height: 1.7;  }
.small     { font-size: 0.875rem; }
.label     { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }

/* Gradient headline text effect */
.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200%;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}
```

### 3.4 Key Animations

Implement all of these in `css/style.css`:

```css
/* ── Scroll Reveal (via IntersectionObserver JS) ── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Card Hover Lift ── */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  border-color: var(--border-glow);
  box-shadow: 0 0 40px rgba(245, 158, 11, 0.15), 0 8px 32px rgba(0,0,0,0.4);
}

/* ── Float Animation (hero mock UI) ── */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
.float { animation: float 4s ease-in-out infinite; }

/* ── Pulse (live indicator badges) ── */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.7; transform: scale(1.05); }
}
.pulse { animation: pulse 2s ease-in-out infinite; }

/* ── Progress Bar Fill ── */
@keyframes fillBar {
  from { width: 0%; }
  to   { width: var(--fill-width); }
}

/* ── Counter (JS-driven, CSS for style) ── */
.counter { font-variant-numeric: tabular-nums; }

/* ── Glassmorphism Navbar (on scroll) ── */
.navbar.scrolled {
  background: rgba(7, 7, 15, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

/* ── Button Styles ── */
.btn-primary {
  background: var(--gradient-gold);
  color: #07070F;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 24px rgba(245, 158, 11, 0.35);
}
.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.45);
}

.btn-outline {
  background: transparent;
  color: var(--text);
  font-weight: 600;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.btn-outline:hover {
  border-color: var(--border-glow);
  background: rgba(245, 158, 11, 0.06);
}
```

### 3.5 Responsive Breakpoints

```css
/* Mobile first. Override at these breakpoints: */
@media (min-width: 480px)  { /* Small phones */ }
@media (min-width: 768px)  { /* Tablets */ }
@media (min-width: 1024px) { /* Laptops */ }
@media (min-width: 1280px) { /* Wide desktops */ }
```

---

## 4. Shared Components

### 4.1 Navigation Bar

**Appears identically on ALL 7 pages.** The active page link gets `.active` class.

```html
<header id="main-navbar" class="navbar">
  <nav class="nav-container">
    <a href="index.html" class="nav-logo" id="nav-logo">
      🏆 <span>ownRewards</span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="features.html" id="nav-features">Features</a></li>
      <li><a href="how-it-works.html" id="nav-howitworks">How It Works</a></li>
      <li><a href="use-cases.html" id="nav-usecases">Use Cases</a></li>
      <li><a href="analytics.html" id="nav-analytics">Analytics</a></li>
      <li><a href="pricing.html" id="nav-pricing">Pricing</a></li>
      <li><a href="about.html" id="nav-about">About</a></li>
    </ul>
    <a href="#cta" class="btn-primary nav-cta" id="nav-cta">Start Free →</a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">☰</button>
  </nav>
</header>
```

**Navbar CSS rules:**
```css
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
}
.nav-logo { font-size: 1.25rem; font-weight: 800; color: var(--text); text-decoration: none; }
.nav-logo span { color: var(--primary); }
.nav-links { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; margin-left: auto; }
.nav-links a { color: var(--muted); text-decoration: none; font-weight: 500; font-size: 0.9rem;
               transition: color 0.2s ease; }
.nav-links a:hover, .nav-links a.active { color: var(--primary); }
.nav-links a.active { border-bottom: 2px solid var(--primary); padding-bottom: 2px; }
```

**Navbar JavaScript (add to each page's `<script>`):**
```javascript
// Glassmorphism on scroll
const navbar = document.getElementById('main-navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = prefix + value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = true;
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
```

### 4.2 Footer

**Appears identically on ALL 7 pages.**

```html
<footer id="main-footer">
  <div class="footer-container">
    <div class="footer-brand">
      <div class="footer-logo">🏆 ownRewards</div>
      <p class="footer-tagline">Intelligent loyalty for growing businesses.</p>
      <div class="footer-ecosystem">
        <span class="ecosystem-label">Part of the iEyal ecosystem:</span>
        <div class="ecosystem-links">
          <a href="#">💬 ownChat</a>
          <a href="#">🏆 ownRewards</a>
          <a href="#">🛒 ownCart</a>
          <a href="#">✅ ownTask</a>
        </div>
      </div>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <h4>Product</h4>
        <a href="features.html">Features</a>
        <a href="how-it-works.html">How It Works</a>
        <a href="analytics.html">Analytics</a>
        <a href="pricing.html">Pricing</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="use-cases.html">Use Cases</a>
        <a href="about.html">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 ieyal Solutions. All rights reserved.</p>
  </div>
</footer>
```

---

## 5. Page 1: Home (`index.html`)

**SEO Title:** `ownRewards — Smart Loyalty & Retention Platform for Growing Businesses`
**Meta Description:** `Build a loyalty program that actually drives repeat business. Points, rewards, coupons, referrals, and automated rules — all in one intelligent platform.`
**H1:** `Stop losing customers. Start rewarding loyalty.`
**Active Nav Item:** none (home is logo)

---

### Section 1.1 — Hero

**Section ID:** `id="hero"`

**Layout:** Full viewport height. Left column = text. Right column = floating mock UI card. Animated mesh gradient background (pure CSS radial gradients).

**Background (CSS):**
```css
#hero {
  min-height: 100vh;
  padding-top: var(--nav-h);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
#hero::before {
  content: '';
  position: absolute;
  top: -200px; left: -200px;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%);
  pointer-events: none;
}
#hero::after {
  content: '';
  position: absolute;
  bottom: -200px; right: -200px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
  pointer-events: none;
}
```

**Left Column Content (exact copy):**

Eyebrow Badge:
```
✨ AI-Powered Customer Retention
```
(Style: small pill, background rgba(245,158,11,0.1), border rgba(245,158,11,0.25), color var(--primary), font-weight 600)

H1 (gradient text effect):
```
Stop losing customers.
Start rewarding loyalty.
```

Subheading (color: var(--muted), font-size: 1.125rem):
```
ownRewards gives your business a complete loyalty engine — points, tiers,
smart rules, automated rewards, coupons, and referrals — all triggered
by real customer behavior.
```

CTA Buttons:
- Primary: `Get Started Free →` (btn-primary class, links to `#cta-banner`)
- Secondary: `See How It Works` (btn-outline class, links to `how-it-works.html`)

**Right Column Content — Floating Loyalty Card Mock:**

See Section 12 for full HTML/CSS spec. Add class `float` to the mock container.

---

### Section 1.2 — Stats Strip

**Section ID:** `id="stats-strip"`

**Layout:** Horizontal flex row, 5 items, dividers between.

**Items (exact text):**
```
30+ Rule Triggers  |  4 Loyalty Tiers  |  10 Reward Actions  |  Dual-Sided Referrals  |  Real-Time ROI Analytics
```

**Style:** Background `var(--surface)`, padding `20px 0`, text `var(--muted)`, font-weight 600, font-size 0.875rem, uppercase, letter-spacing 0.05em. Numbers in `var(--primary)`.

---

### Section 1.3 — "What Makes ownRewards Different" (3 columns)

**Section ID:** `id="differentiators"`

**Headline:** `Why businesses choose ownRewards`
(center aligned, class "headline")

**3 Cards — exact copy:**

Card 1 (icon: 🧠):
- **Title:** `Rules That Think`
- **Body:** `Not just "earn 1 point per ₹100". Set 30+ trigger events — birthday, nth visit, inactivity, feedback, referral — and automate any action: bonus points, reward grants, tier changes, coupon issuance.`

Card 2 (icon: 🏆):
- **Title:** `Tiers That Mean Something`
- **Body:** `Bronze → Silver → Gold → Platinum with dynamic progression, tier-based multipliers, and lifecycle stage tracking (active, at-risk, churned). Customers feel the difference.`

Card 3 (icon: 📊):
- **Title:** `Analytics That Drive Decisions`
- **Body:** `Track cohort retention curves, reward ROI, product correlations, and customer lifetime value — not just points totals.`

---

### Section 1.4 — Feature Preview Tabs

**Section ID:** `id="feature-tabs"`

**Headline:** `See ownRewards in action`

**Tab Buttons (5 tabs):**
- `id="tab-btn-loyalty"` → `Loyalty Dashboard`
- `id="tab-btn-rules"` → `Rule Engine`
- `id="tab-btn-coupons"` → `Smart Coupons`
- `id="tab-btn-referral"` → `Referral Program`
- `id="tab-btn-analytics"` → `Analytics`

**Tab Panels:**

Panel 1 — `id="tab-panel-loyalty"`:
Show the Loyalty Dashboard Mock (see Section 12.1).
Caption: *"Customer wallet showing tier badge, point balance, progress to next tier, and recent activity."*

Panel 2 — `id="tab-panel-rules"`:
Show the Rule Card Mock (see Section 12.2).
Caption: *"A birthday rule automatically awards 500 bonus points and issues a BDAY20 coupon — no manual work."*

Panel 3 — `id="tab-panel-coupons"`:
Show the Coupon Card Mock (see Section 12.3).
Caption: *"Smart coupons with category-specific applicability, usage tracking, and rule-gated eligibility."*

Panel 4 — `id="tab-panel-referral"`:
Show the Referral Summary Mock (see Section 12.4).
Caption: *"Both the referrer and the new customer get independent, configurable rewards."*

Panel 5 — `id="tab-panel-analytics"`:
Show the Analytics Metrics Mock (see Section 12.5).
Caption: *"Real-time cohort retention, reward ROI, and tier distribution — all filterable by date and outlet."*

**Tab JS (vanilla):**
```javascript
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});
```

---

### Section 1.5 — How It Works (3 Steps)

**Section ID:** `id="how-it-works-preview"`

**Headline:** `Up and running in 3 simple steps`

**Steps (with connecting dashed animated line between them):**

Step 1 (number badge: `01`):
- **Icon:** 🏗️
- **Title:** `Configure Your Loyalty Rules`
- **Body:** `Set up point earning rules, tier thresholds, and reward templates in minutes. Use our Rule Library to import pre-built blueprints for your industry — restaurant, retail, or e-commerce.`

Step 2 (number badge: `02`):
- **Icon:** ⚡
- **Title:** `Rules Fire on Real Events`
- **Body:** `Every bill, birthday, referral, feedback, or inactivity — ownRewards listens and acts automatically. No manual work, no missed opportunities.`

Step 3 (number badge: `03`):
- **Icon:** 📈
- **Title:** `Watch Retention Grow`
- **Body:** `Track cohort retention, reward ROI, customer lifecycle health, and tier movement — then adjust your rules based on real data.`

**Link below:** `See the full flow →` (links to `how-it-works.html`)

---

### Section 1.6 — Testimonials

**Section ID:** `id="testimonials"`

**Headline:** `Trusted by businesses across India`

**3 Testimonial Cards:**

Card 1:
- **Quote:** `"ownRewards' birthday automation brought back 34% of churned customers in just 90 days. Nothing else we tried came close."`
- **Attribution:** `— Marketing Head, QSR Chain (6 outlets)`

Card 2:
- **Quote:** `"The rule engine replaced 3 different tools we were using. Our entire loyalty, campaign, and notification stack is now one system."`
- **Attribution:** `— Head of CX, Retail Brand`

Card 3:
- **Quote:** `"Our referral program generated ₹4.2L in new customer revenue in the first month. Setup took one afternoon."`
- **Attribution:** `— Founder, D2C Brand`

**Card style:** Dark glassmorphism — `background: rgba(18,18,40,0.5)`, `backdrop-filter: blur(8px)`. Quote text in `var(--text)`. Attribution in `var(--muted)`. Left border in `var(--primary)`.

---

### Section 1.7 — Integration Strip

**Section ID:** `id="integrations"`

**Headline (small, centered):** `Built to connect with your stack`

**Items (text-only badges):**
```
🧾 Petpooja  ·  📱 Custom POS  ·  💬 ownChat (WhatsApp)  ·  🔗 REST API  ·  📡 Webhooks  ·  🛒 ownCart
```

---

### Section 1.8 — CTA Banner

**Section ID:** `id="cta-banner"`

**Layout:** Full-width dark gradient section.

**Background:** `background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(236,72,153,0.1));`
**Border top/bottom:** `1px solid var(--border-glow);`

**Headline:** `Your best customers deserve better than a paper stamp card.`
(class "headline", centered, gradient text)

**Sub:** `Set up ownRewards in minutes. No dev team needed. No complex migrations.`
(class "body-lg", centered, color var(--muted))

**Button:** `Start Free — No Credit Card Required` (btn-primary, centered)

---

## 6. Page 2: Features (`features.html`)

**SEO Title:** `ownRewards Features — Loyalty, Rules, Coupons, Referrals & Analytics`
**Meta Description:** `Explore ownRewards' full feature set: rule engine with 30+ triggers, 4-tier loyalty, smart coupons, dual-sided referrals, cohort analytics and more.`
**H1:** `Every tool your business needs to keep customers coming back.`
**Active Nav:** `nav-features`

---

### Section 2.1 — Features Hero

**Section ID:** `id="features-hero"`

Sub headline below H1:
```
16 production-ready features. One integrated platform. Zero bloat.
```

---

### Section 2.2 — Features Grid (4 columns × 4 rows = 16 cards)

**Section ID:** `id="features-grid"`

Group 1 Label (pill badge above group): `LOYALTY ENGINE`

**Card 1** — `id="feat-tiers"`:
- Icon: 🏆
- Title: `4-Tier Customer System`
- Body: `Bronze → Silver → Gold → Platinum with configurable spend thresholds, tier-specific multipliers, and full tier history per customer.`

**Card 2** — `id="feat-points"`:
- Icon: 💰
- Title: `Smart Points Earning`
- Body: `Award points on every purchase. Configure points-per-rupee ratio, tier multipliers, and track earned vs. bonus points separately.`

**Card 3** — `id="feat-expiry"`:
- Icon: ⏳
- Title: `Points Expiry Control`
- Body: `Set expiry windows, trigger automated WhatsApp expiry alerts, and let customers see their expiring balance in real time.`

**Card 4** — `id="feat-otp"`:
- Icon: 🔑
- Title: `OTP-Verified Redemption`
- Body: `Require WhatsApp OTP before any points redemption. Prevent fraud. Ensure the right customer is redeeming at the right outlet.`

Group 2 Label: `RULE ENGINE`

**Card 5** — `id="feat-triggers"`:
- Icon: ⚡
- Title: `30+ Event Triggers`
- Body: `Birthday, anniversary, inactivity, nth visit, referral, feedback, bill creation, cart validation, segment changes — any event fires any rule.`

**Card 6** — `id="feat-actions"`:
- Icon: 🎯
- Title: `10 Action Types`
- Body: `Calculate points, add bonus, grant reward, issue coupon, change tier, send notification, add to segment, trigger workflow — all configurable per rule.`

**Card 7** — `id="feat-rule-library"`:
- Icon: 📚
- Title: `Rule Library Templates`
- Body: `Pre-built rule blueprints by industry (restaurant, retail, ecommerce) and category (growth, retention, engagement). Install in one click.`

**Card 8** — `id="feat-ab-testing"`:
- Icon: 🧪
- Title: `A/B Testing Built-In`
- Body: `Test two rule variations against a control group. Measure which drives more conversions. Data-driven rule optimization, built-in.`

Group 3 Label: `REWARDS & COUPONS`

**Card 9** — `id="feat-reward-modes"`:
- Icon: 🎁
- Title: `Dual Redemption Modes`
- Body: `Pre-Bill (instant cart discount) or Post-Issuance (wallet reward stored for later). Match the mode to your business workflow.`

**Card 10** — `id="feat-coupons"`:
- Icon: 🏷️
- Title: `Smart Coupons`
- Body: `5 discount types: percentage, fixed amount, free product, free shipping, buy-X-get-Y. Set applicability by product, category, or "all except".`

**Card 11** — `id="feat-budget"`:
- Icon: 💳
- Title: `Budget-Controlled Rewards`
- Body: `Set max total value, max issuances, or spending caps. Budget exhaustion auto-deactivates the reward — no overspend, ever.`

**Card 12** — `id="feat-eligibility"`:
- Icon: 🔗
- Title: `Rule-Linked Eligibility`
- Body: `Gate coupon access using Rule Engine conditions. Only customers who meet specific criteria — tier, spend, visits — can validate a coupon.`

Group 4 Label: `REFERRAL PROGRAMS`

**Card 13** — `id="feat-dual-referral"`:
- Icon: 👥
- Title: `Dual-Sided Referral Rewards`
- Body: `Separate reward configs for referrer (sharer) and referee (new joiner). Points, percentage, flat discount, or cash — each side independently configured.`

**Card 14** — `id="feat-referral-trigger"`:
- Icon: 🎯
- Title: `Referral Trigger Control`
- Body: `Award on signup, first purchase, nth purchase, or custom events. Set minimum purchase to qualify. Anti-fraud daily limits per customer.`

**Card 15** — `id="feat-referral-gates"`:
- Icon: 🔒
- Title: `Loyalty-Gated Referrals`
- Body: `Require minimum tier, minimum points, minimum lifetime spend, or minimum days-as-member before a customer can create a referral code.`

**Card 16** — `id="feat-campaigns"`:
- Icon: 📣
- Title: `7 Campaign Types`
- Body: `Seasonal, event-based, milestone, feedback-driven, win-back, birthday, anniversary — with audience targeting, A/B testing, and omnichannel delivery.`

---

### Section 2.3 — Deep Dive: Rule Engine

**Section ID:** `id="deep-dive-rules"`

**Layout:** Left = content, Right = Rule Card Mock (see Section 12.2)

**Headline:** `The brain of your loyalty program.`

**Trigger Events grouped list (3 columns):**

Transactional:
- `bill_created` · `cart_validated` · `bill_refunded` · `payment_completed`

Behavioral:
- `customer_first_visit` · `customer_nth_visit` · `customer_milestone_reached`

Temporal:
- `customer_birthday` · `customer_anniversary` · `customer_win_back` · `inactivity_detected` · `loyalty_expiring_soon`

Engagement:
- `customer_feedback_submitted` · `customer_reviewed` · `customer_referred`

**Sub-copy:**
```
Each trigger supports AND/OR condition logic. Set execution limits per customer
and globally. Run A/B test variants (A/B/control) on any rule.
```

---

### Section 2.4 — Deep Dive: Customer Segments

**Section ID:** `id="deep-dive-segments"`

**Layout:** Full width, dark surface background

**Headline:** `Know exactly which customers are worth activating.`

**3 Metric cards (horizontal row):**

Card 1:
- Metric: `Health Score`
- Description: AI-calculated segment vitality based on engagement, spend, and visit frequency.

Card 2:
- Metric: `Churn Risk`
- Description: Predict which customers are about to leave — before they do.

Card 3:
- Metric: `Predicted LTV`
- Description: Forecast lifetime value per customer segment based on purchase patterns.

**CTA Link:** `See full analytics →` (links to `analytics.html`)

---

## 7. Page 3: How It Works (`how-it-works.html`)

**SEO Title:** `How ownRewards Works — From First Visit to Loyal Customer`
**Meta Description:** `See exactly how ownRewards automates loyalty earning, reward issuance, coupon delivery, and referral rewards — triggered by real business events.`
**H1:** `From first visit to loyal superfan — automatically.`
**Active Nav:** `nav-howitworks`

---

### Section 3.1 — Hero

**Section ID:** `id="hiw-hero"`

Sub: `No manual processes. No missed moments. Just a loyalty engine that runs itself.`

---

### Section 3.2 — Full Flow (8 Steps)

**Section ID:** `id="hiw-steps"`

**Layout:** Vertical timeline with alternating left/right content and a connecting vertical line with step number circles.

**Step 1** — `id="step-1"`:
- **Icon:** 🧾
- **Title:** `Customer Makes a Purchase`
- **Body:** `A bill is created in the POS (Petpooja or custom). ownRewards receives the bill event via webhook — including order amount, items, and customer phone number.`
- **Highlight pill:** `Event: bill_created`

**Step 2** — `id="step-2"`:
- **Icon:** 💰
- **Title:** `Points Calculated Instantly`
- **Body:** `The system calculates points based on order total × points-per-rupee ratio, then applies the customer's tier multiplier. Bronze gets 1×, Gold gets 2×, Platinum gets 3×.`
- **Highlight pill:** `Rule Type: loyalty_earning`

**Step 3** — `id="step-3"`:
- **Icon:** ⚡
- **Title:** `Rule Engine Evaluates`
- **Body:** `All active rules for the bill_created event are evaluated in priority order. Each rule checks its conditions — customer tier, order amount, day of week, visit count, and more.`
- **Highlight pill:** `Condition Logic: AND / OR`

**Step 4** — `id="step-4"`:
- **Icon:** 🎯
- **Title:** `Actions Fire Automatically`
- **Body:** `Matching rules execute their actions: bonus points added, rewards granted, coupons issued, tier upgraded, WhatsApp notification sent — all without any manual intervention.`
- **Highlight pill:** `10 Action Types Available`

**Step 5** — `id="step-5"`:
- **Icon:** 👜
- **Title:** `Customer Wallet Updated`
- **Body:** `The customer's wallet shows the new balance, any newly issued rewards, and active coupons. Expiry dates are set. A WhatsApp message confirms the points earned.`
- **Highlight pill:** `Channel: WhatsApp via ownChat`

**Step 6** — `id="step-6"`:
- **Icon:** 🔄
- **Title:** `Customer Returns to Redeem`
- **Body:** `On next visit, the customer requests redemption. ownRewards checks minimum order value, point maturation days, cooldown hours, and blocked days. If OTP is required, a WhatsApp OTP is sent.`
- **Highlight pill:** `Redemption Rules: 8 Controls`

**Step 7** — `id="step-7"`:
- **Icon:** 👥
- **Title:** `Referral Code Shared`
- **Body:** `The customer shares their referral code with a friend. When the friend signs up and makes their first purchase, both the referrer and referee receive their configured rewards automatically.`
- **Highlight pill:** `Program Type: Dual-Sided`

**Step 8** — `id="step-8"`:
- **Icon:** 📊
- **Title:** `Analytics Updated in Real Time`
- **Body:** `Every transaction updates cohort data, reward ROI calculations, segment health scores, and tier distribution. Your dashboard always reflects live business performance.`
- **Highlight pill:** `Granularity: Hourly / Daily / Monthly`

---

### Section 3.3 — CTA

**Section ID:** `id="hiw-cta"`

```
Ready to automate your loyalty program?
[Get Started Free →]
```

---

## 8. Page 4: Use Cases (`use-cases.html`)

**SEO Title:** `ownRewards Use Cases — Restaurants, Retail & E-Commerce`
**Meta Description:** `Discover how restaurant chains, retail brands, and online stores use ownRewards to drive repeat purchases and grow customer lifetime value.`
**H1:** `Built for the way your customers shop.`
**Active Nav:** `nav-usecases`

---

### Section 4.1 — Use Case 1: Restaurant Chains

**Section ID:** `id="usecase-restaurants"`

**Layout:** Left = content block, Right = Loyalty Card Mock + rule trigger animation

**Industry Badge:** `🍽️ Restaurants & Food Chains`

**Headline:** `Turn every table into a loyalty moment.`

**Pain Points (bulleted, color: var(--error)):**
- ✗ Customers visit once and never return
- ✗ Birthday promotions done manually — or forgotten
- ✗ Petpooja bill data goes to waste
- ✗ No insight into which customers are at churn risk

**ownRewards Solution (bulleted, color: var(--success)):**
- ✓ **Petpooja Integration** — Bills auto-sync, points calculated in real time at every outlet
- ✓ **Birthday Rule** — `customer_birthday` → `+500 bonus points + BDAY20 coupon` → WhatsApp notification fires automatically
- ✓ **Win-Back Campaign** — `inactivity_detected` (30 days) → `grant_reward` (Free Dessert) → re-engagement WhatsApp
- ✓ **4-Tier Loyalty** — Bronze locals → Platinum VIPs with exclusive rewards and tier multipliers
- ✓ **Multi-Outlet** — Per-outlet loyalty configs with unified org-level analytics

**Result Stat:** `34% of churned restaurant customers re-activated in 90 days`
(Style: large gold number, dark card background)

---

### Section 4.2 — Use Case 2: Retail & Fashion

**Section ID:** `id="usecase-retail"`

**Layout:** Right = content block, Left = Product Analytics Mock (reversed alternating)

**Industry Badge:** `👗 Retail & Fashion Brands`

**Headline:** `Stop handing out coupons to customers who were going to buy anyway.`

**Pain Points:**
- ✗ Coupons given to everyone regardless of behaviour
- ✗ No tier-based exclusivity — top customers feel no difference
- ✗ No idea which customer cohorts deliver the most LTV
- ✗ Seasonal campaigns exceed budget with no automated stop

**ownRewards Solution:**
- ✓ **Rule-Gated Coupons** — Only Gold+ tier customers can access exclusive early-access promotions
- ✓ **Category-Specific Coupons** — `SHOE20` applies only to footwear category, not entire cart
- ✓ **Budget-Controlled Campaigns** — Set ₹50,000 max discount budget → auto-deactivates when depleted
- ✓ **Cohort Analytics** — See which acquisition month produces the highest LTV customers
- ✓ **Segment Engine** — `predictedLTV`, `churnRisk`, `healthScore` per segment

---

### Section 4.3 — Use Case 3: D2C & E-Commerce

**Section ID:** `id="usecase-ecommerce"`

**Layout:** Left = content, Right = Referral Flow Mock

**Industry Badge:** `🛒 D2C & E-Commerce Brands`

**Headline:** `Make every happy customer your best marketing channel.`

**Pain Points:**
- ✗ Customer acquisition cost is ₹300+ per new customer
- ✗ No viral growth mechanism in place
- ✗ Customers buy once and disappear
- ✗ No way to reward loyal customers differently from new ones

**ownRewards Solution:**
- ✓ **Dual-Sided Referral** — Referrer gets 500 points; Referee gets ₹100 flat discount on first order
- ✓ **Loyalty-Gated Referral Access** — Must be Silver+, 30+ days as member, ₹2,000+ lifetime spend
- ✓ **nth Purchase Rule** — 2nd visit → `grant_reward (Free Sample)` → drives the repeat purchase habit
- ✓ **Win-Back Automation** — `inactivity_detected` (60 days) → exclusive reward → WhatsApp outreach
- ✓ **WhatsApp via ownChat** — All notifications, OTPs, and campaign messages via high-open-rate WhatsApp channel

**Result Stat:** `₹4.2L in new customer revenue from referrals in month 1`

---

## 9. Page 5: Analytics (`analytics.html`)

**SEO Title:** `ownRewards Analytics — Loyalty ROI, Cohort & Retention Insights`
**Meta Description:** `Track loyalty program ROI, reward conversion rates, cohort retention curves, tier distribution, and product performance — all in real time.`
**H1:** `Know exactly which customers are worth keeping — and why.`
**Active Nav:** `nav-analytics`

---

### Section 5.1 — Analytics Hero

**Section ID:** `id="analytics-hero"`

Sub:
```
ownRewards' analytics engine tracks every transaction, every reward, every referral —
and surfaces the insights that actually change business decisions.
```

---

### Section 5.2 — Animated Metric Cards

**Section ID:** `id="analytics-metrics"`

**4 Cards (counter animation on scroll):**

Card 1 — `id="metric-roi"`:
- **Label:** `Loyalty Program ROI`
- **Value:** `284%` (counter, data-target="284", data-suffix="%")
- **Sub:** `Revenue generated vs. discount cost`

Card 2 — `id="metric-retention"`:
- **Label:** `Avg Retention Rate`
- **Value:** `67.4%` (counter, data-target="67", data-suffix="%")
- **Sub:** `Month-3 cohort retention`

Card 3 — `id="metric-members"`:
- **Label:** `Active Members`
- **Value:** `12,450` (counter, data-target="12450")
- **Sub:** `Across all outlets`

Card 4 — `id="metric-ltv"`:
- **Label:** `Avg Customer LTV`
- **Value:** `₹4,800` (counter, data-prefix="₹", data-target="4800")
- **Sub:** `12-month average`

---

### Section 5.3 — Analytics Features Grid (6 cards)

**Section ID:** `id="analytics-features"`

**Card 1** — `id="analytic-reward-roi"`:
- Icon: 📊
- Title: `Reward Analytics & ROI`
- Body: `Per-reward: issued, redeemed, expired, conversion rate, avg redemption time, revenue impact, cost, ROI, unique customers, repeat customers. Granularity: hourly/daily/weekly/monthly/yearly.`

**Card 2** — `id="analytic-cohort"`:
- Icon: 📈
- Title: `Cohort Retention Analysis`
- Body: `Group customers by first purchase month. Track month-by-month retention rates, revenue, churn rate, avg LTV, and avg order frequency per cohort.`

**Card 3** — `id="analytic-tiers"`:
- Icon: 🏆
- Title: `Tier Distribution & Movement`
- Body: `Visual breakdown of Bronze/Silver/Gold/Platinum customers. Track tier upgrades and downgrades over time. See how rule changes affect tier distribution.`

**Card 4** — `id="analytic-products"`:
- Icon: 🛒
- Title: `Product Intelligence`
- Body: `Top sellers, trending products, declining items, velocity scores. Product correlations — "frequently bought together" with association rule mining lift scores.`

**Card 5** — `id="analytic-lifecycle"`:
- Icon: 👤
- Title: `Customer Lifecycle`
- Body: `Prospect → active → at-risk → churned distribution. Segment health scores, churn risk, predicted LTV. Know who to activate before you lose them.`

**Card 6** — `id="analytic-campaigns"`:
- Icon: 🎯
- Title: `Campaign Performance`
- Body: `Targeted vs. actual participants, rewards granted vs. redeemed, revenue generated, ROI per campaign. A/B test variant comparison — see which offer wins.`

---

### Section 5.4 — Mock Analytics Dashboard

**Section ID:** `id="analytics-dashboard-mock"`

**Headline:** `A live look at your loyalty engine`

**Build this as a pure HTML/CSS dark dashboard card:**

Top row — 4 mini metric cards:
```
Completion Rate: 87.4%  |  Active: 12,450  |  Overdue: 2  |  SLA Compliance: 94.2%
```

Middle left (60% width) — Cohort Retention Heatmap:
- CSS `<table>` with colored `<td>` cells
- Rows = Cohort Month (Jan 2026, Feb 2026, Mar 2026, Apr 2026)
- Columns = Month 0, Month 1, Month 2, Month 3
- Cell background: green (>60%), amber (40-60%), red (<40%)
- Values: `100%`, `74%`, `61%`, `55%` (Jan row example)

Middle right (40% width) — Tier Distribution Donut:
- Pure CSS donut chart using `conic-gradient`
- Bronze 45% (`#CD7F32`), Silver 30% (`#94A3B8`), Gold 18% (`#F59E0B`), Platinum 7% (`#E2E8F0`)
- Legend below

Bottom row — Product Performance Table:
```
| Product          | Revenue  | Qty  | Repeat % | Trend |
|------------------|----------|------|----------|-------|
| Butter Chicken   | ₹82,400  | 412  | 67%      |  ↑   |
| Paneer Tikka     | ₹61,200  | 306  | 54%      |  ↑   |
| Cold Coffee      | ₹24,800  | 248  | 31%      |  →   |
```

**Filter Pills Bar** — `id="analytics-filters"`:
```
[Today]  [Last 7 Days]  [Last 30 Days]  [Last 90 Days]  [Custom Range]  [By Outlet ▾]  [By Tier ▾]
```

---

## 10. Page 6: Pricing (`pricing.html`)

**SEO Title:** `ownRewards Pricing — Loyalty Plans That Scale With Your Business`
**Meta Description:** `Start free with core loyalty features. Scale to advanced rules, referrals, and analytics as your customer base grows.`
**H1:** `Transparent pricing. No surprises.`
**Active Nav:** `nav-pricing`

---

### Section 6.1 — Pricing Hero

**Section ID:** `id="pricing-hero"`

Sub: `Start free. Add the features you need. No lock-in.`

Toggle pill (Monthly / Annual — visual only, no functionality needed): `id="billing-toggle"`

---

### Section 6.2 — Pricing Cards

**Section ID:** `id="pricing-cards"`

**Card 1** — `id="plan-starter"`:
**Title:** `Starter`
**Price:** `Free`
**Sub:** `Perfect for single-outlet businesses getting started`
**CTA Button:** `Get Started Free →` (btn-outline)

Features:
- ✅ Up to 500 loyalty members
- ✅ 4-tier loyalty system (Bronze → Platinum)
- ✅ Points earning & redemption
- ✅ 5 active rules
- ✅ Basic reward templates
- ✅ Petpooja POS integration
- ✅ 1 outlet
- ✅ Email support
- ❌ Rule Library
- ❌ Referral programs
- ❌ Campaign A/B testing
- ❌ Cohort analytics
- ❌ Multi-outlet

---

**Card 2** — `id="plan-growth"` **(HIGHLIGHTED — gold glowing border)**:
**Badge:** `⭐ Most Popular`
**Title:** `Growth`
**Price:** `Contact Us`
**Sub:** `For growing brands with multiple locations and advanced loyalty needs`
**CTA Button:** `Get Started →` (btn-primary)
**Glow border:** `border: 1px solid var(--primary); box-shadow: 0 0 40px rgba(245,158,11,0.2);`

Features:
- ✅ Up to 5,000 loyalty members
- ✅ Full 4-tier system + custom multipliers
- ✅ 30+ event triggers (all)
- ✅ All 10 action types
- ✅ Rule Library templates
- ✅ Smart coupons (all 5 discount types)
- ✅ Dual-sided referral programs
- ✅ Campaign A/B testing
- ✅ Cohort analytics
- ✅ Up to 10 outlets
- ✅ All POS integrations
- ✅ WhatsApp via ownChat
- ✅ Email support

---

**Card 3** — `id="plan-enterprise"`:
**Title:** `Enterprise`
**Price:** `Contact Us`
**Sub:** `For large chains and enterprise brands with custom requirements`
**CTA Button:** `Talk to Sales →` (btn-outline)

Features:
- ✅ Unlimited loyalty members
- ✅ Custom tier names & logic
- ✅ All 30+ triggers + custom events
- ✅ All 10 action types
- ✅ Advanced segmentation & LTV prediction
- ✅ Unlimited referral programs
- ✅ Full cohort + product analytics + export
- ✅ Unlimited outlets
- ✅ Custom POS integration
- ✅ Dedicated CSM
- ✅ SLA-backed uptime
- ✅ API access + webhooks

---

### Section 6.3 — Feature Comparison Table

**Section ID:** `id="pricing-compare"`

```
| Feature                      | Starter | Growth | Enterprise |
|------------------------------|---------|--------|------------|
| Loyalty Members              | 500     | 5,000  | Unlimited  |
| Loyalty Tiers                | 4       | 4      | Custom     |
| Rule Triggers                | 5       | 30+    | 30+        |
| Rule Actions                 | Basic   | All 10 | All 10     |
| Rule Library                 | ❌      | ✅     | ✅         |
| Smart Coupons                | Basic   | Full   | Full       |
| Referral Programs            | ❌      | ✅     | ✅         |
| Campaign A/B Testing         | ❌      | ✅     | ✅         |
| Cohort Analytics             | ❌      | ✅     | ✅ + Export|
| Product Intelligence         | ❌      | ✅     | ✅         |
| POS Integration              | Petpooja| All    | All + Custom|
| WhatsApp (ownChat)           | ❌      | ✅     | ✅         |
| Outlets                      | 1       | 10     | Unlimited  |
| API Access                   | ❌      | ✅     | ✅         |
| Support                      | Email   | Email  | Dedicated CSM|
```

---

### Section 6.4 — FAQ Accordion

**Section ID:** `id="pricing-faq"`

**Headline:** `Frequently Asked Questions`

**Build using `<details>` + `<summary>` tags — vanilla CSS styled:**

Q1 — `id="faq-1"`:
- **Q:** `Can I import my existing customers?`
- **A:** `Yes. ownRewards supports bulk CSV customer import with automatic loyalty enrollment. Existing point balances can be migrated too.`

Q2 — `id="faq-2"`:
- **Q:** `Does it work with Petpooja POS?`
- **A:** `Yes. ownRewards natively integrates with Petpooja. Bills sync in real time and trigger automatic point calculation and rule evaluation.`

Q3 — `id="faq-3"`:
- **Q:** `Can I run multiple referral programs at the same time?`
- **A:** `Yes. Create seasonal, standard, invite-only, or campaign programs and run them in parallel. Each has independent reward configs and limits.`

Q4 — `id="faq-4"`:
- **Q:** `Is OTP required for every redemption?`
- **A:** `It's optional and configurable per outlet. You can require a WhatsApp OTP before any points redemption to prevent fraud at the POS.`

Q5 — `id="faq-5"`:
- **Q:** `Can I control how often a rule fires per customer?`
- **A:** `Yes. Set maxExecutionsPerCustomer (e.g., birthday rule fires max once per year) and maxExecutionsTotal globally per rule.`

Q6 — `id="faq-6"`:
- **Q:** `How does budget control work for rewards?`
- **A:** `Set a maximum total discount value or maximum issuance count per reward. When the budget is exhausted, the reward auto-deactivates — no overspend is possible.`

---

## 11. Page 7: About (`about.html`)

**SEO Title:** `About ownRewards — Built by iEyal Solutions`
**Meta Description:** `Learn how ownRewards was built from real restaurant and retail frustrations — and why it's the only loyalty platform growing businesses need.`
**H1:** `We build retention software that works the way your customers do.`
**Active Nav:** `nav-about`

---

### Section 7.1 — Company Intro

**Section ID:** `id="about-company"`

**Body (exact copy):**
```
iEyal Solutions builds focused, production-grade software for real businesses —
not feature-bloated enterprise suites that require a consultant to set up.

We believe loyalty is a business necessity, not a luxury. Every restaurant,
retail brand, and e-commerce store should have access to the same retention
intelligence that enterprise brands pay millions for.
```

---

### Section 7.2 — Origin Story

**Section ID:** `id="about-origin"`

**Headline:** `Why we built ownRewards`

**Body:**
```
We watched restaurant owners hand out paper stamp cards with no data, no
automation, and no idea which customers were about to leave. We watched retail
managers run seasonal campaigns with no budget controls and no way to measure
what actually worked.

ownRewards was built to change that. To give every business — from a 2-outlet
restaurant chain to a 500-SKU retail brand — a loyalty and retention engine
that actually drives measurable business outcomes.
```

---

### Section 7.3 — Values (4 cards)

**Section ID:** `id="about-values"`

**Headline:** `What we stand for`

**Card 1** — `id="value-intelligence"`:
- Icon: 🧠
- Title: `Intelligence`
- Body: `Every feature is built around data — triggers, cohorts, LTV predictions, A/B tests. Intelligence, not guesswork.`

**Card 2** — `id="value-simplicity"`:
- Icon: ✨
- Title: `Simplicity`
- Body: `Powerful tools shouldn't require a PhD to configure. Every fe
<truncated 33106 bytes>

NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.