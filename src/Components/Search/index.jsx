import {Container} from './style'


export function Search({title,children,icon:Icon,placeHolder,...rest}){

  return(
    <Container>
        {Icon&&<Icon size={19.5} color="#FFFFFF"/>}
        <input
            type="text"
            {...rest}
            placeholder={placeHolder}
            
        />
          
    </Container>
  )


}