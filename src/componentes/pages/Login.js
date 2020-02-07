import React, { Component } from 'react';
import '../../css/Login.css';

import db from '../../FireStoreConfig';

class Login extends Component {

    onButtonClick = e => {
        
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Login</h4>
                            <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
                            <br />
                            <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
                            <br />
                            <div className="wrapper">
                                <span className="group-btn">
                                <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClick}>login<i className="fa fa-sign-in" /></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Login;
