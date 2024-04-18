const initialState = {
  name: 'budi',
  nilai: 1,
}

const mainReducer = (state = initialState, action)=>{
  if(action.type === 'INCREMENT'){
    return {
      ...state,
      nilai: state.nilai + 1
    }
  }else if(action.type === 'DECREMENT'){
    return {
      ...state,
      nilai: state.nilai - 1
    }
  }else if(action.type === 'CHANGE_NAME'){
    return {
      ...state,
      name: action.payload
    }
  }
  return state
}

export default mainReducer