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
  username: string
  postTodo: (content: Partial<PostModel>) => any
}

interface PostFormState {
  content: string
}

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props?: PostFormProps, context?: any) {
    super(props, context)
    this.state = {
      content: ''
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
        username: this.props.username,
        content
      })
      this.setState({
        content: ''
      })
    }
  }

  render() {
    const { classes, username } = this.props
    const { content } = this.state

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
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(PostForm)
