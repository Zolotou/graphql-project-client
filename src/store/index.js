import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messageReducer } from "./messageReducer";
import { userReducer } from "./userReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers( {
  message: messageReducer,
  user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));