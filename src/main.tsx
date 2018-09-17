import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import { TodoModel, PostModel } from 'app/models'
import { createStores } from 'app/stores'
import { App } from 'app'

// enable MobX strict mode
useStrict(true)

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
]

const posts = [
  {
    username: 'nkowne63',
    timestamp: new Date(),
    content: '今日も疲れたー'
  },
  {
    username: 'nkowne63',
    timestamp: new Date(),
    content: 'ゆっくり寝よう'
  }
] as PostModel[]

// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(history, defaultTodos, posts)

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
