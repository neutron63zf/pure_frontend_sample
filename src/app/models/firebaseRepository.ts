import { FirebaseRepositoryInterface } from './FirebaseModel'
let db
export class FirebaseRepository implements FirebaseRepositoryInterface {
  constructor(firebase) {
    if (!db) {
      db = firebase.firestore()
      const settings = { timestampsInSnapshots: true }
      db.settings(settings)
    }
  }
  subscribeCollection(collection: string, callback: (docs: any[]) => any): any {
    return db.collection(collection).onSnapshot(snapshot => {
      let docs = []
      snapshot.forEach(doc => docs.push(doc.data()))
      callback(docs)
    })
  }
  addData(collection: string, id: string, data: any): Promise<any> {
    return db
      .collection(collection)
      .doc(id)
      .set(data)
  }
}
