import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { User } from '../features/authPage/store/types'
import { initialUserState } from '../features/authPage/store/slice'
import { userSagaWatcher } from '../features/authPage/store/sagas'
import { all } from 'redux-saga/effects'

export interface PreloadedState {
  user: User
}

const preloadedState: PreloadedState = {
  user: initialUserState
}

function* rootSaga() {
  yield all([
    userSagaWatcher()
  ])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)