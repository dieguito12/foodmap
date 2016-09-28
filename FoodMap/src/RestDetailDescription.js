import React, { Component } from 'react';


class RestDetailDescription extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Descripcion</strong>
                </div>
                <div className="col-lg-9">
                {this.props.descr}
                </div>
            </div>
            );
    }
}

export default RestDetailDescription;