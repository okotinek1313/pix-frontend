# Contributing

# Development Guide - PIX Frontend

## Tech Stack
- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Database:** Convex (Real-time)
- **API:** TMDB for metadata
- **Deployment:** Vercel + DuckDNS

## Prerequisites
- Node.js 18+
- TMDB API account
- Clerk application

## Local Development
```bash
git clone https://github.com/okotinek1313/pix-frontend.git
cd pix-frontend
npm install

# Environment setup
cp .env.example .env
# Add your keys to .env

# Start development
npm run dev
```

## Environment Variables

### .evn
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_TMDB_API_KEY=your_tmdb_api_key
CLERK_JWT_ISSUER_DOMAIN=your_clerk_issuer_domain
```

### .env.local
```env
VITE_CONVEX_URL=your_convex_deployment_url
CONVEX_DEPLOYMENT=your_convex_deployment
```

## Project Structure
```
convex/           # Database schema & server functions
src/
  components/     # Reusable UI components
  pages/          # Route components (Home, LocalContent, Settings)
  hooks/          # Custom React hooks
  utils/          # Utility functions
```

## Key Features Implemented
- Clerk authentication integration
- Convex real-time database
- TMDB API metadata scraping
- File upload and management
- Responsive Tailwind design

## Deployment
- Automatic Vercel deployments from main branch
- Custom DuckDNS domain configuration
- Environment variables configured in Vercel dashboard

## Development Notes
- Built with strict TypeScript enforcement
- Project-based learning approach
- Focus on clean architecture and modern patterns

## License
Personal educational project - not licensed for distribution.

---

The first README is simple and focused on what the app does for end users. The second contains all technical details for developers.
