const initialState = {
  workers: [],
  loading: false,
  error: null
}

const workersReducer = (state = initialState, action)=>{
  switch(action.type){
    case 'GET_WORKERS_REQUEST':
      return {
        ...initialState,
       loading: true
      }
    case 'GET_WORKERS_SUCCESS':
      return {
        ...initialState,
        workers: action.payload,
        loading: false
      }
      case 'GET_WORKERS_FAILURE':
      return {
        ...initialState,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default workersReducer