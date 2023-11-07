import { Route, Routes } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Registro } from '../pages/Registro'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  )
}
