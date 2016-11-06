import React, { Component } from 'react';
import Rating from 'react-rating';
import './SearchRow.css';
import $ from 'jquery';

class SearchRow extends Component {
    render () {
        console.log(this.props.search);
        var rowArray = $.map(this.props.search, function(value, index){
           return [value];
        });
        var commentNodes = rowArray.map(function(searchs) {
        return (
            <div>
                {searchs}
            </div>
            );
        });
        return (
            <div id="fontTest" className="row">
                <div className="col-lg-8" id="DataContainer">
                    {commentNodes}
                </div>
                <div className="col-lg-4">
                    <img id="imageRest" src="https://pbs.twimg.com/profile_images/501458165867638784/h795n4ks.jpeg" />
                </div>
            </div>
        );
    }
}

export default SearchRow;