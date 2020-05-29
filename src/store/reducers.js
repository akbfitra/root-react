import { combineReducers } from 'redux'

const initialUser = {
  user:{
    username : '',
    role : '',
    isLogin : false
  }
}

const intialTempat = {
  tempat:{
    provinsi : [],
    kota: []
  }
}

const user = (state = initialUser, action) => {
  switch( action.type ){
    case 'LOGIN_USER':
      return { ...state, 
                user:{
                  isLogin: true,
                  username: action.payload.username,
                  role: action.payload.role
                } 
              }
    case 'CEK_LOGIN':
      return { ...state,
              user: {
                isLogin: true,
                username: action.payload.username,
                role: action.payload.role,
              }
              }
    case 'LOGOUT_USER':
      return { ...state, 
                user:{
                  isLogin: false,
                  username: '',
                  role: ''
                }
              }
    default:
      return state
  }
}

const tempat = (state = intialTempat, action) => {
  switch( action.type ){
    case 'DATA_PROVINSI':
      return { ...state,
                tempat:{
                  provinsi: action.payload
                }
              }
    case 'DATA_KOTA':
      return { ...state,
                tempat:{
                  kota: action.payload
                }
      }
    default:
      return state
  }
}

export default combineReducers({ user, tempat })