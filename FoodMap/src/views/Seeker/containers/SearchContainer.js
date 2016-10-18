import React, { Component } from 'react';
import './SearchContainer.css';
import SearchRow from  '../components/SearchRow';

var formStyle = {
    marginTop: '-0.3px'
}
class SearchContainer extends Component {
    render() {
        return(
            <div className="col-lg-4">
                <nav id="search-bar" className="row">
                        <div className="col-lg-3">
                            <a className="dropdown-button"
                                href="#!"
                                data-activates="dropdown134">Tipo
                                <i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </div>
                        <div className="nav-wrapper col-lg-9">
                          <form style={formStyle}>
                            <div className="input-field">
                              <input id="search" type="search"/>
                              <label for="search"><i className="material-icons">search</i></label>
                              <i className="material-icons">close</i>
                            </div>
                          </form>
                        </div>
                </nav>
                <div className="row">
                    <SearchRow />
                </div>
            </div>

        );
    }
}

export default SearchContainer;