import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Icon } from './components/Commons'
import { Button } from './pages/Button'
import Mobile from './pages/Mobile'
import Multitab from './pages/Multitab'
import NotFound from './pages/NotFound'
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
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
