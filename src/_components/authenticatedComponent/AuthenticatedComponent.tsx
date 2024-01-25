"use client"
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_functions/AuthContext';

interface AuthenticatedComponentProps {
  children: ReactNode;
}

const AuthenticatedComponent: React.FC<AuthenticatedComponentProps> = ({ children }) => {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is not authenticated, redirect to login page
    if (!state.isAuthenticated) {
      router.push('/login');
    }
  }, [state.isAuthenticated, router]);

  return <>{state.isAuthenticated && children}</>;
};

export default AuthenticatedComponent;
