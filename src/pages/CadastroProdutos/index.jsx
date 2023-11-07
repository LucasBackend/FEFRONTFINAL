import { Footer } from '../../Components/Footer'
import { Navbaradm } from '../../Components/Navbaradm'
import { SubMenuadm } from '../../Components/SubMenuAdm'
import { Container, Containerform } from './style'

import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Ingredients } from '../../Components/Ingredients'
import { InputArea } from '../../Components/InputArea'
import { InputImage } from '../../Components/InputImage'
import { Selectinput } from '../../Components/SelectInput'
import { Inputtextform } from '../../Components/inputTextForm'

import { HiChevronLeft } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { api } from '../../service/api'

export function CadastroProdutos() {
  const navigate = useNavigate()

  const [menuIsClone, setmenuIsClose] = useState(true)
  const [menuIsOpen, setmenuIsOpen] = useState(false)

  const [image, setImage] = useState('')
  const [nomeProduto, setnomeProduto] = useState('')
  const [categoria, setCategoria] = useState('Refeições')
  const [Ingredientes, setIngredientes] = useState([])
  const [preco, setPrecos] = useState(null)
  const [descricao, setDescricao] = useState('')
  const [novoIngrediente, setNovoIngrediente] = useState('')

  function handleIngredients(item) {
    if (novoIngrediente) {
      setIngredientes([...Ingredientes, item])
      setNovoIngrediente('')
    } else {
      alert('Favor inserir o ingrediente!')
    }
  }

  function handleRemoveIngredients(item) {
    setIngredientes(Ingredientes.filter((record) => record !== item))
  }

  async function handleRegister() {
    if (
      !image ||
      !nomeProduto ||
      !categoria ||
      !preco ||
      !descricao ||
      Ingredientes.length === 0
    ) {
      return alert(
        'Todos as informações são obrigatórias para cadastrar o produto.',
      )
    }

    const ingredientes = Ingredientes.join(',')
    const fileForm = new FormData()
    fileForm.append('file', image)
    fileForm.append('name', nomeProduto)
    fileForm.append('category', categoria)
    fileForm.append('price', preco)
    fileForm.append('description', descricao)
    fileForm.append('ingredients', ingredientes)
    try {
      await api.post('/product/create', fileForm)
      fileForm.delete('file')
      fileForm.delete('name')
      fileForm.delete('category')
      fileForm.delete('price')
      fileForm.delete('description')
      fileForm.delete('ingredients')
      alert('Produto cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar!')
      }
    }
  }

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
      />

      <main>
        <SubMenuadm menuIsOpen={menuIsOpen} />

        <Containerform data-sub-menu-open={menuIsOpen}>
          <div className="back">
            <Link to="/">
              <ButtonText>
                <HiChevronLeft size={32} />
                <p>voltar</p>
              </ButtonText>
            </Link>
          </div>
          <h1>Adicionar prato</h1>

          <div id="lineOne">
            <div className="Card">
              <p>Imagem do prato</p>
              <InputImage
                onChange={(e) => {
                  setImage(e.target.files[0])
                }}
              />
            </div>
            <div className="Card">
              <p>Nome</p>
              <Inputtextform
                placeHolder="Ex.: Salada Ceasar"
                type="text"
                onChange={(e) => {
                  setnomeProduto(e.target.value)
                }}
              />
            </div>
            <div className="Card">
              <p>Categoria</p>
              <Selectinput
                onChange={(e) => {
                  setCategoria(e.target.value)
                }}
                id="products"
                name="products"
                selections={[
                  { Value: 'Refeições', id: 1 },
                  { Value: 'Sobremesas', id: 2 },
                  { Value: 'Bebidas', id: 3 },
                ]}
              />
            </div>
          </div>

          <div id="lineTwo">
            <div className="Card">
              <p>Ingredientes</p>
              <div id="Ingredients">
                <Ingredients
                  isActivate={true}
                  onChange={(e) => {
                    setNovoIngrediente(e.target.value.toLowerCase())
                  }}
                  handleitem={() => {
                    handleIngredients(novoIngrediente)
                  }}
                  value={novoIngrediente}
                />
                {Ingredientes.map((item) => (
                  <Ingredients
                    key={crypto.randomUUID()}
                    isActivate={false}
                    defaultValue={item}
                    handleitem={() => handleRemoveIngredients(item)}
                  />
                ))}
              </div>
            </div>
            <div className="Card">
              <p>Preço</p>
              <Inputtextform
                placeHolder="R$ 00,00"
                type="number"
                id="value"
                onChange={(e) => {
                  setPrecos(e.target.value)
                }}
              />
            </div>
          </div>

          <div id="lineThree">
            <div className="Card">
              <p>Descrição</p>
              <InputArea
                placeHolder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => {
                  setDescricao(e.target.value)
                }}
              />
            </div>
          </div>

          <div id="buttons">
            <Button onClick={handleRegister}>Salvar alterações</Button>
          </div>
        </Containerform>
      </main>

      <Footer />
    </Container>
  )
}
