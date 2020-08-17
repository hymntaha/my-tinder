import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Switch>
          <Router path="/chat">

          </Router>
          <Router path="/">

          </Router>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
