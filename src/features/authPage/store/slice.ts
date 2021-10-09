import { User } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialUserState: User = {
  id: null,
  email: null,
  avatar: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state = action.payload
    },
    purgeUser(state) {
      state = initialUserState
    }
  }
})

export const { setUser, purgeUser } = userSlice.actions
export default userSlice.reducer

