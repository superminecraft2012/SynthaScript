# SynthaScript Landing Page

A modern, conversion-optimized landing page for SynthaScript built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme with purple accent colors
- **Conversion Optimized**: Multiple CTAs to book calls throughout the page
- **Responsive**: Fully responsive design for all screen sizes
- **Smooth Animations**: CSS transitions and hover effects
- **SEO Ready**: Proper meta tags and semantic HTML

## Sections

- **Hero**: Bold headline with value proposition and CTAs
- **Results**: Key metrics and client testimonials
- **Brands**: Trusted partners and company stats
- **FAQ**: Expandable accordion with common questions
- **Book a Call**: Final conversion section
- **Footer**: Navigation and contact information

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono

## Brand Colors

- **Primary Purple**: #9333EA
- **Primary Dark**: #7C3AED
- **Primary Light**: #A855F7
- **Background**: #000000 (Black)
- **Text**: #FFFFFF (White)

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Results.tsx      # Results/testimonials section
│   ├── Brands.tsx       # Partners section
│   ├── FAQ.tsx          # FAQ accordion
│   ├── BookCall.tsx     # CTA section
│   └── Footer.tsx       # Footer
public/
├── SmallLogo.png        # Favicon/icon
└── TextBasedLogo.png    # Navbar logo
```

## Customization

1. **Calendly Link**: Update the booking URL in `BookCall.tsx`
2. **Contact Email**: Update email in `Footer.tsx`
3. **Social Links**: Add your social media URLs in `Footer.tsx`
4. **Testimonials**: Edit client quotes in `Results.tsx`
5. **FAQ**: Modify questions and answers in `FAQ.tsx`
