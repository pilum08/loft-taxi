import { combineReducers } from "redux"
import authReducer from "./auth"
import card from './card'

export default combineReducers({ auth: authReducer, card });
