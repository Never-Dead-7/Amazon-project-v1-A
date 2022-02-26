import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxMye8svoPbIYgs5D3rMXft1wkK5aCkgQ",
    authDomain: "project-v1a.firebaseapp.com",
    projectId: "project-v1a",
    storageBucket: "project-v1a.appspot.com",
    messagingSenderId: "404861589995",
    appId: "1:404861589995:web:6a73fba156ebecdd0ae1ae",
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore();
export const auth =  firebase.auth();
