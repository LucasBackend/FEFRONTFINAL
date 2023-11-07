import { useEffect, useState } from 'react'
import { Carrossel } from '../../Components/Carrossel'
import { Footer } from '../../Components/Footer'
import { Navbar } from '../../Components/Navbar'
import { SubMenuUser } from '../../Components/SubMenuUser/index'
import banner from '../../assets/banner.png'
import { api } from '../../service/api'
import { Container } from './style'
import { useLocation } from 'react-router-dom'

export function Produtos() {
  const [menuIsClone, setmenuIsClose] = useState(true)
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const [allproducts, setallProducts] = useState([])
  const [search, setSearch] = useState('')
  const [renderfavorite, setRenderFavorite] = useState(false)

  const location = useLocation()
  const cartQtd = location.state + 0

  const [cart, setCart] = useState(cartQtd)

  async function favoriteItem(id) {
    const response = await api.post('/favorite/create', { product_id: id })

    if (renderfavorite) {
      setRenderFavorite(false)
    } else {
      setRenderFavorite(true)
    }

    if (response.data === 'O item foi favoritado com sucesso!') {
      alert('Item favoritado com sucesso!')
    } else {
      alert('O item foi retirado dos favoritos!')
    }
  }

  useEffect(() => {
    async function allProducts() {
      const response = await api.post('/product/index', { search })
      setallProducts(response.data)
    }

    allProducts()
    
  }, [search, renderfavorite])

  return (
    <Container>
      <Navbar
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
        cart={cart}
      />

      <main>
        <SubMenuUser menuIsOpen={menuIsOpen} search={setSearch} />
        <div className="Container" data-menu-isopen={menuIsOpen}>
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

          <Carrossel
            title={'Refeições'}
            data={allproducts.filter((item) => item.category === 'Refeições')}
            favorite={favoriteItem}
            setcart={setCart}
            cart={cart}
          />
          <Carrossel
            title={'Sobremesas'}
            data={allproducts.filter((item) => item.category === 'Sobremesas')}
            favorite={favoriteItem}
            setcart={setCart}
            cart={cart}
          />
          <Carrossel
            title={'Bebidas'}
            data={allproducts.filter((item) => item.category === 'Bebidas')}
            favorite={favoriteItem}
            setcart={setCart}
            cart={cart}
          />
        </div>
      </main>

      <Footer />
    </Container>
  )
}
