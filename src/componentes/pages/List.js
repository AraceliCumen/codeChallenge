import React, { Component } from 'react';
import '../../css/List.scss';

import db from '../../FireStoreConfig';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class List extends Component {

    state = {
        columnDefs: [{
            headerName: "IdUser", field: "idUser", checkboxSelection: true, sortable: true, filter: true
        }, {
            headerName: "UserName", field: "userName", sortable: true, filter: true
        }, {
            headerName: "Password", field: "password"
        }, {
            headerName: "FirstName", field: "firstName"
        }, {
            headerName: "LastName", field: "lastName"
        }, {
            headerName: "Email", field: "email"
        }, {
            headerName: "Estado", field: "estado"
        }, {
            headerName: "Editar", field: "editar"
        }, {
            headerName: "Eliminar", field: "eliminar"
        }],
        rowData: []
    }


    componentDidMount() {

        let rowData = [];

        db.collection('users').get().then((snapShots) => {
            snapShots.docs.map(doc => {
                let rowDataEjemplo = {
                    idUser: '', userName: '', password: '', firstName: '', lastName: '', email: '', estado: '', editar: 'editar', eliminar: 'eliminar'
                };
                rowDataEjemplo.idUser = doc.id;
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
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => {
            db.collection("users").doc(node.idUser).delete().then(function () {
                alert('Usuario eliminado correctamente');
                this.props.history.replace('/demo');
            }).catch(function (error) {
                alert("Error eliminando usuario");
            });
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-login">
                            <h4>Lista de Usuarios</h4>
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
                                <AgGridReact onGridReady={params => this.gridApi = params.api}
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