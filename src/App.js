import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import LoginForm from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
        <Route exact path="/" component={LoginForm}>
              </Route>

    </div>
      </Router>
    );
  }
}
export default App;
