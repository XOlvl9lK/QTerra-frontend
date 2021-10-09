import { SyntheticEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction, registerAction } from '../../store/actions'

export const useRegisterPageState = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const registerHandler = useCallback((e: SyntheticEvent, email, password, userName) => {
    e.preventDefault()
    dispatch(registerAction({ email, password, userName }))
  }, [email, password, dispatch])

  return {
    email,
    setEmail,
    password,
    setPassword,
    userName,
    setUserName,
    registerHandler
  }
}