import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '@/hooks'

export const RequireAuth = ({ allowedRoles }: { allowedRoles: number[] }) => {
  const { auth, isAuthenticated } = useAuth()
  const location = useLocation()

  console.log(auth.user)

  return isAuthenticated ? (
    auth.roles.find((role) => allowedRoles?.includes(role)) ? (
      <Outlet />
    ) : (
      <Navigate replace state={{ from: location }} to="/unauth" />
    )
  ) : (
    <Navigate replace state={{ from: location }} to="/login" />
  )
}
