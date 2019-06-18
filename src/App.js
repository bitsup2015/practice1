import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  firebase from './firebase_config';
import LoginForm from './Pages/LoginPage/Login';
import RegisterForm from './Pages/RegisterPage/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={LoginForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
      </Router>
    );
  }
}
export default App;
