import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZtnRGxfK0KSuXiCco4jQcYKoeCEOpXHo",
  authDomain: "twitter-clone-9e2f4.firebaseapp.com",
  projectId: "twitter-clone-9e2f4",
  storageBucket: "twitter-clone-9e2f4.appspot.com",
  messagingSenderId: "49084635258",
  appId: "1:49084635258:web:f35c866d2a35e3b01983c3",
  measurementId: "G-CPPXS8YH6W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
