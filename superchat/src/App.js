import React, { useState } from 'react';

import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


import { useAuthState} from 'react-firebase-hooks/auth';
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
      <header>
        <h1> Welcome to SuperChat</h1>
        <SignOut />
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

  const [formValue, setFormValue ] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

     await messagesRef.add({
      text:formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
     })

     setFormValue('')
  }

  return (
    <>
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id } message={msg} /> )}

      <form>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button type="submit">hello</button>
      </form>
    
    </div>
    </>
  )

}

function ChatMessage(props) {
  const {text, uid,photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
  return (
    <div className={`message ${messageClass}`}>
      <img src = {photoURL} />
      <p>{text}</p>
    </div>
  )
}
export default App;
