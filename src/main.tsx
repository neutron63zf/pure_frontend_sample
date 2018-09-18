import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import { TodoModel, FirebaseModel } from 'app/models'
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

// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(
  history,
  defaultTodos,
  [],
  new FirebaseModel(new FirebaseRepository(firebase))
)

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
