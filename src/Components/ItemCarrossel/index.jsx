import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Container } from './style'

export function ItemCarrossel({
  image,
  like,
  title,
  subtitle,
  value,
  favoriteitem,
  setcart,
  cart,
  id,
  ...rest
}) {
  const [valor, setValor] = useState(0)
  const navigate = useNavigate()

  function adicionar() {
    setValor(valor + 1)
  }

  function subtrair() {
    if (valor > 0) {
      setValor(valor - 1)
    }
  }

  function incluir() {
    if (valor === 0) {
      return alert('Favor incluir a quantidade de produto!')
    } else {
      setcart(cart + 1)
      setValor(0)
    }
  }

  return (
    <Container $like={like ? 'true' : 'false'} {...rest}>
      {like === true ? (
        <AiFillHeart size={30} onClick={favoriteitem} />
      ) : (
        <AiOutlineHeart size={30} onClick={favoriteitem} />
      )}
      <img
        src={image}
        alt="Imagem"
        onClick={() => {
          navigate(`/detalhes/${id}`,{state:cart})
        }}
      />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <h3>{value}</h3>
      <div className="inclusao">
        <div className="baixo">
          <button id="subtrair" onClick={subtrair}>
            -
          </button>
          <p id="valor">{valor}</p>

          <button id="adicionar" onClick={adicionar}>
            +
          </button>
        </div>
        <button id="incluir" onClick={incluir}>
          Incluir
        </button>
      </div>
    </Container>
  )
}
