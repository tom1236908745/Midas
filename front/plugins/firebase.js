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
  collection,
  deleteDoc,
  query,
  where
} from 'firebase/firestore'

let firebaseApp = {}

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: 'G-4F06MB34BE',
  })
} else {
  firebaseApp = apps[0]
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
  collection,
  deleteDoc,
  query,
  where
}
