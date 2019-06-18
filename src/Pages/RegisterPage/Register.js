import React, { Component } from 'react';
import './Register.css';
class Register extends Component {
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
        <div className="registerWrap">
            <form onSubmit={this.handleSubmit} className="registerForm">
                <label className="registerTitle">Register</label>
                <label htmlFor="userName" className="registerFromLabel">Username</label>
                <input className="registerFormInput" type="text" id="userName" name="userName"  value={this.state.userName}  onChange={this.handleChange} placeholder="Enter your username" />
                <label htmlFor="password" className="registerFromLabel">Password</label>
                <input className="registerFormInput" type="text" id="password" name="password" value={this.state.password}  onChange={this.handleChange} placeholder="Enter your password" />
                <button className="registerFormButton">Register</button>
            </form>
        </div>
    );
}
}

export default Register;
