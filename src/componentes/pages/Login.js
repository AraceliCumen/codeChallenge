import React, { Component } from 'react';

import TextField from './basic/Texfield';

import '../../css/Login.css';

import * as utils from '../utils';

// import authEveris from '../../FireStoreConfig';

import db from '../../FireStoreConfig';


class Login extends Component {

    state ={
        email: '',
        password: '',
        errorCorreo: '',
        errorPassword: ''
    }

    onButtonClick = e => {
        db.collection('users').get().then((snapShots) => {
            let result = snapShots.docs.find(doc => doc.data().email === this.state.email && doc.data().password ===  this.state.password);
            if(result === undefined){
                alert('usuario no registrado!!');
            }else {
                alert('Bienvenido');
                this.props.history.replace('/demo/list');
            }
        }, error => {
            console.log(error);
        });
    }

    onChangeUsername = e => {
        this.setState({
            email: e.target.value,
        })
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value,
        })
    }

    onBlurCorreo(e) {
        this.validarCorreo(this.state.email);
    }

    validarCorreo(valorCorreo) {
        let valido = false;
        if (valorCorreo.trim().length > 0 && utils.validaCorreo(valorCorreo)) {
          this.setState({ errorCorreo: MENSAJES_ERROR.SIN_ERROR });
          valido = true
        } else if (valorCorreo === '') {
          this.setState({ errorCorreo: MENSAJES_ERROR.ERROR_CORREO_VACIO });
          valido = false
        } else {
          this.setState({ errorCorreo: MENSAJES_ERROR.ERROR_CORREO_NO_VALIDO });
          valido = false
        }
        return valido;
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Login</h4>
                            <TextField type="text" id="email" onChange={this.onChangeUsername}  onblur={this.onBlurCorreo} className="form-control input-sm chat-input" placeholder="email" error={this.props.errorCorreo}/>
                            <br />
                            <TextField type="password" id="userPassword" onChange={this.onChangePassword}   className="form-control input-sm chat-input" placeholder="password" type="password" error={this.props.errorPassword}/>
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
    ERROR_CORREO_VACIO: 'Ingresa un Correo electrónico.'
  }
  

export default Login;


