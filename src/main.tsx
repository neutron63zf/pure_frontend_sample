import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import { TodoModel, PostModel, FirebaseModel } from 'app/models'
import { FirebaseRepository } from 'app/models/firebaseRepository'
import { createStores } from 'app/stores'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { App } from 'app'

// enable MobX strict mode
useStrict(true)

// firebase settings
const config = {
  apiKey: 'AIzaSyBi_uoqa-e2yUohz1fGYkporWY6DOyuKB8',
  authDomain: 'purefrontsamleapp.firebaseapp.com',
  projectId: 'purefrontsamleapp'
}
firebase.initializeApp(config)

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
]

const posts = [
  {
    username: 'nkowne63',
    timestamp: Number(new Date()),
    content: '今日も疲れたー'
  },
  {
    username: 'nkowne63',
    timestamp: Number(new Date(Number(new Date()) + 1)),
    content: 'ゆっくり寝よう'
  }
] as PostModel[]

// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(
  history,
  defaultTodos,
  posts,
  new FirebaseModel(new FirebaseRepository(firebase))
)

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
