import React, { Component } from 'react';
// import StarRating from 'react-star-rating';
import Rating from 'react-rating';
class RestDetailRating extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Rating</strong>
                </div>
                <div className="col-lg-9">
                <Rating readonly={true} initialRate={Number(this.props.rat)}/>
                </div>
            </div>
            );
    }
}

export default RestDetailRating;