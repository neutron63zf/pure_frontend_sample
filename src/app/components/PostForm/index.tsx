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
}

interface PostFormState {}

class PostForm extends React.Component<PostFormProps, PostFormState> {
  render() {
    const { classes, username } = this.props

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
          />
        </CardContent>
        <CardActions>
          <Button size="small">投稿する</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(PostForm)
