import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyABqtKKagFPJ_8yVsN0vXBcCJjnptWCcGQ",
  authDomain: "dashboard-e5b12.firebaseapp.com",
  databaseURL: "https://dashboard-e5b12.firebaseio.com",
  projectId: "dashboard-e5b12",
  storageBucket: "dashboard-e5b12.appspot.com",
  messagingSenderId: "274676346304",
  appId: "1:274676346304:web:98382ea0b8f140c95b2c25",
  measurementId: "G-GJRQ2BK6WX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
