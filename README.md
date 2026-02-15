# TeamPulse Landing Page

A modern, responsive landing page built with Next.js 14, Tailwind CSS, and Shadcn/ui components.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable UI components built on Radix UI
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout with navigation/footer
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # Shadcn UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   ├── hero.tsx         # Hero section with gradient background
│   ├── features.tsx     # Features grid section
│   ├── pricing.tsx      # Pricing plans section
│   └── cta.tsx          # Call-to-action section
└── lib/
    └── utils.ts         # Utility functions (cn)
```

## 🎨 Design Inspiration

This landing page is inspired by the Lattice HR Management landing page design from Dribbble. Features include:

- Gradient hero section with pattern background
- Clean, modern typography
- Card-based features layout
- Professional color scheme (blues/purples)
- Responsive navigation
- Social proof elements

## 🏃 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚢 Deploy to Vercel

This project is optimized for Vercel deployment.

1. Push this repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

## 📝 Customization

- Update colors in `tailwind.config.ts`
- Modify content in individual component files
- Replace images in the `public/` folder
- Update metadata in `src/app/layout.tsx`

## 📄 License

MIT