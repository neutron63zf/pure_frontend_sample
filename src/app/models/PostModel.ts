export interface PostInterface {
  username: string
  timestamp: number
  content: string
}
export class PostModel implements PostInterface {
  constructor(readonly username, readonly timestamp, readonly content) {}
}
export default PostModel
