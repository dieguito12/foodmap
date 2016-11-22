import React, { Component } from 'react';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

var formStyle = {
    marginTop: '-0.3px'
}

var distanceArray = [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]
var ratingArray = [0,1,2,3,4,5]

var baseEndpoint = 'http://159.203.191.142:8080/';

class FilterTags extends Component {

    render() {
        var TagArray
        if(this.props.filter.distance == 1) {
            TagArray = distanceArray.map(function(value) {
                return (
                    <div key={value.toString()} className="chip">
                        <a>{value} Km</a>
                        <i className="close material-icons">close</i>
                     </div>
                );
            });
        }
        if(this.props.filter.rating == 1) {
            TagArray = ratingArray.map(function(value) {
                return (
                    <div key={value.toString()} className="chip">
                        <a>Rating > {value}</a>
                        <i className="close material-icons">close</i>
                     </div>
                );
            });
        }
        return(
            <div>
                {TagArray}
            </div>
        );
    }
}

export default FilterTags;