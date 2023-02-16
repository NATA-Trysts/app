import './index.css'
import './assets/fonts/GeneralSans-Semibold.otf'
import './assets/fonts/GeneralSans-Medium.otf'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Icon } from './components/Commons'
import Multitab from './pages/Multitab'
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
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)

