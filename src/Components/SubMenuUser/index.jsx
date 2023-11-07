import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Search } from '../../Components/Search/index'
import { useAuth } from '../../hook/auth'
import { Container } from './style'

export function SubMenuUser({ menuIsOpen, search }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  return (
    <Container data-sub-open={menuIsOpen}>
      <div className="Container">
        <Search
          placeHolder={'Busque por pratos ou ingredientes'}
          icon={AiOutlineSearch}
          onChange={(e) => {
            search(e.target.value)
          }}
        />
        <button
          onClick={() => {
            signOut(navigate)
          }}
        >
          Sair
        </button>

        <div id="line"></div>
      </div>
    </Container>
  )
}
