import React, { Component } from 'react';
import Rating from 'react-rating';
import './SearchRow.css';

class SearchRow extends Component {
    render () {
        return (
            <div id="fontTest" className="row">
                <div className="col-lg-8">
                <p>Yao</p>
                <Rating id="rateRest"readonly={true} initialRate={5}/>
                <p id="colorFont">Direccion prueba</p>
                <p id="colorFont">Abierto todo los dias </p>
                </div>
                <div className="col-lg-4">
                    <img id="imageRest" src="https://pbs.twimg.com/profile_images/501458165867638784/h795n4ks.jpeg" />
                </div>
            </div>
            );
    }
}

export default SearchRow;