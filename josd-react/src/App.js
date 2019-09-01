import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navibar';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Route path="/" component={Login}></Route>
        </Router>
      </React.Fragment>
    
  );
}

export default App;
