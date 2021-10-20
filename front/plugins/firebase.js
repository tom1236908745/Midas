import firebase from 'firebase/compat/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  onSnapshot,
  getDocs,
  addDoc,
  updateDoc,
  collection,
  deleteDoc,
  query,
  where
} from 'firebase/firestore'



if (!firebase.apps.length) {
  let firebaseApp = firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
  })
}

const db = getFirestore(firebaseApp, {})
export {
  firebase,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  doc,
  onSnapshot,
  getDocs,
  addDoc,
  updateDoc,
  collection,
  deleteDoc,
  query,
  where
}
