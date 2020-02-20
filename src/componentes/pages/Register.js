import React, { Component } from 'react';

import TextField from './basic/Texfield';

import * as utils from '../utils';
import db from '../../FireStoreConfig';

class Register extends Component {

    state = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        estado: 1,
        errorEmail: '',
        errorPassword: '',
        errorUserName: '',
        errorFirstName: '',
        errorLastName: '',
        emailValido: false,
        passwordValido: false,
        userNameValido: false,
        firstNameValido: false,
        lastNameValido: false
    }

    onChangeUsername = e => {
        let userNameValido = this.validarUsername(e.target.value);
        if(userNameValido){
            this.setState({
                userName: e.target.value,
                userNameValido: true
            })
        }else{
            this.setState({
                userName: '',
                userNameValido: false
            })
        }

    }

    onBlurUsername(e){
        this.validarUsername(e.target.value);
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

    onChangeFirstName = e => {
        let firstNameValido = this.validarFirstName(e.target.value);
        if(firstNameValido){
            this.setState({
                firstName: e.target.value,
                firstNameValido: true
            })
        }else{
            this.setState({
                firstName: '',
                firstNameValido: false
            })
        }
    }

    onChangeLastName = e => {
        let lastNameValido = this.validarLastName(e.target.value);
        if(lastNameValido){
            this.setState({
                lastName: e.target.value,
                lastNameValido: true
            })
        }else{
            this.setState({
                lastName: '',
                lastNameValido: false
            })
        }
    }

    onChangeEmail = e => {
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

    validarUsername(valorUserName){
        let valido = false;
        if(valorUserName.trim().length > 0 ){
            this.setState({ errorUserName: MENSAJES_ERROR.SIN_ERROR });
            valido = true
        }else {
            this.setState({ errorUserName: MENSAJES_ERROR.ERROR_CAMPO_VACIO});
            valido = false
        } 
        return valido;
    }

    validarFirstName(valorFirstName){
        let valido = false;
        if(valorFirstName.trim().length > 0 ){
            this.setState({ errorFirstName: MENSAJES_ERROR.SIN_ERROR });
            valido = true
        }else {
            this.setState({ errorFirstName: MENSAJES_ERROR.ERROR_CAMPO_VACIO});
            valido = false
        } 
        return valido;
    }

    onBlurFirstName(e){
        this.validarFirstName(e.target.value);
    }

    validarLastName(valorLastName){
        let valido = false;
        if(valorLastName.trim().length > 0 ){
            this.setState({ errorLastName: MENSAJES_ERROR.SIN_ERROR });
            valido = true
        }else {
            this.setState({ errorLastName: MENSAJES_ERROR.ERROR_CAMPO_VACIO});
            valido = false
        } 
        return valido;
    }

    onBlurLastName(e){
        this.validarLastName(e.target.value);
    }

    validarUsername(valorUserName){
        let valido = false;
        if(valorUserName.trim().length > 0 ){
            this.setState({ errorUserName: MENSAJES_ERROR.SIN_ERROR });
            valido = true
        }else {
            this.setState({ errorPassword: MENSAJES_ERROR.ERROR_CAMPO_VACIO});
            valido = false
        } 
        return valido;
    }


    onButtonClickListar = e => {
        this.props.history.replace('/demo/list');
    }

    onButtonClick = e => {
        db.collection('users').add({
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            estado: this.state.estado
        }).then(() => {
            alert('agregado');
        }).catch(() => {
            alert('error al agregar');
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-md-6">
                        <div className="form-login">
                            <h4>Registrar</h4>
                            <br />
                            <div className="row">
                                <div className="col-md-5">
                                    <p>Nombre de Usuario:</p>
                                    <TextField type="text" id="userNameRegister" onChange={this.onChangeUsername} className="form-control input-sm chat-input" placeholder="username" error={this.state.errorUserName} />
                                </div>

                                <div className=" offset-1 col-md-5">
                                    <p>Password:</p>
                                    <TextField type="password" id="userPassword" onChange={this.onChangePassword} onblur={this.onBlurPasswword} className="form-control input-sm chat-input" placeholder="password" type="password" error={this.state.errorPassword} />
                                </div>
                            </div>

                            <br />
                            <p>Nombre:</p>
                            <TextField type="text" id="firstName" onChange={this.onChangeFirstName} onblur={this.onBlurFirstName} className="form-control input-sm chat-input" placeholder="firstName" error={this.state.errorFirstName} />
                            <br />
                            <p>Apellidos:</p>
                            <TextField type="text" id="lastName" onChange={this.onChangeLastName} onblur={this.onBlurLastName} className="form-control input-sm chat-input" placeholder="lastName" error={this.state.errorLastName} />
                            <br />
                            <p>Email:</p>
                            <TextField type="email" id="email" onChange={this.onChangeEmail} onblur={this.onBlurCorreo} className="form-control input-sm chat-input" placeholder="email" error={this.state.errorEmail} />
                            <br />
                            <div className="wrapper">
                                <span className="group-btn">
                                    <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClick}>Registrar</button>
                                </span>

                                <span className="group-btn">
                                    <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClickListar}>Listar</button>
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


const MENSAJES_ERROR = {
    SIN_ERROR: '',
    ERROR_CORREO_NO_VALIDO: 'Ingresa un correo válido',
    ERROR_CORREO_VACIO: 'Ingresa un Correo electrónico.',
    ERROR_PASSWORD_NO_VALIDO: 'Ingrese Password Válido',
    ERROR_PASSWORD_VACIO: 'Ingrese un Password',
    ERROR_CAMPO_VACIO: 'Ingrese valor para el campo'
}