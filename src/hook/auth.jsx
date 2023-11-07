import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../service/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn(email, password) {
    if (!email || !password) {
      return alert('Favor inserir email e senha')
    }
    try {
      const response = await api.post('/users/session', {
        email,
        password,
      })

      const { user, token } = response.data
      setData({ user, token })

      localStorage.setItem('@rocketfoodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@rocketfoodexplorer:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar login!')
      }
    }
  }

  function signOut(navigate) {
    localStorage.removeItem('@rocketfoodexplorer:user')
    localStorage.removeItem('@rocketfoodexplorer:token')
    navigate('/')

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketfoodexplorer:token')
    const user = localStorage.getItem('@rocketfoodexplorer:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

