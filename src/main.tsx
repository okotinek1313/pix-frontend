import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConvexReactClient } from 'convex/react'
import { ClerkProvider } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk' // <-- Import the bridge
import { useAuth } from '@clerk/clerk-react' // <-- Import useAuth

import './index.css'
import App from './App.tsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
}

// Initialize Convex client
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {/* Wrap App with ConvexProviderWithClerk */}
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <App/>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </StrictMode>,
)
