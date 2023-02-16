import './assets/fonts/GeneralSans-Medium.otf'
import './assets/fonts/GeneralSans-Semibold.otf'
import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Icon } from './components/Commons'
import VirtualSpace from './pages/VirtualSpace'

const router = createBrowserRouter([
  {
    path: '/icon',
    element: <Icon name="shop" />,
  },
  {
    path: '/space/:spaceId',
    element: <VirtualSpace />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
