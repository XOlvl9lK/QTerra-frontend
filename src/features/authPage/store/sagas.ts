import { call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN, loginActionType, REGISTER, registerActionType } from './actions'
import { PayloadAction } from '@reduxjs/toolkit'
import AuthService from '../../../api/AuthService'
import { AxiosResponse } from 'axios'
import { setUser } from './slice'

function* loginSaga({ type, payload }: PayloadAction<loginActionType>) {
  try {
    const user: AxiosResponse = yield call(AuthService.login, payload.email, payload.password)
    yield put(setUser(user.data))
  } catch (e) {
    console.log(e)
  }
}

function* registerSaga({ type, payload }: PayloadAction<registerActionType>) {
  try {
   const user: AxiosResponse = yield call(AuthService.register, payload.email, payload.password, payload.userName)
    yield put(setUser(user.data))
  } catch (e) {
    console.log(e)
  }
}

export function* userSagaWatcher() {
  yield takeEvery(LOGIN, loginSaga)
  yield takeEvery(REGISTER, registerSaga)
}