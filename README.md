# PIX Frontend

A web application for custom Raspberry Pi tablet projects.

## Live Demo
Main Domain: [PIX-Frontend](https://pi-x-frontend.vercel.app)
Original Domain: https://pi-x.vercel.app

## What Is This?
A media frontend designed specifically for Raspberry Pi tablets that allows users to manage and view their local media content with metadata from TMDB.

## Tech Stack
- React with TypeScript
- Vite build tool
- Tailwind CSS for styling
- Clerk for authentication
- Convex for database
- TMDB API for media metadata

## Setup

1. Install Node.js on your system

2. Clone this repository
   ```bash
   git clone https://github.com/okotinek1313/pix-frontend.git
   cd pix-frontend
   ```
3. Install dependencies
   ```bash
   npm install
   ```

5. Create .env file in root directory with:
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   VITE_TMDB_API_KEY=your_tmdb_key_here

6. Run development server
   ```bash
   npm run dev
   ```

## Build for Production
```bash
npm run build
```
## Project Structure
The project uses a component-based architecture with pages for different views (Home, Local Content, Settings). All database operations are handled through Convex functions.

## API Keys
You will need to obtain your own API keys for Clerk and TMDB to run this project. The keys are stored in environment variables for security.

## Usage
After setup, the application will provide a media interface where users can authenticate, scan local media files, and view them with automatically fetched metadata.

Contact me for more information about the project setup.
