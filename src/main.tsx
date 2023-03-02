import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Builder from './pages/Builder'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import VirtualSpace from './pages/VirtualSpace'

const router = createBrowserRouter([
  {
    path: '/:spaceId',
    element: <VirtualSpace />,
  },
  {
    path: '/files/:spaceId',
    element: <Builder />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
