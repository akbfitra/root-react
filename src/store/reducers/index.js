import { combineReducers } from 'redux'

import tempatReducer from './kotaReducer'
import userReducer from './userReducer'

export default combineReducers({ user: userReducer, tempat: tempatReducer })