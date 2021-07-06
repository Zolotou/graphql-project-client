import { useQuery } from '@apollo/client'
import { GET_ALL_MESSAGES } from '../query/message'
import Message from './Message'
import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { maxHeight } from '@material-ui/system'

const useStyles = makeStyles({
  list: {
    overflow: 'auto',
    maxHeight: '50vh'
  },
  
})

const ListOfMessages = (props) => {
  const classes = useStyles();
  const {data, loading, error, refetch} = useQuery(GET_ALL_MESSAGES)
  const updateMessages = useSelector(state => state.message.update) 
  useEffect(() => {
    refetch()
  }, [updateMessages])
  return (
    <List className={classes.list}>
      {loading? "LOADING" :  data?.getAllMessages?.map(message => <Message post={message.post} date={message.date} id={message.id} key={message.id} />)}
    </List>
  )
}

export default ListOfMessages
