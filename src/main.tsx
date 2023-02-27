import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Icon } from './components/Commons'
import Builder from './pages/Builder'
import { Button } from './pages/Button'
import { HeaderPage } from './pages/HeaderPage'
import Login from './pages/Login'
import Mobile from './pages/Mobile'
import Multitab from './pages/Multitab'
import { MultiTogglePage } from './pages/MultiTogglePage'
import Navigation from './pages/Navigation'
import NotFound from './pages/NotFound'
import PopoverTest from './pages/PopoverTest'
import SpacePreview from './pages/SpacePreview'
import TestNotification from './pages/TestNotification'
import VirtualSpace from './pages/VirtualSpace'

const router = createBrowserRouter([
  {
    path: '/:spaceId',
    element: <VirtualSpace />,
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
    path: 'test/noti-stack',
    element: <TestNotification />,
  },
  {
    path: '/mobile',
    element: <Mobile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/button',
    element: <Button />,
  },
  {
    path: '/file/:fileId',
    element: <Builder />,
  },
  {
    path: '/header',
    element: <HeaderPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/popover',
    element: <PopoverTest />,
  },
  {
    path: '/navigation',
    element: <Navigation />,
  },
  {
    path: '/multi-toggle',
    element: <MultiTogglePage />,
  },
  {
    path: '/preview',
    element: <SpacePreview />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
