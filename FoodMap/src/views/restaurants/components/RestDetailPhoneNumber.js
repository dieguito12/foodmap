import React, { Component } from 'react';

class RestDetailPhoneNumber extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Telefono(s)</strong>
                </div>
                <div className="col-lg-9">
                <a href={"callto: " + this.props.Phone}>{this.props.Phone}</a>
                </div>
            </div>
            );
    }
}

export default RestDetailPhoneNumber;