import React, { Component } from 'react';
import './SearchContainer.css';

class SearchContainer extends Component {
    render() {
        return(
        <div className="searchbar">
            <form class="navbar-form" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" />
                        <span class="input-group-btn">
                            <button type="reset" class="btn btn-default">
                                <span class="glyphicon glyphicon-remove">
                                </span>
                            </button>
                            <button type="submit" class="btn btn-default">
                                <span class="glyphicon glyphicon-search">
                                </span>
                            </button>
                        </span>
                    </div>
                </form>
        </div>);
    }
}

export default SearchContainer;