import React, { Component } from 'react';

class RestDetailRating extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Rating</strong>
                </div>
                <div className="col-lg-9">
                {this.props.rat}
                </div>
            </div>
            );
    }
}

export default RestDetailRating;