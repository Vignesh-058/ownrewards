# OwnRewards

OwnRewards is an enterprise-grade customer loyalty, rewards, and referral platform for growing businesses.

## Overview

OwnRewards provides a premium SaaS platform to increase Customer Lifetime Value (LTV) and retention. It includes features like Restaurant CRM, Marketing Campaigns, WhatsApp integrations, Automated Workflows, Feedback collection, Custom Memberships, QR Codes, and Mobile App integrations.

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Routing**: React Router 7
- **Styling**: Tailwind CSS + Custom CSS Modules + CSS Variables (Design Tokens)
- **Animation**: Framer Motion 12
- **Icons**: Lucide React
- **Data Visualization**: Recharts 3
- **SEO & PWA**: React Helmet Async, Vite PWA Plugin

## Project Structure

- `/src/assets`: Images, logos, and static resources
- `/src/components/common`: Reusable shared components (SEO, ErrorBoundary, AnimatedSection)
- `/src/components/layout`: Structural components (Navbar, Footer, MainLayout)
- `/src/components/sections`: Landing page and feature sections (Hero, Pricing, FAQ)
- `/src/components/ui`: Primitive UI elements (Button, Card, Badge, Toggle)
- `/src/data`: Mock data and static configuration (Pricing plans)
- `/src/pages`: Top-level route components
- `/src/utils`: Helper functions and animation configurations

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Build for Production

1. Build the application:
   ```bash
   npm run build
   ```
2. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Production Readiness Features

- **Performance**: Chunk splitting, lazy-loaded routes, optimized animation variants, strict reduced-motion support.
- **Accessibility (a11y)**: Semantic HTML, ARIA labels, "Skip to Content" links, keyboard navigation.
- **Technical SEO**: Dynamic meta tags via React Helmet Async, Open Graph tags, canonical URLs, semantic schema.
- **Resilience**: React Error Boundaries, 404 page, fallback states for lazy loads.

## License

Copyright © 2026 OwnRewards. All rights reserved.
