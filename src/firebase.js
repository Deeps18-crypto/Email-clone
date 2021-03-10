import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwlw-1U88GyX2pvwRX5dRiy9mf9nGfgk8",
  authDomain: "deepak--clone.firebaseapp.com",
  projectId: "deepak--clone",
  storageBucket: "deepak--clone.appspot.com",
  messagingSenderId: "969765579620",
  appId: "1:969765579620:web:04b618bb4adaf8c284e871",
  measurementId: "G-P98QHCK2RV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
