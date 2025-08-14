import AppRouter from './AppRouter';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import CustomSignInButton from './components/CustomSignInButton';
// Alternative: import StyledSignInButton from './components/StyledSignInButton';

export default function App() {
  return (
    <>
      <div className="fixed top-4 right-4">
        <SignedOut>
          <CustomSignInButton variant="secondary" size="md">
            Log In
          </CustomSignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      <AppRouter />
    </>
  );
}