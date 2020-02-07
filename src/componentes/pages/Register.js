import React, {Component} from 'react';
// import '../../css/Register.css';

function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-5 col-md-3">
                    <div className="form-login">
                        <h4>Registrar</h4>
                        <br />
                        <p>Nombre de Usurio:</p>
                        <input type="text" id="userNameRegister" className="form-control input-sm chat-input" placeholder="username" />
                        <br />
                        <p>Password:</p>
                        <input type="text" id="userPasswordRegister" className="form-control input-sm chat-input" placeholder="password" />
                        <br />
                        <p>Nombres:</p>
                        <input type="text" id="firstName" className="form-control input-sm chat-input" placeholder="firstName" />
                        <br />
                        <p>Apellidos:</p>
                        <input type="text" id="lastName" className="form-control input-sm chat-input" placeholder="lastName" />
                        <br />
                        <p>Email:</p>
                        <input type="text" id="email" className="form-control input-sm chat-input" placeholder="email" />
                        <br />
                        <div className="wrapper">
                            <span className="group-btn">
                                <a href="#" className="btn btn-primary btn-md">Registrar <i className="fa fa-sign-in" /></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;