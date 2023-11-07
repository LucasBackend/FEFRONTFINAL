import { Container} from './style'
import polygon_cinza from '../../assets/polygon_cinza.svg'
export function Footer(){
return(
<Container>

  <div className="Logo">
      <img src={polygon_cinza} alt="" />
      <h2>food explorer</h2>
  </div>
  
  <p>© 2023 - Todos os direitos reservados.</p>
  
</Container>
)

}