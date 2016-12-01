import React, { Component } from 'react';

const style = {
    maxWidth: "100%",
    marginTop: "10px"
}


class RestTag extends Component {

    handleOnClick = (e) => {
        console.log("Clicked");
        // var directionsDisplay = new google.maps.DirectionsRenderer();
        // var directionsService = new google.maps.DirectionsService();
        // var map = document.getElementById("map");

        // var currentLocation = sessionStorage.getItem("currentLocation");
        // var start = new google.maps.LatLng(currentLocation.lat, currentLocation.lon);
        // var end = new google.maps.LatLng(this.props.restaurant.latitude, this.props.restaurant.longitude);
        // var request = {
        //     origin:start,
        //     destination:end,
        //     travelMode: google.maps.TravelMode.DRIVING
        // };
        // directionsService.route(request, function(result, status) {
        //     if (status == google.maps.DirectionsStatus.OK) {
        //         directionsDisplay.setDirections(result);
        //     }
        // });
    }

    render() {
        return (
            <div className="col-lg-4" style={style}>
                <div className="row">
                    <div className="card white darken-1">
                        <div className="col-lg-5" style={{marginTop: "20px"}}>
                            <img id="imageRest" src="https://pbs.twimg.com/profile_images/501458165867638784/h795n4ks.jpeg" />
                        </div>
                        <div className="card-content">
                            <span className="card-title">{this.props.restaurant.resname}</span>
                            <p><a href={"callto: " + this.props.restaurant.phone}>{this.props.restaurant.phone}</a></p>
                            <p>{this.props.restaurant.address}</p>
                        </div>
                      </div>
                </div>
            </div>
        );
    }
}

export default RestTag;