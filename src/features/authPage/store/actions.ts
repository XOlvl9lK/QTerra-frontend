import { PayloadAction } from '@reduxjs/toolkit'
import { loginActionType, registerActionType } from './types'

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const loginAction = (payload: { email: string, password: string }): PayloadAction<loginActionType> => ({
  type: LOGIN,
  payload
})
export const registerAction = (payload: { email: string, password: string, userName: string }): PayloadAction<registerActionType> => ({
  type: REGISTER,
  payload
})
