const initialUser = {
  user:{
    username : '',
    role : '',
    isLogin : false
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

export default user