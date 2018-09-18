import { observable, action } from 'mobx'
import { PostModel, FirebaseModel } from 'app/models'

export class PostStore {
  constructor(timeline: PostModel[], private firebase?: FirebaseModel) {
    this.timeline = timeline
    this.firebase.subscribePosts(this.updateStore)
  }

  @observable
  public timeline: PostModel[]

  @action
  addPost = async (item: Partial<PostModel>): Promise<any> => {
    const post = new PostModel(item.username, Number(new Date()), item.content)
    this.timeline.push(post)
    try {
      return this.firebase.addPost(
        Number(new Date()).toString(),
        JSON.parse(JSON.stringify(post))
      )
    } catch (error) {
      console.error(error)
      return
    }
  }

  @action
  updateStore = (docs: any[]): void => {
    this.timeline = docs as PostModel[]
  }
}

export default PostStore
