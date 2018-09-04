import {Firebase} from './config';




class FirebaseAuth{
  constructor(){
    this.auth = Firebase.auth;
    this.user = null;
    this.isLoggedIn = false;
    this.unsubscribe = null;
    this.googleprovider = new Firebase.firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new Firebase.firebase.auth.FacebookAuthProvider();
    this.githubProvider = new Firebase.firebase.auth.GithubAuthProvider();
  }

  currentUser(){
    this.user = this.auth.currentUser;
  }

  //  authCheck(){
  //     let loggedIn = false;
  //    return () => {
  //      this.unsubscribe = this.auth.onAuthStateChanged(user => {
  //        console.log(user)
  //        if(user) return loggedIn = true;
  //        else loggedIn = false;
  //      })
  //    }
  // }
  // get getUnsubscribe(){
  //   return this.unsubscribe
  // }
  //
  // get getIsLoggedIn(){
  //   return this.isLoggedIn
  // }

  async signUp({email,password}){
    try{
      await this.auth.createUserWithEmailAndPassword(email,password)
      this.currentUser();
      await this.sendEmailVerification()
      return this.user;
    }
    catch(err){
      console.log('sign up error' ,err)
      return err;
    }
  }
  async sendEmailVerification(){
    try{
      await this.user.sendEmailVerification()
    }
    catch(err){
      console.log('send email vertification error', err);
      return err;
    }
  }
  async signIn({email,password}){
    try{
      await this.auth.signInWithEmailAndPassword(email,password)
      this.currentUser();
      if(!this.user.emailVerified){
        return false
      }
      return this.user;
    }
    catch(err){
      console.log('sign in email failed', err)
      return err;
    }
  }
  async thirdParyAuth(company){
    try{
      let provider;
      if(company === 'google'){
        provider = this.googleprovider
      }
      else if(company === 'facebook'){
        provider =this.facebookProvider;
      }
      else if(company === 'github'){
        provider = this.githubProvider;
      }
      const result = await this.auth.signInWithPopup(provider);
      var token = result.credential.accessToken;
       // The signed-in user info.
      return result.user;
    }
    catch(err){
      console.log('google auth failed', err)
      return err;
    }
  }

}

export default FirebaseAuth;
