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
import Main from './components/Main'
import CommonContextProvider from './contexts/CommonContext'
import Calendar from './components/Calendar'
import ChantingChart from './components/ChantingChart'
import ChartTest from './components/ChartTest'


function App() {
  return (
      <React.Fragment>
        <Router>
            <Navbar/>
            <CommonContextProvider>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/reg" component={Register}></Route>
              <Route path="/resetpw" component={ResetPassword}></Route>
              {/* <Route path="/demo" component={ScrollDemo}></Route> */}
              <Route path="/home/:user_id/:rec_dt" component={Main}></Route>
              {/* <Route path="/chart/:user_id/" component={ChantingChart}></Route> */}
              <Route path="/chart/:user_id/" component={ChartTest}></Route>

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
