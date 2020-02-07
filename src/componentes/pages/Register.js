import React, {Component} from 'react';
// import '../../css/Register.css';

import * as utils from '../utils';
import db from '../../FireStoreConfig';

class Register extends Component {

    state ={
        userName: '',
        password: '',
        firstName : '',
        lastName: '',
        email: '',
        estado: 1,
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

    onButtonClickListar = e => {
        this.props.history.replace('/everis/list');
    }

    onButtonClick = e => {
        db.collection('users').add({
            user:this.state,
        }).then(()=>{
            alert('agregado');
        }).catch(()=>{
            alert('error al agregar');
        })
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-5">
                        <div className="form-login">
                            <h4>Registrar</h4>
                            <br />
                            <p>Nombre de Usuario:</p>
                            <input type="text" id="userNameRegister" onChange={this.onChangeUsername} className="form-control input-sm chat-input" placeholder="username" />
                            <br />
                            <p>Password:</p>
                            <input type="text" id="userPasswordRegister" onChange={this.onChangePassword} className="form-control input-sm chat-input" placeholder="password"  type="password"/>
                            <br />
                            <p>Nombres:</p>
                            <input type="text" id="firstName" onChange={this.onChangeFirstName} className="form-control input-sm chat-input" placeholder="firstName" />
                            <br />
                            <p>Apellidos:</p>
                            <input type="text" id="lastName" onChange={this.onChangeLastName} className="form-control input-sm chat-input" placeholder="lastName" />
                            <br />
                            <p>Email:</p>
                            <input type="text" id="email" onChange={this.onChangeEmail} className="form-control input-sm chat-input" placeholder="email" />
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