import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Icon } from './components/Commons'
import Multitab from './pages/Multitab'
import NotFound from './pages/NotFound'
import Test from './pages/Test'

const router = createBrowserRouter([
  {
    path: '/space/:spaceId',
    element: <Test />,
  },
  {
    path: '/multitab',
    element: <Multitab />,
  },
  {
    path: '/icon',
    element: <Icon name="shop" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
