import React from 'react'
import './App.css';
import Body from './components/body';
import Nav from './components/nav';
import Bodytwo from './components/bodytwo';
import  About from './pages/About';
import Shop from './pages/Shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/homeMain';




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

const Home = () => (
  <div className="heading">
    <Main />
    <Body />
    <Bodytwo />
  </div>
);

export default App;


//5e3de4dc-ddb53e76-a344b7eb-3a4b922b