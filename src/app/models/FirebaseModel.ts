export interface FirebaseRepositoryInterface {
  subscribeCollection: (
    collection: string,
    callback: (docs: any[]) => any
  ) => any
  addData: (collection: string, id: string, data: any) => Promise<any>
}

export class FirebaseModel {
  constructor(private instance: FirebaseRepositoryInterface) {}
  subscribePosts(callback: (docs: any[]) => any): any {
    return this.instance.subscribeCollection('posts', callback)
  }
  addPost(id: string, postObj: any): Promise<any> {
    return this.instance.addData('posts', id, postObj)
  }
}
export default FirebaseModel
