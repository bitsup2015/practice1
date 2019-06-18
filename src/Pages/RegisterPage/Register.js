import React, { Component } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            toLogin: false
        };

        this.db = props.db;
        this.register = this.register.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    register(e) {
        e.preventDefault();

        this.db.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({toLogin: true});
            }).catch(function(error) {
                console.log(error);
            }
        );
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        if (this.state.toLogin) {
            return <Redirect to='/login' />;
        } else {
            return (
                <div className="registerWrap">
                    <form className="registerForm">
                        <label className="registerTitle">Register</label>
                        <label htmlFor="email" className="registerFromLabel">Email</label>
                        <input className="registerFormInput" type="text" name="email"  value={this.state.email}  onChange={this.changeEmail} placeholder="Enter your email" />
                        <label htmlFor="password" className="registerFromLabel">Password</label>
                        <input className="registerFormInput" type="text" id="password" name="password" value={this.state.password}  onChange={this.changePassword} placeholder="Enter your password" />
                        <button className="registerFormButton" onClick={this.register}>Register</button>
                    </form>
                </div>
            );
        }
    }
}

export default Register;
