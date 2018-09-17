import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
})

interface AppHeaderProps extends WithStyles<typeof styles> {}

interface AppHeaderState {}

class AppHeader extends React.Component<any, AppHeaderState> {
  render() {
    const { classes } = this.props as AppHeaderProps
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Timeline
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(AppHeader)
