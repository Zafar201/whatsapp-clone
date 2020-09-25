import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBfTEFc6WPQlLrjoBnHxumzo48Cyly3TYE",
  authDomain: "whatsapp-clone-76401.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-76401.firebaseio.com",
  projectId: "whatsapp-clone-76401",
  storageBucket: "whatsapp-clone-76401.appspot.com",
  messagingSenderId: "782217557551",
  appId: "1:782217557551:web:a70ebdc561d945807738da",
  measurementId: "G-9SFM834K1R"
};

const firebase = firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
const auth =firebase.auth()
const 