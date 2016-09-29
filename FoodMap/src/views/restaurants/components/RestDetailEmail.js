import React, { Component } from 'react';

class RestDetailEmail extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>E-mail</strong>
                </div>
                <div className="col-lg-9">
                {this.props.Email}
                </div>
            </div>
            );
    }
}

export default RestDetailEmail;