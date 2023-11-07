import { Footer } from '../../Components/Footer'
import { Navbaradm } from '../../Components/Navbaradm'
import { SubMenuadm } from '../../Components/SubMenuAdm'
import { Container, ContainerDetails, Details } from './style'

import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Marcadores } from '../../Components/Marcadores'

import { HiChevronLeft } from 'react-icons/hi'

import { useState } from 'react'
import { api } from '../../service/api'

export function DetalhesProdutosAdm() {
  const [menuIsClone, setmenuIsClose] = useState(true)
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const location = useLocation()
  const record = location.state
  const navigate = useNavigate()

  return (
    <Container>
      <Navbaradm
        menuIsClose={menuIsClone}
        menuIsOpen={menuIsOpen}
        openMenu={() => {
          setmenuIsClose(false)
          setmenuIsOpen(true)
        }}
        closeMenu={() => {
          setmenuIsClose(true)
          setmenuIsOpen(false)
        }}
      />

      <main>
        <SubMenuadm menuIsOpen={menuIsOpen} />

        <ContainerDetails data-sub-menu-open={menuIsOpen}>
          <div className="back">
            <ButtonText>
              <HiChevronLeft
                size={32}
                onClick={() => {
                  navigate(-1)
                }}
              />
              <p
                onClick={() => {
                  navigate(-1)
                }}
              >
                voltar
              </p>
            </ButtonText>
          </div>

          <Details>
            <img src={`${api.defaults.baseURL}/files/${record.image}`} alt="" />

            <div className="info">
              <h1>{record.name}</h1>
              <h2>{record.description}</h2>
              <div className="marcadores">
                {record.ingredients.map((ingredients) => {
                  return (
                    <Marcadores title={ingredients.name} key={ingredients.id} />
                  )
                })}
              </div>
              <Button
                onClick={() => {
                  navigate(`/editar/${record.id}`)
                }}
              >
                Editar prato
              </Button>
            </div>
          </Details>
        </ContainerDetails>
      </main>

      <Footer />
    </Container>
  )
}
