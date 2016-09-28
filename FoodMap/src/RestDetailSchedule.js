import React, { Component } from 'react';

class RestDetailSchedule extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Horario regular</strong>
                </div>
                <div className="col-lg-9">
                {this.props.Schedule}
            </div>
            </div>
            );
    }
}

export default RestDetailSchedule;