import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbL4istlV9YL3ypToUYP4aeYsJ72OpZys",
    authDomain: "to-do-30340.firebaseapp.com",
    databaseURL: "https://to-do-30340-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "to-do-30340",
    storageBucket: "to-do-30340.appspot.com",
    messagingSenderId: "188606617746",
    appId: "1:188606617746:web:17e4fdf866a0bf7b8eae4b",
    measurementId: "G-M64GN7VDBW"
})

const db = firebaseApp.firestore();

export default db;

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
