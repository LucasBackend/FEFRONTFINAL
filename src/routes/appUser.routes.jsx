import { Route, Routes } from 'react-router-dom'

import { Produtos } from '../pages/Produtos'
import { DetalhesProdutosUser } from '../pages/DetalhesProdutosUser'

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="/detalhes/:id" element={<DetalhesProdutosUser />} />
    </Routes>
  )
}
