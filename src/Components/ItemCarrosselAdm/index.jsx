import { AiOutlineEdit } from 'react-icons/ai'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

export function ItemCarrosselAdm({
  image,
  like,
  title,
  subtitle,
  value,
  record,
  ...rest
}) {

  const navigate = useNavigate()
  return (
    <Container like={like ? 'true' : 'false'} {...rest}>
      <AiOutlineEdit size={30} onClick={()=>{navigate(`/editar/${record.id}`)}}/>
      <img src={image} alt="Imagem" onClick={()=>navigate('/detalhes',{state:record})}/>
      <h2>{title +" >"}</h2>
      <p>{subtitle}</p>
      <h3>{value}</h3>
    </Container>
  )
}
