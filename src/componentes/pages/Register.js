import React, {Component} from 'react';
import './Register.css';

function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-5 col-md-3">
                    <div className="form-login">
                        <h4>Register</h4>
                        <br />
                        <p>User Name:</p>
                        <input type="text" id="userNameRegister" className="form-control input-sm chat-input" placeholder="username" />
                        <br />
                        <p>Password:</p>
                        <input type="text" id="userPasswordRegister" className="form-control input-sm chat-input" placeholder="password" />
                        <br />
                        <p>FirstName:</p>
                        <input type="text" id="firstName" className="form-control input-sm chat-input" placeholder="firstName" />
                        <br />
                        <p>LastName:</p>
                        <input type="text" id="lastName" className="form-control input-sm chat-input" placeholder="lastName" />
                        <br />
                        <p>Email:</p>
                        <input type="text" id="email" className="form-control input-sm chat-input" placeholder="email" />
                        <br />
                        <div className="wrapper">
                            <span className="group-btn">
                                <a href="#" className="btn btn-primary btn-md">Register <i className="fa fa-sign-in" /></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;