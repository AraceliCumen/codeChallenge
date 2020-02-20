import React, { Component } from 'react';

class Texfield extends Component {
    render() {

        let htmlError = '';
        if(this.props.error !== '' && this.props.error !== undefined){
            htmlError = <div className="alert alert-danger" role="alert">
                            {this.props.error}
                        </div>
        }

        console.log(this.props.error)
        return (
            <div>
                <input type={this.props.type} id={this.props.id} onChange={this.props.onChange} onBlur={this.props.onBlur} className="form-control input-sm chat-input" placeholder={this.props.placeholder} />
                {htmlError}
            </div>
        );
    }

}

export default Texfield;