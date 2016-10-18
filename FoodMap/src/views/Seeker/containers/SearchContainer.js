import React, { Component } from 'react';
import './SearchContainer.css';
import SearchRow from  '../components/SearchRow';

class SearchContainer extends Component {
    render() {
        return(
            <div className="col-lg-4">
                <div className="row">
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li className="divider"></li>
                        <li><a href="#!">three</a></li>
                    </ul>
                <nav id="CategoryNav" className="col-lg-3">
                    <div id="Category" className="nav-wrapper">
                            <ul className="left hide-on-med-and-down">
                                    <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Tipo<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                    </div>
                </nav>
                    <div id="test" className="input-field col-lg-9">
                        <input id="search" type="search" onKeyPress="" required />
                        <label for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </div>
                <div className="row">
                    <SearchRow />
                </div>
            </div>

        );
    }
}

export default SearchContainer;