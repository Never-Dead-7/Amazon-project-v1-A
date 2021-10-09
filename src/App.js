import React from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import  Checkbox from './Checkbox.js'  


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
             <Route path="/Checkbox">
                <Header />
                <Checkbox />
             </Route>
          <Route path="/">
             <Header />
             <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
