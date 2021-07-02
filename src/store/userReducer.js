const initialState = {
  user: [],
}

const ADD_USER = "ADD_USER"
const GET_USER = "GET_USER"

export const userReducer = (state = initialState, action) => {
  switch(action.type){
      case "ADD_USER":
        return {...state, user: ["lol"]}
      case "GET_USER":
        return {...state, user: [...action.payload]}
    default:
      return state
  }
}

export const getUserAction = (payload) => ({type: GET_USER, payload})
export const addUserAction = (payload) => ({type: ADD_USER, payload})