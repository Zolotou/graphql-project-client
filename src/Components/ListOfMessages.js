import { useQuery } from '@apollo/client'
import { GET_ALL_MESSAGES } from '../query/message'
import Message from './Message'
import {useEffect} from 'react'
import { useSelector } from 'react-redux'

const ListOfMessages = (props) => {
  const {data, loading, error, refetch} = useQuery(GET_ALL_MESSAGES)
  const updateMessages = useSelector(state => state.message.update) 
  useEffect(() => {
    refetch()
    console.log(updateMessages)
  }, [updateMessages])
  return (
    <div>
      {loading? "LOADING" :  data?.getAllMessages?.map(message => <Message post={message.post} date={message.date} key={message.id} />)}
    </div>
  )
}

export default ListOfMessages
