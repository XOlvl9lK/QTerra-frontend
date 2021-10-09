import { combineReducers } from "redux";
import user from '../features/authPage/store/slice'

export const rootReducer = combineReducers({
  user
})