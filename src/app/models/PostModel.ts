export interface PostInterface {
    username: string,
    timestamp: Date,
    content: string
}
export class PostModel implements PostInterface {
    constructor(readonly username, readonly timestamp, readonly content){
    }
}
export default PostModel