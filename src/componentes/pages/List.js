import React, { Component } from 'react';
import '../../css/List.css';

import db from '../../FireStoreConfig';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class List extends Component {

    state = {
        columnDefs: [{
            headerName: "UserName", field: "userName"
          }, {
            headerName: "Password", field: "password"
          }, {
            headerName: "FirstName", field: "firstName"
          }, {
            headerName: "LastName", field: "lastName"
          }, {
            headerName: "Email", field: "email"
          }],
          rowData: []
    }

    


    componentDidMount(){

        let rowData = [];

        db.collection('users').get().then((snapShots)=>{
            snapShots.docs.map(doc => {
                let rowDataEjemplo = {
                    userName: '', password: '' , firstName: '', lastName: '', email : ''
                  };
                
                rowDataEjemplo.userName = doc.data().userName;
                rowDataEjemplo.password = doc.data().password;
                rowDataEjemplo.firstName = doc.data().firstName;
                rowDataEjemplo.lastName = doc.data().lastName;
                rowDataEjemplo.email = doc.data().email;
                rowData.push(rowDataEjemplo);
            });

            this.setState({
                rowData:  rowData
            });

        },error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-10">
                        <div className="form-login">
                            <h4>List Users</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default List;