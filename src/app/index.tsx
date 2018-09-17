import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Router, Route, Switch } from 'react-router'
import { Root } from 'app/containers/Root'
import { TodoApp } from 'app/containers/TodoApp'
import { TimelineApp } from 'app/containers/TimelineApp'

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={TodoApp} />
        <Route path="/t/" component={TimelineApp} />
      </Switch>
    </Router>
  </Root>
))
