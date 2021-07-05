
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD53HJkrcsSP3gzcdZhSk5n4-qXBJmpzkk",
    authDomain: "chat-react-c652e.firebaseapp.com",
    projectId: "chat-react-c652e",
    storageBucket: "chat-react-c652e.appspot.com",
    messagingSenderId: "58379288822",
    appId: "1:58379288822:web:3538a6d9fc86225531acd7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}