import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hook/auth'
import { UserRoutes } from '../routes/appUser.routes'
import { AdmRoutes } from './appAdm.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user } = useAuth()

  function isAdmin() {
    if (user.admin) {
      return <AdmRoutes />
    } else {
      return <UserRoutes />
    }
  }

  return <BrowserRouter>{user ? isAdmin() : <AuthRoutes />}</BrowserRouter>
}
