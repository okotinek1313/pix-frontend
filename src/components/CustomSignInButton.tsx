import { useClerk } from '@clerk/clerk-react';

interface CustomSignInButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export default function CustomSignInButton({ 
  variant = 'primary', 
  size = 'md', 
  children = 'Sign In',
  className = ''
}: CustomSignInButtonProps) {
  const { openSignIn } = useClerk();

  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-grey-60 text-white hover:bg-grey-50 focus:ring-grey-40',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleSignIn = () => {
    openSignIn({
      appearance: {
        elements: {
          rootBox: 'mx-auto',
          card: 'bg-grey-30 border border-grey-50',
          headerTitle: 'text-white',
          headerSubtitle: 'text-grey-70',
          socialButtonsBlockButton: 'border border-grey-50 text-white hover:bg-grey-40',
          formFieldInput: 'bg-grey-40 border-grey-50 text-white',
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
          footerActionLink: 'text-blue-400 hover:text-blue-300'
        }
      }
    });
  };

  return (
    <button 
      onClick={handleSignIn}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
