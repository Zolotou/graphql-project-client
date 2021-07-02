import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, TextField } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import { addMessageAction } from '../store/messageReducer'
import { fetchUsers } from '../store/asyncActions/users'
import { useQuery } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { CREATE_USER, GET_ALL_USERS, GET_ONE_USER } from '../query/user'
import { SEND_MESSAGE } from '../query/message'

const ControlPanel = props => {
  const {data: dataOne} = useQuery(GET_ONE_USER, {
    variables: {
      id: 1
    }
  })
  const [newMessage] = useMutation(SEND_MESSAGE);
  const dispatch = useDispatch()
  const stateMessage = useSelector(state => state.message.message)
  const stateUsers = useSelector(state => state.user.user)

  const [message, setMessage] = useState("")
  const SendMessage = () => {
    
    newMessage({
      variables: {
        input: {
          post: message
        }
      }
    }).then(({data}) => console.log(data))
    dispatch(addMessageAction(1))
    setMessage("");
  }

  
  return (
    <div className="Control-wrapper">
      <p style={{color : "black"}} >{stateMessage}</p>
      <TextField value={message} onChange={(e) => setMessage(e.target.value)} id="standard-basic" label="message"/>
      <Button variant="contained" color="primary" onClick={() => SendMessage()} >Send</Button>
      <Button variant="contained" onClick={() => dispatch(fetchUsers())}>Get USERS</Button>
    </div>
  )
}

ControlPanel.propTypes = {

}

export default ControlPanel
