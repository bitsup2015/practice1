import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            toHome: false
        };

        this.db = props.db;
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }
    
    signIn(e) {
        e.preventDefault();
        this.setState({email: 'tbeta40@gmail.com', password: 'Test1234'});
        this.db.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({toHome: true});
            }).catch(function(error) {
                console.log(error);
            }
        );
    }

    render() {
        if (this.state.toHome) {
            return <Redirect to='/home'/>;
        } else {
            return (
                <div className="loginWrap">
                    <form className="loginForm">
                        <label className="loginTitle">Login</label>
                        <label htmlFor="email" className="loginFromLabel">Email</label>
                        <input className="loginFormInput" type="text" id="email" name="email"  value={this.state.email}  onChange={this.changeEmail} placeholder="Enter your email" />
                        <label htmlFor="password" className="loginFromLabel">Password</label>
                        <input className="loginFormInput" type="text" id="password" name="password" value={this.state.password}  onChange={this.changePassword} placeholder="Enter your password" />
                        <button className="loginFormButton" onClick={this.signIn}>Sign In</button>
                        <a className="loginFormLink" href="/register">Register</a>
                    </form>
                </div>
            );
        }
    }
}

export default Login;
