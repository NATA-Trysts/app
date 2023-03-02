import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MobileDetect } from './components/MobileDetect'
import Builder from './pages/Builder'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import VirtualSpace from './pages/VirtualSpace'

const router = createBrowserRouter([
  {
    path: '/:spaceId',

    element: (
      <MobileDetect>
        <VirtualSpace />
      </MobileDetect>
    ),
  },
  {
    path: '/files/:fileId',
    element: (
      // <MobileDetect>
      <Builder />
      // </MobileDetect>
    ),
  },
  {
    path: '/login',
    element: (
      <MobileDetect>
        <Login />
      </MobileDetect>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <MobileDetect>
        <Dashboard />
      </MobileDetect>
    ),
  },
  {
    path: '*',
    element: (
      <MobileDetect>
        <NotFound />
      </MobileDetect>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
