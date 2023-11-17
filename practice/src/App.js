/*function MyButton(){
  return(
    <button>Hit me {2+2}</button>
  );
}

const products = [
  {title: 'Apple',isFruit:true, id:1},
  {title: 'Mango',isFruit:true, id:2},
  {title: 'Onion',isFruit:false, id:3}

]

export default function App(){
  /*return(
    <div>
       <p>Building with React</p>
        <MyButton />
    </div>
  );



  
  const ListItems = products.map(product =>
    <li key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}> 
        {product.title}
      </li>
    );
  
  return(
      <ul>{ListItems}</ul>
    );
}

export default function MyButton(){
  function handleClick(){
    alert('You clicked me!');
  }

  return(
    <button onClick={handleClick}>
      click me
    </button>
  )
}

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

import "./App.css";
//import Header from "./Header";
//import Footer from "./Footer";
import Props from "./Props";


export default function App(){
  return(
    <div className="App">
      <h1>Introducing Props </h1>
      <Props />
      <Props />
      <Props />
    </div>
  )
}

import "./App.css";

function App(){

  /*function showAlert()
  {
    alert("Showing an alert");
  }

  const onTextChange = () => {
    console.log("Onchange event is triggered")
  }

  return(
    <div className="App"> 
      { /* <button onClick={showAlert}>Click me</button> */
      /*<input onChange={onTextChange} />

    </div>
  )

}

export default App;*/

import "./App.css";
import { signInWithGoogle } from "./firebase";

function App() {
  return <div className="App">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
  </div>
}


export default App;




