import {addMessageAction, ADD_MESSAGE, getMessageAction} from '../messageReducer'
import { useMutation } from '@apollo/client'
import { SEND_MESSAGE } from '../../query/message'


export const SendMessageOnServer = (message) => {
  const [newMessage] = useMutation(SEND_MESSAGE)
  return (dispatch) => {
    newMessage({
      variables: {
        input: {
          post: message
        }
      }
    }).then(res => res.json()).then(json => dispatch(getMessageAction(json)))
  }
}