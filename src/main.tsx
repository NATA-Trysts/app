import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import { HMSRoomProvider } from '@100mslive/react-sdk'
import { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MobileDetect } from './components/MobileDetect'
// import Builder from './pages/Builder'
// import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import VirtualSpace from './pages/VirtualSpace'

const Builder = lazy(() => import('@/pages/Builder'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const VirtualSpace = lazy(() => import('@/pages/VirtualSpace'))

const router = createBrowserRouter([
  {
    path: '/:spaceId',

    element: (
      <HMSRoomProvider>
        <MobileDetect>
          <VirtualSpace />
        </MobileDetect>
      </HMSRoomProvider>
    ),
  },
  {
    path: '/files/:fileId',
    element: (
      <MobileDetect>
        <Builder />
      </MobileDetect>
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
