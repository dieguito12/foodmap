import React, { Component } from 'react';
import './SearchContainer.css';
import SearchRow from  '../components/SearchRow';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

var formStyle = {
    marginTop: '-0.3px'
}
var noDecoration = {
    textDecoration: 'none'
}
var arrayData = {}

var chipsIds = []

var chip;

var baseEndpoint = 'http://159.203.191.142:8080/';

class SearchContainer extends Component {

    state = {
        categories: null,
        restaurants: null,
    }

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
        var Action = 'restaurants/0/15';
        var user = Auth.loggedUser();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        $.ajax({
            type: "GET",
            url: baseEndpoint + Action,
            success: this.handleSubmitSuccess,
            error: this.handleSubmitFailure,
            dataType: 'json',
        });
    }

    fetchData = (result) =>{
        var newState = {
            categories: result
        };
        this.setState(newState);
    }
    handleError = (error) => {
        if (error['status'] === 403) {
            Auth.unsetUser();
        }
    }
    handleOnSubmit = (e) => {

        var Action = 'restaurants/0/15';
        console.log(chipsIds.length);
        if (chipsIds.length != 0){
            Action = 'restByType/'+chipsIds.join('-')+'/0/15';
        }
        var postData = {
            searchString: document.getElementById("search").value
        };
        console.log(postData);
        if (postData['searchString'] != '') {
            Action = 'searchRestaurant/'+postData['searchString']+'/0/15'
        }
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

    handleOnCategoryClick = (e) => {
        sessionStorage.setItem("chips", JSON.stringify(chip));
        e.preventDefault();
    }

    handleSubmitSuccess = (response) => {
        if (response['rows']) {
            response = response['rows'];
        }
        var newState = {
            restaurants: response
        };
        this.setState(newState);
        chipsIds = [];
    }

    handleSubmitFailure = (error) => {
        alert("Error logging in: " + error['statusText']);
    }

    render() {
        var rowArray = $.map(this.state.categories, function(value, index){
           return [value];
        });
        var categoryRest = rowArray.map(function(searchs) {
            function handleOnCategoryClick(e) {
                chip = {tag: e.target.textContent, id: e.target.getAttribute('id')};
                chipsIds.push(chip['id']);
            }
            return (
                <li key={searchs['id']}><a onClick={handleOnCategoryClick} className="categories" id={searchs['id']} style={noDecoration}>{searchs['category']}</a></li>
            );
        });
        return(
            <div className="col-lg-4">
                <ul id="dropdown134" onClick={this.handleOnCategoryClick} className="dropdown-content">
                    <li className="divider"></li>
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
                                <label><div><i className="material-icons">search</i></div></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <nav id="search-bar" className="row">
                    <div ref="chips" className="chips chips-initial" style={{height: "70px"}}></div>
                </nav>
                <div className="row">
                    <SearchRow search={this.state.restaurants} onClick={this.props.onRestaurantClick} />
                </div>
            </div>

        );
    }
}

export default SearchContainer;