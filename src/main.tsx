import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Icon } from './components/Commons'
import Builder from './pages/Builder'
import { Button } from './pages/Button'
import { HeaderPage } from './pages/HeaderPage'
import Mobile from './pages/Mobile'
import Multitab from './pages/Multitab'
import NotFound from './pages/NotFound'
import PopoverTest from './pages/PopoverTest'
// import Test from './pages/Test'
import TestNotification from './pages/TestNotification'
import VirtualSpace from './pages/VirtualSpace'

const router = createBrowserRouter([
  {
    path: '/space/:spaceId',
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
    path: '/builder',
    element: <Builder />,
  },
  {
    path: '/header',
    element: <HeaderPage />,
  },
  {
    path: '/popover',
    element: <PopoverTest />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
