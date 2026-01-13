# Barilla Holiday Park Website

A modern, responsive website for Barilla Holiday Park Tasmania - a family-friendly caravan park located in Cambridge, near Hobart Airport.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Custom components with Radix UI primitives
- **Routing**: React Router DOM

## Project Structure

```
src/
├── assets/           # Images and static assets
├── components/
│   ├── home/         # Homepage-specific components
│   ├── layout/       # Header, Footer, Layout wrapper
│   ├── shared/       # Reusable components (PageHero, etc.)
│   └── ui/           # Shadcn UI components
├── pages/
│   ├── accommodation/  # Cabin, Caravan, Camping, Airport pages
│   ├── things-to-do/   # AtBarilla, TouristAttractions, MiniGolf
│   ├── Contact.tsx
│   └── Index.tsx
└── App.tsx
```

## Pages

- **Home** (`/`) - Hero, introduction, accommodation cards, info section
- **Cabin Accommodation** (`/accommodation/cabins`)
- **Caravan Accommodation** (`/accommodation/caravans`)
- **Camping Grounds** (`/accommodation/camping`)
- **Airport Accommodation** (`/accommodation/airport`)
- **Things to Do at Barilla** (`/things-to-do/at-barilla`)
- **Tourist Attractions** (`/things-to-do/attractions`)
- **Mini Golf** (`/things-to-do/mini-golf`)
- **Contact** (`/contact`)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## DNS Setup for barilla.com.au

### Step 1: Add Domain in Vercel

1. In Vercel Dashboard, go to **Project Settings → Domains**
2. Add `barilla.com.au` and `www.barilla.com.au`

### Step 2: Update DNS Records

In your DNS provider (domain registrar), add these records:

**For root domain (`barilla.com.au`):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: SSL Certificate

Vercel automatically provisions SSL certificates. Wait a few minutes after DNS propagation.

### Verify DNS Propagation

Use these tools to check:
- [whatsmydns.net](https://www.whatsmydns.net/)
- [dnschecker.org](https://www.dnschecker.org/)

## Contact Information

- **Phone**: 1800 465 453 (Freecall)
- **Email**: stay@barilla.com.au
- **Address**: 75 Richmond Road, Cambridge, Tasmania 7170

## License

© 2026 Barilla Holiday Park. All rights reserved.
