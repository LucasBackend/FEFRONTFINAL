import { AiOutlineUpload } from 'react-icons/ai'
import { Container } from './style'

export function InputImage({...rest}) {
  return (
    <Container>
      <label htmlFor="inputImg" >
        <AiOutlineUpload size={24} />
        <p>Selecione imagem</p>
        <input type="file" id="inputImg" {...rest}/>
      </label>
    </Container>
  )
}
