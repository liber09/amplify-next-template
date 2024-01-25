'use client'
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

type AuthState = {
  isAuthenticated: boolean;
  identificationNumber: string | null;
};

type AuthAction = { type: 'LOGIN'; identificationNumber: string } | { type: 'LOGOUT' };

const AuthContext = createContext<{ state: AuthState; dispatch: Dispatch<AuthAction> } | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      console.log('authContext: ', action.identificationNumber)
      return {
        isAuthenticated: true,
        identificationNumber: action.identificationNumber,
      };
    case 'LOGOUT':
      return { isAuthenticated: false, identificationNumber: null };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    identificationNumber: null,
  })

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
