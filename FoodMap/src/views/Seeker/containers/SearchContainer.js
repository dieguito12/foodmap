import React, { Component } from 'react';
import './SearchContainer.css';
import SearchRow from  '../components/SearchRow';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

var formStyle = {
    marginTop: '-0.3px'
}

var arrayData = {}

var baseEndpoint = 'http://159.203.191.142:8080/';

class SearchContainer extends Component {

    state = {}
    componentWillMount() {
        var user = Auth.loggedUser();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        $.ajax({
            type: 'GET',
            url: "http://159.203.191.142:8080/categories",
            dataType: 'json',
            success: this.fetchData,
            error: this.handleError
        });
    }

    fetchData = (result) =>{
        this.setState(result);
    }
    handleError = (error) => {
        if (error['status'] === 403) {
            Auth.unsetUser();
        }
    }
    handleOnSubmit = (e) => {
        var Action = 'restaurantDetail/1';
        var postData = {
            searchString: document.getElementById("search").value
        };
        var user = Auth.loggedUser();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        $.ajax({
            type: "GET",
            url: baseEndpoint + Action,
            // data: postData,
            success: this.handleSubmitSuccess,
            error: this.handleSubmitFailure,
            dataType: 'json',
        });
        e.preventDefault();
    }

    handleSubmitSuccess = (response) => {
        this.setState(response);
        console.log(this.state);
    }

    handleSubmitFailure = (error) => {
        alert("Error logging in: " + error['statusText']);
    }
    render() {
        var rowArray = $.map(this.state, function(value, index){
           return [value.category];
        });
        var categoryRest = rowArray.map(function(searchs) {
        return (
            <li>{searchs}</li>
            );
        });
        return(
            <div className="col-lg-4">
                <ul id="dropdown134" className="dropdown-content">
                {categoryRest}
                </ul>
                <nav id="search-bar" className="row">
                    <div id="category-label" className="col-xs-2">
                        <a id="category-dropdown" className="dropdown-button"
                            href="#!"
                            data-activates="dropdown134">Tipo
                            <i id="dropdown-icon" className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>
                    <div id="search-bar-input" className="nav-wrapper col-xs-10">
                        <form style={formStyle} onSubmit={this.handleOnSubmit}>
                            <div className="input-field">
                                <input id="search" type="search"/>
                                <label for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="row">
                    <SearchRow search={this.state} />
                </div>
            </div>

        );
    }
}

export default SearchContainer;