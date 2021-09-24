import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
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
console.log("process.env.APIKEY",process.env.APIKEY);

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: "G-4F06MB34BE",
  });
}

export { firebase, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged};
