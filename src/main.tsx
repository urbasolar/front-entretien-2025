import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import client from '@config/graphQL/client';
import { router } from '@router/routes.tsx';
import { ETheme } from '@shared/enums';
import '@themes/tailwind.css';
import setupI18n from '@translation/setupI18n';
import { getDataLocalStorage, saveDataLocalStorage } from '@utils/localStorage';

setupI18n();
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
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
