// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDbCfSkFEBV_byMcVW9aFjGTCQLyVkKecY",
  authDomain: "basic-crud-21f64.firebaseapp.com",
  projectId: "basic-crud-21f64",
  storageBucket: "basic-crud-21f64.appspot.com",
  messagingSenderId: "109021410870",
  appId: "1:109021410870:web:b3144753e892ffffd5ca97",
  measurementId: "G-SGH5HP3K0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    } )
}

