import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { InputText } from '../../Components/InputText'
import polygon from '../../assets/polygon.svg'
import { api } from '../../service/api'
import { Container } from './style'

export function Registro() {
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleRegister(username, email, password) {
    if (!username || !email || !password) {
      return alert('Favor preencher todos os campos para cadastro!')
    }

    const user = {
      name: username,
      email,
      password,
      admin: false,
    }
    try {
      await api.post('/users/create', user)
      setUserName('')
      setUserEmail('')
      setUserPassword('')
      alert('Usuário cadastrado com sucesso!')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar, favor tentar novamente!')
      }
    }
  }

  return (
    <Container>
      <div className="Content">
        <main>
          <div className="Container">
            <img src={polygon} />
            <h2>food explorer</h2>
          </div>
          <div className="Form">
            <h3>Crie sua conta</h3>
            <div className="Registro">
              <label>
                Seu nome
                <InputText
                  title="Exemplo: Maria da Silva"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label>
                Email
                <InputText
                  title="Exemplo: exemplo@exemplo.com.br"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
              <label>
                Senha
                <InputText
                  title="Mínimo de 6 caracteres"
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                />
              </label>
              <Button
                onClick={() => {
                  handleRegister(userName, userEmail, userPassword)
                }}
              >
                Criar conta
              </Button>
            </div>
            <Link to="/">
              <h4> Já tenho uma conta</h4>
            </Link>
          </div>
        </main>
      </div>
    </Container>
  )
}
