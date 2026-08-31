# Portfolio — Ifrah Ashraf

## Overview
Personal portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Features a full dark aesthetic with shooting stars background, gradient accents, and animated sections.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS animations
- **Animation**: Framer Motion
- **Database**: Supabase (for internal blog posts)
- **Package Manager**: npm
- **Port**: 5000

## Project Structure
```
src/
  app/
    page.tsx                     # Main page (server component, fetches blogs)
    layout.tsx                   # Root layout + metadata
    globals.css                  # Global styles + animations
    blog/[id]/page.tsx           # Internal blog detail page
    components/
      Navbar.tsx                 # Sticky navbar with scroll effect
      Footer.tsx                 # Footer with social links
      ShootingStarsAndStarsBackgroundDemo.tsx
      Theme.tsx / TextGenerateEffectDemo.tsx (legacy, unused)
    MainComponents/
      Hero.tsx                   # Animated hero/bio section
      Skills.tsx                 # Dynamic skill categories (replaces tech icons)
      Projects.tsx               # Outcome-focused project cards
      Achievements.tsx           # Achievements & milestones grid
      Blogs.tsx                  # Blog listing (external + internal)
  components/ui/                 # Shared UI primitives (3d-card, shooting-stars, etc.)
  lib/
    supabase.ts                  # Supabase client + Blog type
    blogs.ts                     # Blog data helpers (static + Supabase)
    supabase-schema.sql          # SQL schema to run in Supabase dashboard
    utils.ts                     # cn() utility
```

## Sections
1. **Hero** — Animated role switcher, gradient name, glowing profile image, CTAs
2. **Skills** — Three categories: Engineering, Craft, Expertise (no tech icons)
3. **Projects** — Rich cards with outcomes, learnings, and tech tags
4. **Achievements** — 2x2 grid with icons, dates, tags
5. **Blogs** — External (links out) + Internal (Supabase) blog cards
6. **Footer** — Simple with social links

## Blog System
### External Blogs
Defined in `src/lib/blogs.ts` → `staticBlogs` array. Each has title, platform, external URL, tags, and metadata.

### Internal Blogs (Supabase-powered)
1. Create a Supabase project at https://supabase.com
2. Run `src/lib/supabase-schema.sql` in the SQL editor
3. Add env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Insert blog posts (markdown content) via Supabase dashboard
5. Internal blogs auto-appear at `/blog/[id]` with rendered markdown

## Environment Variables
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |

## Running
```bash
npm run dev   # starts on port 5000
```
