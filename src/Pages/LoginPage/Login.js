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
        <div className="Login">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="userName">Username</label>
                <input type="text" id="userName" name="userName"  value={this.state.userName}  onChange={this.handleChange} placeholder="enter your username" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={this.state.password}  onChange={this.handleChange} placeholder="enter your password" />
                <button>Sign In</button>
            </form>
        </div>
    );
}
}

export default Login;
