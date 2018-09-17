import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = createStyles({
  card: {
    minWidth: 275,
    margin: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

interface AppCardProps extends Partial<WithStyles<typeof styles>> {}

interface AppCardState {}

class AppCard extends React.Component<AppCardProps, AppCardState> {
  render() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" />
          <Typography variant="headline" component="h2">
            username: nkowne63
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            timestamp: today
          </Typography>
          <Typography component="p">今日も疲れたー</Typography>
        </CardContent>
        <CardActions />
      </Card>
    )
  }
}

export default withStyles(styles)(AppCard)
