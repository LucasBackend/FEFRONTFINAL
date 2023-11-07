import { Footer } from '../../Components/Footer'
import { Navbar } from '../../Components/Navbar'
import { SubMenuUser } from '../../Components/SubMenuUser'
import { Container, ContainerDetails, Details } from './style'

import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Marcadores } from '../../Components/Marcadores'

import { useNavigate, useParams,useLocation } from 'react-router-dom'

import { HiChevronLeft } from 'react-icons/hi'


import { useEffect, useState } from 'react'
import { api } from '../../service/api'

export function DetalhesProdutosUser() {
  const [menuIsClone, setmenuIsClose] = useState(true)
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const [name, setName] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState(null)
  const [image, setImage] = useState(null)
  const [ search, setSearch] = useState('')
  
  const location = useLocation()

  const cartQtd = location.state
  const [ cart , setCart]  = useState(cartQtd+0)

  const navigate = useNavigate()

  const [quantidadeItem, setquantidadeItem] = useState(0)

  const { id } = useParams()

  function addItem() {
    setquantidadeItem(quantidadeItem + 1)
  }

  function subItem() {
    quantidadeItem > 0
      ? setquantidadeItem(quantidadeItem - 1)
      : setquantidadeItem(0)
  }

  function addcart(){
    if(quantidadeItem>0){
      setCart(cart+1)
      setquantidadeItem(0)
    }else{
      alert('Valor a ser inserido não pode ser igual a 0!')
    }
  }

  useEffect(() => {
    async function getItem() {
      const response = await api.get(`/product/item/${id}`)
      setName(response.data.product.name)
      setIngredients(response.data.ingredients)
      setPrice(response.data.product.price.toFixed(2).replace('.', ','))
      setDescription(response.data.product.description)
      setImage(response.data.product.image)
    }

    getItem()
    
  }, [])

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
      {image && (
        <main>
          <SubMenuUser menuIsOpen={menuIsOpen} />

          <ContainerDetails data-sub-menu-open={menuIsOpen}>
            <div className="back">
              <ButtonText
                onClick={() => {
                  navigate('/',{state:cart})
                }}
              >
                <HiChevronLeft size={32} />
                <p>voltar</p>
              </ButtonText>
            </div>

            <Details>
              <img src={`${api.defaults.baseURL}/files/${image}`} alt="" />

              <div className="info">
                <h1>{name}</h1>
                <h2>{description}</h2>
                <div className="marcadores">
                  {ingredients.map((item) => (
                    <Marcadores title={item.name} key={item.id} />
                  ))}
                </div>
                <div className="containerAdd">
                  <div className="add">
                    <Button onClick={subItem}>-</Button>
                    <p>{quantidadeItem}</p>
                    <Button onClick={addItem}>+</Button>
                  </div>
                  <Button onClick={addcart}>Incluir - R$ {price}</Button>
                </div>
              </div>
            </Details>
          </ContainerDetails>
        </main>
      )}
      <Footer />
    </Container>
  )
}
