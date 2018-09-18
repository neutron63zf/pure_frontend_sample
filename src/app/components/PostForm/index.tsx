import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography
} from '@material-ui/core'
import { PostModel } from 'app/models'
import firebase from 'firebase/app'
import 'firebase/auth'

const styles = createStyles({
  card: {
    minWidth: 275,
    margin: 15
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: 200
  }
})

interface PostFormProps extends Partial<WithStyles<typeof styles>> {
  postTodo: (content: Partial<PostModel>) => any
}

interface PostFormState {
  isLoggedIn: boolean
  content: string
  username: string
}

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props?: PostFormProps, context?: any) {
    super(props, context)
    this.state = {
      isLoggedIn: false,
      content: '',
      username: 'anonymous'
    }
  }

  // arrow funcにしないとthis参照が狂って死ぬ
  private handleChange = event => {
    const preContent = event.target.value
    this.setState({
      content: preContent
    })
  }

  private postTodo = _ => {
    const content = this.state.content
    if (content.length > 0) {
      this.props.postTodo({
        username: this.state.username,
        content
      })
      this.setState({
        content: ''
      })
    }
  }

  private login = async _ => {
    const provider = new firebase.auth.GoogleAuthProvider()
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    let result
    try {
      result = await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      console.error('login', error)
      return
    }
    const { user } = result
    this.setState({
      username: user.displayName,
      isLoggedIn: true
    })
  }

  render() {
    const { classes } = this.props
    const { content, username, isLoggedIn } = this.state

    const loginButton = !isLoggedIn ? (
      <Button size="small" onClick={this.login}>
        ログイン
      </Button>
    ) : (
      undefined
    )

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" />
          <Typography variant="headline" component="h2">
            username: {username}
          </Typography>
          <Typography className={classes.pos} color="textSecondary" />
          <TextField
            id="post-content"
            label="投稿する内容"
            multiline
            className={classes.textField}
            onChange={this.handleChange}
            value={content}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.postTodo}>
            投稿する
          </Button>
          {loginButton}
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(PostForm)
