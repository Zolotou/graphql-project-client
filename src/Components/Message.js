import { List, ListItem, ListItemText, ListItemIcon, ThemeProvider } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  icon: {
    color: "white"
  },
  title: {
    color: 'white',
    secondary: {
      color: 'white'
    }
  }
})

const Message = ({post, date}) => {
  const classes = useStyles()

  return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChatIcon className={classes.icon}  />
          </ListItemIcon>
          <ListItemText secondary className={classes.title} primary={post} secondary={date} />
        </ListItem>
      </List>
  )
}

export default Message
