import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBv0RAg_KjsMWLoySjlb9OHpRj4-9X064g",
    authDomain: "trial-7ef0b.firebaseapp.com",
    projectId: "trial-7ef0b",
    storageBucket: "trial-7ef0b.appspot.com",
    messagingSenderId: "834744248289",
    appId: "1:834744248289:web:50dbd7e4998dbc24e414a0",
    measurementId: "G-VS7JY865PQ"
  };

  // Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export default firebase;