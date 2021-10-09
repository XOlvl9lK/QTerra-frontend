import React  from 'react'
import { useLoginPageState } from './hooks/useLoginPageState'
import { NavLink } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler
  } = useLoginPageState()

  return (
    <div className="login">
      <h1>Авторизация</h1>
      <form>
        <input
          value={email}
          onChange={() => setEmail(email)}
          id="email"
          type="text"
        />
        <label htmlFor="email">Email</label>

        <input
          value={password}
          onChange={() => setPassword(password)}
          id="password"
          type="text"
        />
        <label htmlFor="password">Password</label>

        <button onClick={(e) => loginHandler(e, email, password)}>Login</button>
      </form>
      <NavLink to='/register'>
        <button>
          Registration
        </button>
      </NavLink>
    </div>
  )
}

export default LoginPage