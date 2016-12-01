import React, { Component } from 'react';
import RestContainer from '../../../views/restaurants/containers/RestContainer';
import SearchContainer from '../../../views/Seeker/containers/SearchContainer';

class LayoutContainer extends Component {

    state = {
        restaurantId: 1,
        restaurants: []
    }

    restaurantClickHandler = (response) => {
        var newState = {
            restaurantId: response
        }
        this.setState(newState);
    }

    searchHandler = (response) => {
        var newState = {
            restaurants: response
        }
        this.setState(newState);
    }

    render () {
        return(
                <div className="row">
                    <SearchContainer
                        onSearch={this.searchHandler}
                        onRestaurantClick={this.restaurantClickHandler} />
                    <RestContainer
                        restaurants={this.state.restaurants}
                        restId={this.state.restaurantId} />
                </div>
        );
    }
}

 export default LayoutContainer;