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

import { useNavigate,useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { api } from '../../service/api'

export function EditarProdutos() {
  const [menuIsClone, setmenuIsClose] = useState(true)
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const [name, setName] = useState(null)
  const [category, setCategory] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState(null)
  const [ description , setDescription] = useState(null)
  const [ image, setImage] = useState(null)
  const [newingredient, setNewIngredient] = useState('')
  const [ingredientsDelete,setIngredientsDelete] = useState([])
  const [ingredientsAdd,setIngredientsAdd] = useState([])

  function handleDelete(item){
    setIngredientsDelete([...ingredientsDelete,item])
    setIngredients(ingredients.filter(ingredients=>ingredients.id!==item.id))

  }

  function handleAdd(item){
    if(!item){
      return alert('Favor informar o ingrediente!')
    }
    const ing = {name:item,id:crypto.randomUUID()}
    setIngredients([...ingredients, ing])
    setIngredientsAdd([...ingredientsAdd,item])

    setNewIngredient('')


  }

  async function handleUpdate(){
    if(!name || !category || !ingredients || !price || !description){
      return alert('Favor preencher todos os campos!')
    }

    const record = {
      id,
      name,
      category,
      price,
      description,
      newIngredients:ingredientsAdd,
      deleteIngredients: ingredientsDelete
    }
    await api.put('product/update',record)

    if(image){
    const formData = new FormData()
    formData.append('file',image)
    formData.append('id',id)
    await api.patch('product/updateImage',formData)
    setImage(null)
    }

    alert('Produto modificado com sucesso!')
    navigate('/')
    
  }

  async function handleDeleteProduct(){
    const response = await confirm('Realmente deseja deletar este produto?')

    if(response){
      api.delete(`product/delete/${id}`)
      alert('Produto deletado com sucesso!')
      navigate('/')
    }    

  }

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    async function getItem(){
      const response = await api.get(`/product/item/${id}`)
      setName(response.data.product.name)
      setCategory(response.data.product.category)
      setIngredients(response.data.ingredients)
      setPrice(response.data.product.price.toFixed(2))
      setDescription(response.data.product.description)
    }

    getItem()
  },[])
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
 {category &&
      <main>
        <SubMenuadm menuIsOpen={menuIsOpen} />

        <Containerform data-sub-menu-open={menuIsOpen}>
          <div className="back">
            <ButtonText>
              <HiChevronLeft size={32} onClick={()=>navigate(-1)}/>
              <p onClick={()=>navigate(-1)}>voltar</p>
            </ButtonText>
          </div>
          <h1>Editar prato</h1>

          <div id="lineOne">
            <div className="Card">
              <p>Imagem do prato</p>
              <InputImage onChange={(e)=>{setImage(e.target.files[0])}}/>
            </div>
            <div className="Card">
              <p>Nome</p>
              <Inputtextform placeHolder="Ex.: Salada Ceasar" type="text" defaultValue={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="Card">
              <p>Categoria</p>
              <Selectinput
                id="products"
                name="products"
                defaultValue={category}
                onChange={(e)=>{setCategory(e.target.value)}}
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
                <Ingredients isActivate={true} value={newingredient} onChange={(e)=>{setNewIngredient(e.target.value.toLowerCase())}} handleitem={()=>{handleAdd(newingredient)}}/>
                {ingredients.map(ing=> <Ingredients isActivate={false} defaultValue={ing.name} handleitem={()=>{handleDelete(ing)}} key={ing.id} />)}
                
              </div>
            </div>
            <div className="Card">
              <p>Preço</p>
              <Inputtextform placeHolder="R$ 00,00" type="number" id="value" defaultValue={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
          </div>

          <div id="lineThree">
            <div className="Card">
              <p>Descrição</p>
              <InputArea placeHolder="Fale brevemente sobre o prato, seus ingredientes e composição" defaultValue={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
          </div>

          <div id="buttons">
            <Button id="deletar" onClick={handleDeleteProduct}>Excluir prato</Button>
            <Button id="salvar" onClick={handleUpdate}>Salvar alterações</Button>
          </div>
        </Containerform>
      </main>
    }
      <Footer />
    </Container>
  )
}
