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
  addPost = (item: Partial<PostModel>): void => {
    const post = new PostModel(item.username, Number(new Date()), item.content)
    this.timeline.push(post)
    this.firebase.addPost(
      Number(new Date()).toString(),
      JSON.parse(JSON.stringify(post))
    )
  }

  @action
  updateStore = (docs: any[]): void => {
    this.timeline = docs as PostModel[]
  }
}

export default PostStore
