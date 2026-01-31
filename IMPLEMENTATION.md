# Competition Suit Shop - Landing Page

A modern, responsive landing page for a competition suit shop built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS
- **Component-Based Architecture** - Highly modular and reusable components
- **Performance Optimized** - Fast loading times and smooth animations
- **SEO Ready** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant with ARIA labels

## 📁 Project Structure

```
frontend-test/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Header navigation component
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero carousel section
│   │   ├── StorySection.tsx          # Story/CTA section
│   │   ├── ClientStoriesSection.tsx  # Client stories carousel
│   │   └── ConsultationBanner.tsx    # Consultation CTA
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── IconButton.tsx  # Icon button component
│       └── SearchBar.tsx   # Search input component
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   └── constants.ts        # App constants and configuration
└── public/
    └── images/             # Static images (to be added)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Components Overview

### Layout Components

#### Navigation
- Responsive header with mobile menu
- Search functionality
- Cart, wishlist, and account icons
- Sticky positioning for better UX

#### Footer
- Multiple link sections (Company, Resources, Help)
- Contact information with social links
- Payment methods display
- Responsive grid layout

### Section Components

#### HeroSection
- Image carousel with 5 slides
- Auto-play with manual navigation
- Different layouts for mobile/desktop
- Overlay text with call-to-actions

#### StorySection
- Brand tagline and messaging
- Feature grid with icons
- Multiple CTA buttons
- Hover effects on feature cards

#### ClientStoriesSection
- Client testimonial carousel
- Video/image preview with play button
- Rating display (5-star system)
- Product actions (View, Wishlist)
- Review quotes
- Desktop: Side-by-side layout
- Mobile: Stacked layout with navigation

#### ConsultationBanner
- Gradient background design
- Feature highlights with checkmarks
- Single prominent CTA
- Responsive text sizing

### UI Components

#### Button
- Multiple variants: primary, secondary, outline, ghost
- Three sizes: sm, md, lg
- Full TypeScript support
- Accessible with proper ARIA labels

#### IconButton
- Icon-only button with optional badge
- Hover effects
- Tooltip support via aria-label

#### SearchBar
- Controlled input component
- Submit on enter or button click
- Search icon
- Focus states

## 🎨 Styling

### Tailwind CSS
The project uses Tailwind CSS for styling with:
- Custom color palette
- Responsive breakpoints
- Utility-first approach
- Custom animations and transitions

### Design System
- **Colors**: Black & white primary, gradient accents
- **Typography**: Inter font family
- **Spacing**: Consistent 4px grid system
- **Borders**: Subtle borders with hover states
- **Shadows**: Minimal shadow usage for depth

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

1. **Code Splitting**: Automatic via Next.js
2. **Image Optimization**: Next.js Image component (ready for use)
3. **CSS Optimization**: Tailwind CSS purges unused styles
4. **Component Lazy Loading**: React.lazy for heavy components (can be added)
5. **Memoization**: Strategic use of React.memo (can be added where needed)

## 🔧 Configuration

### Constants (`lib/constants.ts`)
Update site information, navigation links, and footer sections:
- `SITE_INFO`: Company details
- `NAV_LINKS`: Navigation menu items
- `FOOTER_SECTIONS`: Footer link groups

### Types (`lib/types.ts`)
TypeScript interfaces for:
- StoryItem
- NavLink
- FooterSection
- SocialLink

## 📝 Adding Content

### Adding Images
1. Place images in `/public/images/`
2. Reference them in components: `/images/filename.jpg`
3. Use Next.js Image component for optimization

### Adding New Sections
1. Create component in `/components/sections/`
2. Import in `/app/page.tsx`
3. Add to the page layout

### Modifying Navigation
Edit `NAV_LINKS` in `/lib/constants.ts`

### Modifying Footer
Edit `FOOTER_SECTIONS` in `/lib/constants.ts`

## 🎯 Next Steps

1. **Add Real Images**: Replace placeholder backgrounds with actual product images
2. **Implement Search**: Connect SearchBar to actual search functionality
3. **Add Cart Functionality**: Implement shopping cart logic
4. **Connect to Backend**: Integrate with API for dynamic content
5. **Add Authentication**: User login/registration
6. **Analytics**: Add Google Analytics or similar
7. **Testing**: Add unit and integration tests
8. **Accessibility Audit**: Full WCAG compliance check

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: SVG (inline)
- **Fonts**: Google Fonts (Inter)

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For questions or issues, contact the development team.

---

**Built with ❤️ for Competition Suit Shop**
