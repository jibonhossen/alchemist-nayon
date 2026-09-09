# ADR 0001: Cohere 2026 Light Design System & Bento Layout Architecture

## Status
Accepted

## Date
2026-09-09

## Context
The previous user interface for Alchemist Nayon relied on a generic web layout:
- Repetitive 3-column card stacks across features, schedule, and reviews.
- Dark mode toggle with mixed color palettes (Tailwind blues, oranges, purples) that lacked editorial rigor and brand authority.
- Heavy drop shadows and generic card borders that felt like a standard template rather than a premier academic institution.
- Unfocused conversion flows that lacked strong visual prioritization for direct telephone calls and physical campus visits in Jessore.

The user explicitly requested:
1. Adopting the design specification defined in `DESIGN.md` (Cohere's 2026 enterprise web design system).
2. Framing Mohamed Nayon as an accessible, passionate mentor.
3. Breaking out of the standard vertical stack into modern SaaS Bento modules with enhanced visual depth and typography.
4. Focusing conversion on direct phone call and physical campus visit.
5. Operating strictly in **light mode only** with no dark mode support.

## Decision

1. **Design System Adoption (`DESIGN.md`)**:
   - Surface palette: Canvas White (`#ffffff`), Soft Stone (`#eeece7`), Hairline dividers (`#d9d9dd`), and Deep Enterprise Green bands (`#003c33`) / Dark Navy bands (`#071829`).
   - Ink & Text: Near-black (`#17171c`) for primary text and headings, Body Ink (`#212121`), Muted Slate (`#75758a`, `#93939f`), and Coral (`#ff7759`) for category chips and taxonomy pills.
   - Elimination of Dark Mode: Remove `next-themes` theme switching, `.dark` styles, and dark variant classes across all components. Enforce pure light mode across the application.
   - Shapes & Radii: 32px/full pill buttons for primary and secondary CTAs, 22px (`rounded-[22px]`) for signature media cards and hero panels, 16px (`rounded-2xl`) for Bento blocks, and 8px (`rounded-lg`) for small chips.

2. **Asymmetric Bento Grid Information Architecture**:
   - **Hero Section**: Editorial headline with tight tracking, pill badges, and a dual-card composition: a live chemistry telemetry "Alchemist Console" card paired with mentor lab credentials.
   - **Bento Features**: Replace repetitive cards with an asymmetric 4-module Bento grid (Interactive Smart Board simulator, NCTB Board-Book to Admission roadmap, Examination Analytics scorecard, and 1-on-1 Doubt-Clearing lab).
   - **Bento Schedule & Batch Telemetry**: Clean tabbed routine explorer with day-group selectors, morning/afternoon/evening slots, and one-tap call/booking trigger.
   - **Social Proof & Hall of Fame**: Research-table style layout for past GPA-5.00 results, medical/varsity admissions, and student testimonials with soft-stone quote blocks.
   - **Faculty Section**: Mohamed Nayon mentor profile emphasizing his teaching philosophy (*"Experiment is my passion 🔬, Teaching is my mission 🎯"*), academic background, and interactive teaching method.
   - **Contact & Campus Visit Hub**: High-contrast, clean campus visit card detailing exact Jessore directions (Arabpur, opposite SP Bungalow Gate) with direct telephone dialers and visiting hours (no map embed or map links).

3. **Typography**:
   - Pair `Space Grotesk` (or `Inter`) for Latin display headlines, badges, and numeric telemetry with `Hind Siliguri` for Bengali text, using tight negative tracking (`tracking-tight`) and clean line-heights.

## Consequences

- **Positive**:
  - Distinctive, world-class aesthetic that commands trust and authority while remaining warm and accessible.
  - Dramatically improves clarity of schedules and admissions for students and parents.
  - Eliminates visual clutter and code bloat associated with dual-theme maintenance.
  - Clear conversion path for Jessore phone inquiries and campus visits.
- **Negative / Trade-offs**:
  - Dark mode will not be available for nighttime browsing; light mode must ensure optimal contrast, soft backgrounds (`#eeece7`, `#f8f9fa`), and no harsh glare.
