
// lib/firebase-config.js
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { app } from "firebase-admin";

const firebaseConfig = {
    apiKey: "AIzaSyB-HysRqy2eK7_382VMnNSrl0lvGFDdI3w",
    authDomain: "theyarn-40c3b.firebaseapp.com",
    projectId: "theyarn-40c3b",
    storageBucket: "theyarn-40c3b.appspot.com",
    messagingSenderId: "729332277710",
    appId: "1:729332277710:web:85503337d3b13a5bf00b9f"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;