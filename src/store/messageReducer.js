const initialState = {
  message: 0,
  update: false
}

const ADD_MESSAGE = "ADD_MESSAGE"
const GET_MESSAGE = "GET_MESSAGE"

export const messageReducer = (state = initialState, action) => {
  switch(action.type){
      case ADD_MESSAGE:
        return {...state, message: state.message + action.payload, update: !state.update}
      case GET_MESSAGE:
        return {...state, message: action.payload}
    default:
      return state
  }
}

export const addMessageAction = (payload) => ({type: ADD_MESSAGE, payload})
export const getMessageAction = (payload) => ({type: GET_MESSAGE, payload})