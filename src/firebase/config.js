import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


var config = {
  apiKey: "AIzaSyDio-9VP1lVQl2_UEPYpgP6jiVnEjIx11c",
  authDomain: "fir-practice-c02dc.firebaseapp.com",
  databaseURL: "https://fir-practice-c02dc.firebaseio.com",
  projectId: "fir-practice-c02dc",
  storageBucket: "fir-practice-c02dc.appspot.com",
  messagingSenderId: "902667566566"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const Firebase = {
  firebase,
  auth:firebase.auth(),
  firestore:firestore
}
