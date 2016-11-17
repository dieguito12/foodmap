import React, { Component } from 'react';
import RestContainer from '../../../views/restaurants/containers/RestContainer';
import SearchContainer from '../../../views/Seeker/containers/SearchContainer';


class LayoutContainer extends Component {

    state = {
        restaurantId: 1
    }

    restaurantClickHandler = (response) => {
        var newState = {
            restaurantId: response
        }
        this.setState(newState);
    }

    render () {
        return(
                <div className="row">
                    <SearchContainer onRestaurantClick={this.restaurantClickHandler} />
                    <RestContainer restId={this.state.restaurantId} />
                </div>
        );
    }
}

 export default LayoutContainer;