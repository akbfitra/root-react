
const initialTempat = {
  tempat:{
    provinsi : [],
    kota: []
  }
}

const tempat = (state = initialTempat, action) => {
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

export default tempat