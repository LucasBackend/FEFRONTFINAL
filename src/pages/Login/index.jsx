import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { InputText } from '../../Components/InputText'
import polygon from '../../assets/polygon.svg'
import { useAuth } from '../../hook/auth'
import { Container } from './style'

export function Login() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <div className="Content">
        <main>
          <div className="Container">
            <img src={polygon} />
            <h2>food explorer</h2>
          </div>
          <div className="Form">
            <h3>Faça login</h3>
            <div className="Registro">
              <label>
                Email
                <InputText
                  title="Exemplo: exemplo@exemplo.com.br"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Senha
                <InputText
                  title="Mínimo de 6 caracteres"
                  onChange={(e) => setPassword(e.target.value)}
                  type={'password'}
                />
              </label>
              <Button
                onClick={() => {
                  signIn(email, password)
                }}
              >
                Entrar
              </Button>
            </div>
            <Link to="/registro">
              <h4> Criar uma conta</h4>
            </Link>
          </div>
        </main>
      </div>
    </Container>
  )
}
