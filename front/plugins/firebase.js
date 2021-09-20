import firebase from 'firebase/app'
require('dotenv').config()

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    /* databaseURL: "YOUR_DOMAIN.firebaseio.com", */
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    appId: process.env.APPID,
  })
}

export const firestore = firebase.firestore()
