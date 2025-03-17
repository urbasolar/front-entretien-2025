import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { hasAccess } from '@api/authentication.api';
import client from '@config/graphQL/client';
import { router } from '@router/routes.tsx';
import { ETheme } from '@shared/enums';
import '@themes/tailwind.css';
import setupI18n from '@translation/setupI18n';
import { keycloak } from '@utils/authentication';
import { getDataLocalStorage, saveDataLocalStorage } from '@utils/localStorage';
import { ForbiddenPage } from './forbiddenPage';

setupI18n();

keycloak
  .init({
    onLoad: 'login-required',
    checkLoginIframe: false,
  })
  .then(async (authenticated: boolean) => {
    const themeMode = getDataLocalStorage('themeMode');
    if (themeMode === null) {
      saveDataLocalStorage('themeMode', ETheme.dark);
      document.documentElement.classList.add(ETheme.dark);
    }

    if (themeMode === ETheme.light) {
      document.documentElement.classList.remove(ETheme.dark);
    }

    if (themeMode === ETheme.dark) {
      document.documentElement.classList.add(ETheme.dark);
    }

    if (authenticated) {
      // DISPATCH THE USER
      try {
        await hasAccess();
        // Render the application
        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            <ApolloProvider client={client}>
              <RouterProvider router={router} />
            </ApolloProvider>
          </React.StrictMode>
        );
      } catch (error) {
        // Render Forbidden page
        ReactDOM.createRoot(document.getElementById('root')!).render(
          <ForbiddenPage />
        );
      }
    }
  })
  .catch((error: unknown) => {
    throw new Error(`Cannot get response from keycloak.init : ${error}`);
  });
