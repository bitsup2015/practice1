import React, { Component } from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props)

        this.db = props.db;
        this.state = {
            currentUser: this.db.auth().currentUser,
            logOut: false
        }

        this.signOut = this.signOut.bind(this);
    }

    signOut(e) {
        e.preventDefault();
        
        this.db.auth().signOut().then(() => {
            this.setState({logOut: true});
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {
        if(!this.state.currentUser || this.state.logOut) {
            return <Redirect to='/login' />;
        } else {
            return (
                <div className="homeWrap">
                    <h5 className="title">Hi! BitsUp developers</h5>
                    <button className="logOutButton" onClick={this.signOut}>Log out</button>
                </div>
            );
        }
    }
}

export default Home;
