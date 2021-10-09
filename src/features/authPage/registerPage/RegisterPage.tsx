import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRegisterPageState } from './hooks/useRegisterPageState'

const RegisterPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    userName,
    setUserName,
    registerHandler
  } = useRegisterPageState()

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

        <input
          value={userName}
          onChange={() => setUserName(userName)}
          id="userName"
          type="text"
        />
        <label htmlFor="userName">User Name</label>

        <button onClick={(e) => registerHandler(e, email, password, userName)}>Register</button>
      </form>
      <NavLink to='/login'>
        <button>
          Login
        </button>
      </NavLink>
    </div>
  )
}

export default RegisterPage