import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './Pages/LoginPage/Login';
import RegisterForm from './Pages/RegisterPage/Register';
import firebase from './firebaseConnect';
import './App.css';
import HomeForm from './Pages/HomePage/Home';

class App extends Component {

  render() {
    return (
      <Router>
          <Route exact path="/" component={() => <HomeForm db={firebase}/>}></Route>
          <Route exact path="/home" component={() => <HomeForm db={firebase}/>}></Route>
          <Route path="/login" component={() => <LoginForm db={firebase}/>}></Route>
          <Route path="/register" component={() => <RegisterForm db={firebase}/>}></Route>
      </Router>
    );
  }
}
export default App;
