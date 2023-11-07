import { AiOutlineSearch } from 'react-icons/ai'
import { Search } from '../../Components/Search/index'
import { Container } from './style'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import {useAuth} from '../../hook/auth'


export function SubMenuadm({ menuIsOpen,search }) {
 const {signOut} = useAuth()
 const navigate = useNavigate()

  return (
    <Container data-sub-open={menuIsOpen}>
      <div className="Container">
        <Search
          placeHolder={'Busque por pratos ou ingredientes'}
          icon={AiOutlineSearch}
          onChange={(e)=>search(e.target.value)}
        />
        <Link to="/cadastro">
        <button>Novo prato</button>
        </Link> 
        <div id="line"></div>

        <button onClick={()=>signOut(navigate)}>Sair</button>

        <div id="line"></div>
      </div>
    </Container>
  )
}
