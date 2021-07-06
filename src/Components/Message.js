import {IconButton ,ListItemSecondaryAction ,ListItemAvatar , ListItem, ListItemText} from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import { Delete } from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles"
import { useMutation } from "@apollo/client"
import { DELETE_MESSAGE } from "../query/message"
import { useDispatch } from "react-redux"
import { addMessageAction } from "../store/messageReducer"


const useStyles = makeStyles({
  icon: {
    color: "white"
  },
  secondary: {
    color: 'gray',
  },
  delete: {
    color: 'gray',
    margin: '-10px'
  }
})

const Message = ({post, date, id}) => {
  const [deletingMessage] = useMutation(DELETE_MESSAGE)
  const classes = useStyles()
  const dispatch = useDispatch()

  const deleteMessage = () => {
    console.log(id)
    deletingMessage({
      variables: {
        input: {
          id
        }
      }
    }).then(({data}) => console.log(data))
    dispatch(addMessageAction(0))
  }

  return (
        <ListItem button>
          <ListItemAvatar>
            <ChatIcon className={classes.icon}  />
          </ListItemAvatar>
          <ListItemText classes={{secondary: classes.secondary}}  primary={post} secondary={date} />
          <ListItemSecondaryAction>
            <IconButton>
              <Delete onClick={() => deleteMessage()} className={classes.delete} />
            </IconButton>
          </ListItemSecondaryAction>
          
        </ListItem>
  )
}

export default Message
