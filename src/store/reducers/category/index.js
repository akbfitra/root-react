
const initialCategory = {
  category:{
    category : [],
    listAnswerUsers: []
  }
}

const category = (state = initialCategory, action) => {
  switch( action.type ){
    case 'DATA_CATEGORY':
      return { ...state,
                category:{
                  category: action.payload
                }
              }
    case 'DATA_LIST_ANSWERS':
      return { ...state,
                category:{
                  listAnswersUsers: action.payload
                }
      }
    default:
      return state
  }
}

export default category