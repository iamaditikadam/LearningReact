import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCWiL_SJek3svXvDayW4zupNA6GOgMPvOg",
  authDomain: "chatbot-a16ef.firebaseapp.com",
  projectId: "chatbot-a16ef",
  storageBucket: "chatbot-a16ef.appspot.com",
  messagingSenderId: "864819028037",
  appId: "1:864819028037:web:b0e830c42102fe6ab8c32c",
  measurementId: "G-S17FXWR5N0"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef  = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <>
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id } message={msg} /> )}

    </div>
    </>
  )

}

function ChatMessage(props) {
  const {text, uid} = props.message;
  
  return <p>{text}</p>

}
export default App;
