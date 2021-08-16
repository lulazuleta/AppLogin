import firebase from "firebase";
import 'firebase/firebase-auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX40XEAhD_E3y96JenPMY3S5RgbjEEdrk",
    authDomain: "probandoreact-989a6.firebaseapp.com",
    projectId: "probandoreact-989a6",
    storageBucket: "probandoreact-989a6.appspot.com",
    messagingSenderId: "273246130691",
    appId: "1:273246130691:web:b234a792f67f5060e83436"
  };
  // Initialize Firebase
  const firebd = firebase.initializeApp(firebaseConfig);
  const auth = firebd.auth()

  export {auth};