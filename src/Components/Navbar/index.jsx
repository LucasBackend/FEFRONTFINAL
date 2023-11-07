import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'
import { PiReceipt } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'
import polygon from '../../assets/polygon.svg'
import { Button } from '../Button/index'
import { Search } from '../Search/index'
import { Container, NavClose, NavOpen } from './style'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/auth'

export function Navbar({
  menuIsClose,
  menuIsOpen,
  openMenu,
  closeMenu,
  search,
  cart,
}) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  return (
    <Container>
      <div className="navWeb">
        <div className="ContainerLogo">
          <img src={polygon} alt="" />
          <h2>food explorer</h2>
        </div>
        <Search
          placeHolder={'Busque por pratos ou ingredientes'}
          icon={AiOutlineSearch}
          onChange={(e) => {
            search(e.target.value)
          }}
        />
        <Button>
          <PiReceipt size={32} />
          Pedidos ({cart})
        </Button>
        <GoSignOut
          size={32}
          onClick={() => {
            signOut(navigate)
          }}
        />
      </div>

      <NavClose data-menu-isclone={menuIsClose}>
        <RxHamburgerMenu size={24} onClick={openMenu} />
        <div className="ContainerLogo">
          <img src={polygon} alt="" />
          <h2>food explorer</h2>
        </div>
        <Button>
          <PiReceipt size={32} />
          <p>{cart}</p>
        </Button>
      </NavClose>

      <NavOpen data-menu-isopen={menuIsOpen}>
        <AiOutlineClose size={24} onClick={closeMenu} />
        <p>Menu</p>
      </NavOpen>
    </Container>
  )
}
