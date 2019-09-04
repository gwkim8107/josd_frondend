import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navibar';
import Login from './components/Login';
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ErrorNotFound from './components/ErrorNotFound'

function App() {
  return (
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/reg" component={Register}></Route>
            {/* add 404 page */}
            <Route path="*" component={ErrorNotFound}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    
  );
}

export default App;
