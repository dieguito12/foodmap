import React, { Component } from 'react';

class RestDetailAddress extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Direccion</strong>
                </div>
                <div className="col-lg-9">
                 {this.props.Add}
                 </div>
            </div>
            );
    }
}

export default RestDetailAddress;