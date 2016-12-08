import React, { Component } from 'react';
import Rating from 'react-rating';
import './SearchRow.css';
import $ from 'jquery';

var resultStyle = {
    overflowY: "auto",
    maxHeight: "800px"
}

var hrStyle = {
    display: "block",
    marginTop: "5px",
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "inset",
    borderWidth: "1px"
}

var restaurantTagStyle = {
    "marginBottom": "10px"
}

var restId;

class SearchRow extends Component {

    handleOnClick = (e) => {
        this.props.onClick(restId);
    }

    render () {
        var resultArray = [];
        if (this.props.search != null) {
            for (var i = 0; i < this.props.search.length; i++) {
                resultArray.push($.map(this.props.search[i], function(value, index){
                   return [value];
                }));
            }
        }
        var commentNodes = resultArray.map(function(searchs) {
            console.log(searchs);
            function handleOnClick(e) {
                restId = e.target.parentNode.parentNode.parentNode.childNodes[0].textContent;
                e.preventDefault();
            }
            return (
                <div key={searchs[0]}>
                    <div className="row" style={restaurantTagStyle}>
                        <div className="col-lg-8" id="DataContainer">
                            <p id="restId" hidden>{searchs[0]}</p>
                            <a onClick={handleOnClick} href="#"><h5><strong>{searchs[3]}</strong></h5></a>
                            <Rating id="rating" readonly={true} initialRate={searchs[7]}/>
                            <p>{searchs[4]}</p>
                            <p>{searchs[9]}</p>
                        </div>
                        <div className="col-lg-4">
                            <img id="imageRest" src={"http://159.203.191.142:8080/images/restaurants/"+searchs[2]} />
                        </div>
                    </div>
                    <div className="row">
                        <hr style= {hrStyle}/>
                    </div>
                </div>
            );
        });
        return (
            <div id="fontTest" onClick={this.handleOnClick} className="row scrollbar" style={resultStyle}>
                {commentNodes}
            </div>
        );
    }
}

export default SearchRow;