import {addMessageAction, ADD_MESSAGE} from '../messageReducer'
import { useMutation } from '@apollo/client'

export const sendMessage = (message) => {
  const [newMessage] = useMutation(SEND_MESSAGE)
  return (dispatch) => {
    newMessage({
      variables: {
        input: {
          post: message
        }
      }
    }).then(res => res.json()).then(json => dispatch(addMessageAction(json)))
  }
}