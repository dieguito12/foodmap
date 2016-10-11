import React, { Component } from 'react';
import './SearchContainer.css';

class SearchContainer extends Component {
    render() {
        return(
        <div id="searchbar" className="col-lg-4">
            <nav>
                <div id="searchBarM"className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required />
                            <label for="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>);
    }
}

export default SearchContainer;