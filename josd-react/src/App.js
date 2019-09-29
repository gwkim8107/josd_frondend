import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navibar';
import Login from './components/Login';
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ErrorNotFound from './components/ErrorNotFound'
import ResetPassword from './components/ResetPassword'
import ScrollDemo from './components/ScrollDemo'
import Main from './components/Main'
import Reading from './components/Reading'
import CommonContextProvider from './contexts/CommonContext'
import Calendar from './components/Calendar'


function App() {
  return (
      <React.Fragment>
        <Router>
            <Navbar></Navbar>
            <CommonContextProvider>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/reg" component={Register}></Route>
              <Route path="/resetpw" component={ResetPassword}></Route>
              <Route path="/demo" component={ScrollDemo}></Route>
              <Route path="/home/:user_id/:rec_dt" component={Main}></Route>
              <Route path="/reading" component={Reading}></Route>
              <Route path="/calendar" component={Calendar}></Route>
              {/* add 404 page */}
              <Route path="*" component={ErrorNotFound}></Route>
            </Switch>
            </CommonContextProvider>
        </Router>
        
      </React.Fragment>
    
  );
}
export default App;
