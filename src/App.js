import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import Nav from './components/nav';
import  About from './components/About';
import Shop from './components/Shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

function App() {
  return (
    <Router >
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;


//5e3de4dc-ddb53e76-a344b7eb-3a4b922b