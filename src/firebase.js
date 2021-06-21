import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbL4istlV9YL3ypToUYP4aeYsJ72OpZys",
    authDomain: "to-do-30340.firebaseapp.com",
    projectId: "to-do-30340",
    storageBucket: "to-do-30340.appspot.com",
    messagingSenderId: "188606617746",
    appId: "1:188606617746:web:17e4fdf866a0bf7b8eae4b",
    measurementId: "G-M64GN7VDBW"
})

const db = firebaseApp.firestore();

export default db;