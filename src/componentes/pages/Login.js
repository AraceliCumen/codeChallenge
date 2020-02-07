import React, { Component } from 'react';
import '../../css/Login.css';

// import authFirebase from '../../FireStoreConfig';


class Login extends Component {

    state ={
        email: '',
        password: ''
    }

    onButtonClick = e => {
        // let promise = authFirebase.signInWithEmailAndPassword(this.state.email, this.state.password);
        // promise.catch(event => alert(event.message));

        // authFirebase.onAuthStateChanged(firebaseUser => {
        //     if (firebaseUser) {
        //       alert('Usted se ha logueado Correctamente');
        //       this.props.history.replace('/everis/list');
        //     } else {
        //       alert('usted no esta registrado');
        //     }
        //   });
    }

    onChangeUsername = e => {
        this.setState({
            userName: e.target.value,
        })
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value,
        })
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Login</h4>
                            <input type="text" id="email" onChange={this.onChangeUsername} className="form-control input-sm chat-input" placeholder="email" />
                            <br />
                            <input type="text" id="userPassword" onChange={this.onChangePassword}  className="form-control input-sm chat-input" placeholder="password" />
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
