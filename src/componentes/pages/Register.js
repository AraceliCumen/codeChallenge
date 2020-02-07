import React, {Component} from 'react';
// import '../../css/Register.css';

import * as utils from '../utils';

class Register extends Component {

    state ={
        username: '',
        password: '',
        firstName : '',
        lastName: '',
        email: '',
        estado: '',
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value,
        })
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value,
        })
    }

    onChangeFirstName = e => {
        this.setState({
            firstName: e.target.value,
        })
    }

    onChangeLastName = e => {
        this.setState({
            lastName: e.target.value,
        })
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value,
        })
    }

    onChangeEstado = e => {
        this.setState({
            estado: e.target.value,
        })
    }

    onButtonClick = e => {
        const {}
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Registrar</h4>
                            <br />
                            <p>Nombre de Usuario:</p>
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
                            <p>Estado:</p>
                            <input type="text" id="estado" className="form-control input-sm chat-input" placeholder="estado" />
                            <br />
                            <div className="wrapper">
                                <span className="group-btn">
                                <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClick}>Registrar</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;