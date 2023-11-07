import { useEffect, useState } from 'react'
import { CarrosselAdm } from '../../Components/CarrosselAdm'
import { Footer } from '../../Components/Footer'
import { Navbaradm } from '../../Components/Navbaradm'
import { SubMenuadm } from '../../Components/SubMenuAdm'
import banner from '../../assets/banner.png'
import { api } from '../../service/api'
import { Container } from './style'

export function ProdutosAdm() {
  const [menuIsClone, setmenuIsClose] = useState(true)
  const [menuIsOpen, setmenuIsOpen] = useState(false)

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function products() {
      const products = await api.post('product/index', {
        search,
      })

      setProducts(products.data)
    }

    products()
  }, [search])

  return (
    <Container>
      <Navbaradm
        menuIsClose={menuIsClone}
        menuIsOpen={menuIsOpen}
        openMenu={() => {
          setmenuIsClose(false)
          setmenuIsOpen(true)
        }}
        closeMenu={() => {
          setmenuIsClose(true)
          setmenuIsOpen(false)
        }}
        search={setSearch}
      />

      <main>
        <SubMenuadm menuIsOpen={menuIsOpen} search={setSearch} />
        <div className="Container" data-menu-open={menuIsOpen}>
          <div className="banner">
            <div id="foto">
              <img src={banner} />
            </div>
            <div className="info">
              <p id="titulo"> Sabores inigualáveis </p>
              <h2 id="texto">
                {' '}
                Sinta o cuidado do preparo com ingredientes selecionados{' '}
              </h2>
            </div>
          </div>

          <CarrosselAdm
            title={'Refeições'}
            data={products.filter((item) => item.category === 'Refeições')}
          />
          <CarrosselAdm
            title={'Sobremesas'}
            data={products.filter((item) => item.category === 'Sobremesas')}
          />
          <CarrosselAdm
            title={'Bebidas'}
            data={products.filter((item) => item.category === 'Bebidas')}
          />
        </div>
      </main>

      <Footer />
    </Container>
  )
}
