
import './App.css';

const App = () => {
  const name = 'Ken';
  const isNameShowing = false;

  return (
    <div className="App">
     <h1>Hello, {isNameShowing ? name : 'something' }</h1>
  
    </div>
  );
}

export default App;
