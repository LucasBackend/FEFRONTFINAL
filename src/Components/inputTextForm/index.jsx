import { Container } from './style';

export function Inputtextform({placeHolder,type = "text",...rest}){
    return(
        <Container>
            <input type={type} placeholder={placeHolder} {...rest}/>
        </Container>
    )

}