
import React from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import home from "./pages/home";
const App = () => {
  

  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
      <Route exact path="/" component={home} />
     </Switch>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
