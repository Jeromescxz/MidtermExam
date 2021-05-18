import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDOWKxREroS4PEFdJ9EvRcmeGGVxJ-m3L8",
  authDomain: "midtermexam-7b814.firebaseapp.com",
  projectId: "midtermexam-7b814",
  storageBucket: "midtermexam-7b814.appspot.com",
  messagingSenderId: "57284758354",
  appId: "1:57284758354:web:01c56b9e3df0cf3a4f088b",
  measurementId: "G-P3X06699G8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
