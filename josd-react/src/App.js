import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navibar';
import Login from './components/Login';
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


function App() {
  return (
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/reg" component={Register}></Route>
        </Router>
      </React.Fragment>
    
  );
}

export default App;
