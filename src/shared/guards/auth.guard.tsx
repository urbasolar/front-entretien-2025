import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getDataLocalStorage } from '@utils/localStorage';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = getDataLocalStorage('isAuthenticated');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
