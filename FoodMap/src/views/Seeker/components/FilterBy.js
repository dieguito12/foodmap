import React, { Component } from 'react';
import './FilterBy.css';
import Auth from '../../../auth/Auth';
import $ from 'jquery';
import FilterTags from './FilterTags';

var formStyle = {
    marginTop: '-0.3px'
}

var arrayData = {}

var baseEndpoint = 'http://159.203.191.142:8080/';

class FilterBy extends Component {

    state = {
        distance: null,
        rating: null
    }
    OnClickRatingList = (e) => {
        var newState = {
            rating : 1,
            distance: null
        };
        this.setState(newState);
    }
    OnClickDistanceList = (e) => {
        var newState = {
            distance : 1,
            rating: null
        };
        this.setState(newState);
    }
    render() {
        return(
            <div>
                <ul id="dropdown12" className="dropdown-content">
                    <li onClick={this.OnClickRatingList}>Rating</li>
                    <li onClick={this.OnClickDistanceList}>Distancia</li>
                </ul>
                <nav id="tag-bar">
                    <div id="category-label" className="col-xs-4">
                        <a id="category-dropdown" className="dropdown-button"
                            href="#!"
                            data-activates="dropdown12">Filtrar por :
                            <i id="dropdown-icons" className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>
                    <FilterTags filter={this.state}/>
                </nav>
            </div>

        );
    }
}

export default FilterBy;