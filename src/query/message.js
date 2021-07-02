import {gql} from '@apollo/client'

export const GET_ALL_MESSAGES = gql`

  query{
    getAllMessages{
      id
      post
      date
    }
  }

`


export const SEND_MESSAGE = gql`
    mutation createMessage($input: MessageInput) { 
      createMessage(input: $input){
        id, post, date
      }
    }

`