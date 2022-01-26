import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUswAa4kNXTdhawqxUEJ-jbnUwL_jGWtY",
  authDomain: "react-contact-form-b134b.firebaseapp.com",
  databaseURL: "https://react-contact-form-b134b-default-rtdb.firebaseio.com",
  projectId: "react-contact-form-b134b",
  storageBucket: "react-contact-form-b134b.appspot.com",
  messagingSenderId: "814068586217",
  appId: "1:814068586217:web:334843eba774340fd40278",
});

var db = firebaseApp.firestore();

export { db };
