import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

import { Container } from './style'

export function Ingredients({
  isActivate,
  title = 'Adicionar',
  
  handleitem,
  ...rest
}) {
  return (
    <Container isactivate={isActivate ? 'true' : 'false'} {...rest}>
      <input
        type="text"
        //value={value}
        placeholder={title}
        readOnly={!isActivate}
        {...rest}
      />
      {isActivate ? <AiOutlinePlus size={20} onClick={handleitem}/> : <AiOutlineClose size={20} onClick={handleitem}/>}
    </Container>
  )
}
