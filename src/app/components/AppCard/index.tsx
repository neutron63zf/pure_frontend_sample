import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { PostInterface } from 'app/models/PostModel'

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
  }
})

interface AppCardProps extends Partial<WithStyles<typeof styles>> {
  content: PostInterface
}

interface AppCardState {}

class AppCard extends React.Component<AppCardProps, AppCardState> {
  render() {
    const { classes, content } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" />
          <Typography variant="headline" component="h2">
            username: {content.username}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            timestamp: {content.timestamp.toLocaleDateString()}
          </Typography>
          <Typography component="p">{content.content}</Typography>
        </CardContent>
        <CardActions />
      </Card>
    )
  }
}

export default withStyles(styles)(AppCard)
