import { Route, Routes } from 'react-router-dom'

import { CadastroProdutos } from '../pages/CadastroProdutos'
import { DetalhesProdutosAdm } from '../pages/DetalhesProdutosAdm'
import { EditarProdutos } from '../pages/EditarProdutos'
import { ProdutosAdm } from '../pages/ProdutosAdm'

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProdutosAdm />} />
      <Route path="/cadastro" element={<CadastroProdutos />} />
      <Route path="/detalhes" element={<DetalhesProdutosAdm />} />
      <Route path="/editar/:id" element={<EditarProdutos />} />
    </Routes>
  )
}
