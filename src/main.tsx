import 'react-tooltip/dist/react-tooltip.css'
import './index.css'

import { HMSRoomProvider } from '@100mslive/react-sdk'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { DashboardSkeleton } from '@/components/Dashboard'
import { Redirect } from '@/components/Redirect'

import { PersistLogin, RequireAuth } from './components/Authentication'
import { MobileDetect } from './components/MobileDetect'
import { AuthProvider } from './context/AuthProvider'
import NotAuthorize from './pages/NotAuthorize'
import TestTheme from './pages/TestTheme'

const Builder = lazy(() => import('@/pages/Builder'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const MarketPlace = lazy(() => import('@/pages/Marketplace'))
const VirtualSpace = lazy(() => import('@/pages/VirtualSpace'))
const Create = lazy(() => import('@/pages/Create'))
const Pricing = lazy(() => import('@/pages/Pricing'))

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

const ROLES = {
  user: 1000,
  admin: 2000,
}

const Guard = () => {
  return (
    <Routes>
      <Route element={<Outlet />} path="/">
        <Route element={<PersistLogin />}>
          <Route
            element={
              <Suspense fallback={<span>loading</span>}>
                <HMSRoomProvider>
                  {/* <MobileDetect> */}
                  <VirtualSpace />
                  {/* </MobileDetect> */}
                </HMSRoomProvider>
              </Suspense>
            }
            path="/:spaceId"
          />
        </Route>
        <Route element={<PersistLogin />}>
          <Route
            element={
              <Suspense fallback={<span>loading</span>}>
                <MobileDetect>
                  <Create />
                </MobileDetect>
              </Suspense>
            }
            path="/create"
          />
        </Route>
        <Route
          element={
            <Suspense fallback={<span>loading</span>}>
              <MobileDetect>
                <Login />
              </MobileDetect>
            </Suspense>
          }
          path="/login"
        />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}>
            <Route
              element={
                <Suspense fallback={<DashboardSkeleton />}>
                  <Dashboard />
                </Suspense>
              }
              path="/dashboard"
            />
          </Route>
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}> */}
          <Route
            element={
              <Suspense fallback={<span>loading</span>}>
                <Builder />
              </Suspense>
            }
            path="/files/:fileId"
          />
          {/* </Route> */}
          <Route>
            <Route
              element={
                <Suspense fallback={<span>loading</span>}>
                  <Pricing />
                </Suspense>
              }
              path="/pricing"
            />
          </Route>
        </Route>
        <Route element={<PersistLogin />}>
          <Route
            element={
              <Suspense fallback={<span>loading</span>}>
                <MobileDetect>
                  <MarketPlace />
                </MobileDetect>
              </Suspense>
            }
            path="/marketplace"
          />
        </Route>
        <Route element={<Redirect />} path="/l" />
        <Route element={<PersistLogin />}>
          <Route
            element={
              <Suspense fallback={<span>loading</span>}>
                <HMSRoomProvider>
                  {/* <MobileDetect> */}
                  <TestTheme />
                  {/* </MobileDetect> */}
                </HMSRoomProvider>
              </Suspense>
            }
            path="/test-theme"
          />
        </Route>
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
