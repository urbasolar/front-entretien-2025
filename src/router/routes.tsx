import { createBrowserRouter } from 'react-router-dom'

import { Playground } from '@pages/sandbox/sandbox'
import { Layout } from '@layouts/mainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/:component',
        element: <Playground />,
        children: [
          {
            path: '/:component/:active_tab',
            element: <div></div>,
          },
        ],
      },
    ],
  },
])

