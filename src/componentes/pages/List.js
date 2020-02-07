import React, { Component } from 'react';
import '../../css/List.css';

import db from '../../FireStoreConfig';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class List extends Component {

    state = {
        columnDefs: [{
            headerName: "UserName", field: "userName", checkboxSelection: true, sortable: true, filter: true
        }, {
            headerName: "Password", field: "password"
        }, {
            headerName: "FirstName", field: "firstName"
        }, {
            headerName: "LastName", field: "lastName"
        }, {
            headerName: "Email", field: "email"
        },{
            headerName: "Estado", field: "estado"
        },{
            headerName: "Editar", field: "editar"
        },{
            headerName: "Eliminar", field: "eliminar"
        }],
        rowData: []
    }


    componentDidMount() {

        let rowData = [];

        db.collection('users').get().then((snapShots) => {
            snapShots.docs.map(doc => {
                let rowDataEjemplo = {
                    userName: '', password: '', firstName: '', lastName: '', email: '', estado : '', editar: 'editar' , eliminar: 'eliminar'
                };
                rowDataEjemplo.userName = doc.data().userName;
                rowDataEjemplo.password = doc.data().password;
                rowDataEjemplo.firstName = doc.data().firstName;
                rowDataEjemplo.lastName = doc.data().lastName;
                rowDataEjemplo.email = doc.data().email;
                rowDataEjemplo.estado = doc.data().estado;
                rowData.push(rowDataEjemplo);
            });

        
            this.setState({
                rowData: rowData
            });

        }, error => {
            console.log(error);
        });
    }

    onButtonClickEditar = e => {
        
    }

    onButtonClickEliminar = e => {
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-login">
                            <h4>List Users</h4>
                            <div
                                className="ag-theme-balham"
                                style={{
                                    height: '500px',
                                    width: '100%'
                                }}
                            >
                                <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClickEditar}>Editar</button>
                                
                                <button className="btn btn-primary btn-md margin10" onClick={this.onButtonClickEliminar}>Eliminar</button>
                                <br />
                                <AgGridReact
                                    columnDefs={this.state.columnDefs}
                                    rowData={this.state.rowData} rowSelection="multiple">
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default List;