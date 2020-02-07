import React, { Component } from 'react';
import '../../css/Login.css';

// import authEveris from '../../FireStoreConfig';

import db from '../../FireStoreConfig';


class Login extends Component {

    state ={
        email: '',
        password: ''
    }

    onButtonClick = e => {
        var result = '';
        db.collection('users').get().then((snapShots) => {
            snapShots.docs.map(doc => {
                let email = doc.data().email;
                let password = doc.data().password;    
                if(email === this.state.email && password === this.state.password){
                    result = 'login correcto';
                    return this.props.history.replace('/everis/list');
                }else{
                    result = 'no se encuentran registros';
                }

            });
            alert(result);
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


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Login</h4>
                            <input type="text" id="email" onChange={this.onChangeUsername} className="form-control input-sm chat-input" placeholder="email" />
                            <br />
                            <input type="text" id="userPassword" onChange={this.onChangePassword}  className="form-control input-sm chat-input" placeholder="password" type="password" />
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
