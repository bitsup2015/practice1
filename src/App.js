import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './Pages/LoginPage/Login';
import RegisterForm from './Pages/RegisterPage/Register';
import firebase from './firebaseConnect';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
          <Route exact path="/" component={LoginForm}></Route>
          <Route path="/login" component={() => <LoginForm/>}></Route>
          <Route path="/register" component={() => <RegisterForm db={firebase}/>}></Route>
      </Router>
    );
  }
}
export default App;
