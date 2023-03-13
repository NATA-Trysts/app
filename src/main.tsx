import 'react-tooltip/dist/react-tooltip.css'
import './index.css'

import { HMSRoomProvider } from '@100mslive/react-sdk'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { PersistLogin, RequireAuth } from './components/Authentication'
import { MobileDetect } from './components/MobileDetect'
import { AuthProvider } from './context/AuthProvider'
import NotAuthorize from './pages/NotAuthorize'

const Builder = lazy(() => import('@/pages/Builder'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const MarketPlace = lazy(() => import('@/pages/MarketPlace/MarketPlace'))
const VirtualSpace = lazy(() => import('@/pages/VirtualSpace'))
const Create = lazy(() => import('@/pages/Create'))

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

const ROLES = {
  user: 1000,
  admin: 2000,
}

// const Layout = () => {
//   return <Outlet />
// }

const Guard = () => {
  return (
    <Routes>
      <Route element={<Outlet />} path="/">
        <Route
          element={
            <Suspense fallback={<span>loading</span>}>
              <HMSRoomProvider>
                <MobileDetect>
                  <VirtualSpace />
                </MobileDetect>
              </HMSRoomProvider>
            </Suspense>
          }
          path="/:spaceId"
        />
        <Route
          element={
            <Suspense fallback={<span>loading</span>}>
              {/* <MobileDetect>
                <Create />
              </MobileDetect> */}
              <Create />
            </Suspense>
          }
          path="/create"
        />
        <Route
          element={
            <MobileDetect>
              <Login />
            </MobileDetect>
          }
          path="/login"
        />

        <Route element={<PersistLogin />}>
          <Route>
            <Route
              element={
                <Suspense fallback={<span>loading</span>}>
                  <Dashboard />
                </Suspense>
              }
              path="/dashboard"
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}>
            <Route
              element={
                <Suspense fallback={<span>loading</span>}>
                  <Builder />
                </Suspense>
              }
              path="/files/:fileId"
            />
          </Route>
        </Route>
        <Route
          element={
            <MobileDetect>
              <MarketPlace />
            </MobileDetect>
          }
          path="/marketplace"
        />

        <Route element={<NotAuthorize />} path="/unauth" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<Guard />} path="/*" />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
)
