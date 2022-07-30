// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTR9BtsZioiQpRPZR-TP1kP0FooPEpn4Q",
  authDomain: "clone-f5ef5.firebaseapp.com",
  projectId: "clone-f5ef5",
  storageBucket: "clone-f5ef5.appspot.com",
  messagingSenderId: "174368864958",
  appId: "1:174368864958:web:a1224cea9200ba93fbfcef",
  measurementId: "G-H2S39DEC4P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };