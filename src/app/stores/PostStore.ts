import { observable, action } from 'mobx'
import { PostModel } from 'app/models'

export class PostStore {
  constructor(timeline: PostModel[]) {
    this.timeline = timeline
  }

  @observable
  public timeline: PostModel[]

  @action
  addPost = (item: Partial<PostModel>): void => {
    this.timeline.push(new PostModel(item.username, new Date(), item.content))
  }
}

export default PostStore
