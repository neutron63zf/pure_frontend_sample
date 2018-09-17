import { History } from 'history'
import { TodoModel, PostModel } from 'app/models'
import { TodoStore } from './TodoStore'
import { RouterStore } from './RouterStore'
import { PostStore } from './PostStore'
import { STORE_TODO, STORE_ROUTER, STORE_POST } from 'app/constants'

export function createStores(
  history: History,
  defaultTodos?: TodoModel[],
  defaultPosts?: PostModel[]
) {
  const todoStore = new TodoStore(defaultTodos)
  const routerStore = new RouterStore(history)
  const postStore = new PostStore(defaultPosts)
  return {
    [STORE_TODO]: todoStore,
    [STORE_ROUTER]: routerStore,
    [STORE_POST]: postStore
  }
}
