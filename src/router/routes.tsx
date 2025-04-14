import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from '@layouts/mainLayout';
import { Home } from '@/pages/home';
import { Login } from '@/pages/login';
import { AuthGuard } from '@/shared/guards/auth.guard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/login" replace />,
      },
      {
        path: '/home',
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
