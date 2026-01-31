# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Overview

This is a fully responsive landing page for Competition Suit Shop with:

- ✅ Modern Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modular component architecture
- ✅ Optimized performance

## Components Implemented

### Sections
1. **Hero Section** - Image carousel with CTA
2. **Story Section** - Brand messaging with features
3. **Client Stories** - Testimonial carousel
4. **Consultation Banner** - Call-to-action section

### Layout
- **Navigation** - Sticky header with search, cart, wishlist
- **Footer** - Multi-column links with contact info

### UI Components
- **Button** - Multiple variants and sizes
- **IconButton** - Icon buttons with badges
- **SearchBar** - Search input with icon

## File Structure

```
components/
├── layout/          # Header and Footer
├── sections/        # Page sections
└── ui/              # Reusable UI components

lib/
├── types.ts         # TypeScript interfaces
└── constants.ts     # Site configuration

app/
├── layout.tsx       # Root layout
├── page.tsx         # Landing page
└── globals.css      # Global styles
```

## Next Steps

### Add Images
Replace placeholder backgrounds with actual images in `/public/images/`:
- Hero carousel images (5 images)
- Client story images (3+ images)
- Product thumbnails

### Customize Content
Edit `/lib/constants.ts` to update:
- Site information (name, contact, social)
- Navigation menu items
- Footer links

### Connect Backend
- Implement search functionality
- Add cart logic
- Connect authentication
- Fetch dynamic content from API

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Technical Details

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Package Manager:** pnpm

## Support

For detailed documentation, see [IMPLEMENTATION.md](./IMPLEMENTATION.md)
