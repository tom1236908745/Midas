import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// ** Firebaseプロジェクトの設定を記す
/* if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: $config.APIKEY,
    authDomain: $config.AUTHDOMAIN,
    databaseURL: $config.DAABASEURL,
    projectId: $config.PROJECTID,
    storageBucket: $config.STORAGEBUCKET,
    messagingSenderId: $config.MESSAGINGSENDERID// ** cloudmessagingを使う場合は設定
  })
} */
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD8Epzwn22MizPGwltZlrJ7vPC3jvB1sk4",
    authDomain: "author-950fe.firebaseapp.com",
    projectId: "author-950fe",
    storageBucket: "author-950fe.appspot.com",
    messagingSenderId: "33042726452",
    appId: "1:33042726452:web:3b9fa11f30c0638ca71461",
    measurementId: "G-4F06MB34BE"
  });
}

export { firebase, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut};
