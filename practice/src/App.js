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
}*/

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





