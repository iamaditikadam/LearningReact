import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCWiL_SJek3svXvDayW4zupNA6GOgMPvOg",
    authDomain: "chatbot-a16ef.firebaseapp.com",
    projectId: "chatbot-a16ef",
    storageBucket: "chatbot-a16ef.appspot.com",
    messagingSenderId: "864819028037",
    appId: "1:864819028037:web:b0e830c42102fe6ab8c32c",
    measurementId: "G-S17FXWR5N0"
  })

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };

