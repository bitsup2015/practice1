import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
    return (
        <div className="loginWrap">
            <form onSubmit={this.handleSubmit} className="loginForm">
                <label className="loginTitle">Login</label>
                <label htmlFor="userName" className="loginFromLabel">Username</label>
                <input className="loginFormInput" type="text" id="userName" name="userName"  value={this.state.userName}  onChange={this.handleChange} placeholder="Enter your username" />
                <label htmlFor="password" className="loginFromLabel">Password</label>
                <input className="loginFormInput" type="text" id="password" name="password" value={this.state.password}  onChange={this.handleChange} placeholder="Enter your password" />
                <button className="loginFormButton">Sign In</button>
                <a className="loginFormLink" href="/register">Register</a>
            </form>
        </div>
    );
}
}

export default Login;
