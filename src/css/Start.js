import React, { Component } from 'react';
import './Start.css';

class Start extends Component {

    onButtonClickIniciar = e => {
        
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Bienvenidos</h4>
                            <div className="wrapper">
                                <span className="group-btn">
                                <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClickIniciar}>Iniciar Sesion<i className="fa fa-sign-in" /></button>
                                </span>
                                <span className="group-btn">
                                <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClickRegistrar}>Registrar<i className="fa fa-sign-in" /></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Start;
