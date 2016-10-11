import React, { Component } from 'react';
import RestContainer from '../../../views/restaurants/containers/RestContainer';
import SearchContainer from '../../../views/Seeker/containers/SearchContainer';


class LayoutContainer extends Component {
    render () {
        return(
                <div className="row">
                    <SearchContainer/>
                    <RestContainer className="col-lg-8"/>
                </div>
        );
    }
}

 export default LayoutContainer;