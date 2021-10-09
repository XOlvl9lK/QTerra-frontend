import { SyntheticEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../store/actions'

export const useLoginPageState = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const loginHandler = useCallback((e: SyntheticEvent, email, password) => {
    e.preventDefault()
    dispatch(loginAction({ email, password }))
  }, [email, password, dispatch])

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler
  }
}