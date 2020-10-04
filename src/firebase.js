import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Nf5Gh7GqWCkr1bAxxQa8_Ejbpn45fqs",
  authDomain: "student-feedback-95cee.firebaseapp.com",
  databaseURL: "https://student-feedback-95cee.firebaseio.com",
  projectId: "student-feedback-95cee",
  storageBucket: "student-feedback-95cee.appspot.com",
  messagingSenderId: "734753389956",
  appId: "1:734753389956:web:d40b21ca1b218d614131d1",
  measurementId: "G-JMT2BN33EK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
