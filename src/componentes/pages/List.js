import React, { Component } from 'react';
import '../../css/List.css';

import db from '../../FireStoreConfig';


class List extends Component {

    state = {
        items: []
    }

    componentDidMount(){
        db.collection('users').get().then((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc => {
                    console.log(doc.data());
                })
            })
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