import React, { Component } from 'react';
import StarRating from 'react-star-rating';
class RestDetailRating extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <strong>Rating</strong>
                </div>
                <div className="col-lg-9">
                <StarRating name="react-star-rating" size={20} rating={this.props.rat} editing={false}/>
                </div>
            </div>
            );
    }
}

export default RestDetailRating;