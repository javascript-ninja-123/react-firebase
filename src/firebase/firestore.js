import {Firebase} from './config';


class FireStore{
  constructor(){
    this.firestore = Firebase.firestore;
  }
  async add({collection,doc,data}){
    try{
      await this.firestore.collection(collection).doc(doc).set(data)
      return true;

    }
    catch(err){
      console.log('FireStore add error', err)
      return err;
    }
  }
}

export default FireStore
