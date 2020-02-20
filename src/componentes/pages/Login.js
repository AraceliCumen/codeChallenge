import React, { Component } from 'react';

import TextField from './basic/Texfield';

import '../../css/Login.scss';

import * as utils from '../utils';

// import authEveris from '../../FireStoreConfig';

import db from '../../FireStoreConfig';


class Login extends Component {

    state = {
        email: '',
        password: '',
        errorEmail: '',
        errorPassword: '',
        emailValido: false,
        passwordValido: false,
    }

    onButtonClick = e => {
        if(this.state.emailValido && this.state.passwordValido){
            db.collection('users').get().then((snapShots) => {
                let result = snapShots.docs.find(doc => doc.data().email === this.state.email && doc.data().password === this.state.password);
                if (result === undefined) {
                    alert('usuario o contraseña incorrectos!!');
                } else {
                    alert('Bienvenido');
                    this.props.history.replace('/demo/list');
                }
            }, error => {
                console.log(error);
            });
        }else {
            alert('Revisar Campos ingresados')
        }

    }

    onChangeUsername = e => {
        let emailValido = this.validarCorreo(e.target.value);

        if (emailValido) {
            this.setState({
                email: e.target.value,
                emailValido: true
            })
        }else{
            this.setState({
                email: '',
                emailValido: false
            })
        }
    }

    onChangePassword = e => {
        let passwordValido = this.validarPassword(e.target.value);

        if(passwordValido){
            this.setState({
                password: e.target.value,
                passwordValido: true
            })
        }else{
            this.setState({
                password: '',
                passwordValido: false
            })
        }
    }

    onBlurCorreo(e) {
        this.validarCorreo(e.target.value);
    }

    validarCorreo(valorCorreo) {
        let valido = false;
        if (valorCorreo.trim().length > 0 && utils.validaCorreo(valorCorreo)) {
            this.setState({ errorEmail: MENSAJES_ERROR.SIN_ERROR });
            valido = true
        } else if (valorCorreo === '') {
            this.setState({ errorEmail: MENSAJES_ERROR.ERROR_CORREO_VACIO });
            valido = false
        } else {
            this.setState({ errorEmail: MENSAJES_ERROR.ERROR_CORREO_NO_VALIDO });
            valido = false
        }
        return valido;
    }

    onBlurPasswword(e) {
        this.validarPassword(e.target.value);
    }

    validarPassword(valorPassword) {
        let valido = false;
        if (valorPassword.trim().length > 0 && utils.validaPassword(valorPassword)) {
            this.setState({ errorPassword: MENSAJES_ERROR.SIN_ERROR });
            valido = true
        } else if (valorPassword === '') {
            this.setState({ errorPassword: MENSAJES_ERROR.ERROR_PASSWORD_VACIO });
            valido = false
        } else {
            this.setState({ errorPassword: MENSAJES_ERROR.ERROR_PASSWORD_NO_VALIDO });
            valido = false
        }
        return valido;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-md-5 col-md-3">
                        <div className="form-login">
                            <h4>Login</h4>
                            <TextField type="email" id="email" onChange={this.onChangeUsername} onblur={this.onBlurCorreo} className="form-control input-sm chat-input" placeholder="email" error={this.state.errorEmail} />
                            <br />
                            <TextField type="password" id="userPassword" onChange={this.onChangePassword} onblur={this.onBlurPasswword} className="form-control input-sm chat-input" placeholder="password" type="password" error={this.state.errorPassword} />
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


const MENSAJES_ERROR = {
    SIN_ERROR: '',
    ERROR_CORREO_NO_VALIDO: 'Ingresa un correo válido',
    ERROR_CORREO_VACIO: 'Ingresa un Correo electrónico.',
    ERROR_PASSWORD_NO_VALIDO: 'Ingrese Password Válido',
    ERROR_PASSWORD_VACIO: 'Ingrese un Password'
}


export default Login;


