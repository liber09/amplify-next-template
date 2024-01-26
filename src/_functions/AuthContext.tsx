'use client'
import React, { createContext, useContext, useReducer, ReactNode, Dispatch, useState } from 'react';
import handleSignOut from './auth-signout';
import handleSignIn from './auth-signin';

type AuthState = {
  isAuthenticated: boolean;
};

type AuthAction = { type: 'LOGIN'; userName: string; password: string } | { type: 'LOGOUT' };
const AuthContext = createContext<{ state: AuthState; dispatch: Dispatch<AuthAction> } | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
      };
    case 'LOGOUT':
      handleSignOut();
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
  });

  const enhancedDispatch: Dispatch<AuthAction> = async (action) => {
    if (action.type === 'LOGIN') {
      setIsSignedIn(await handleSignIn({ username: action.userName, password: action.password }));
    }

    dispatch(action);
  };

  return <AuthContext.Provider value={{ state, dispatch: enhancedDispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
