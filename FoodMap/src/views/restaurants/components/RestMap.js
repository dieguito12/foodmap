import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 70,
  lng: 18
};

var mapCoords = {};

const style = {
    maxWidth: "100%",
    maxHeight: "500px",
    marginTop: "20px"
};

class RestMap extends Component {

    state = {
        markers: []
    }

    componentWillReceiveProps(nextProp){
        var newState = {
            markers: this.props.markers
        }
        this.setState(newState);
        mapCoords.lat = nextProp.marker.latitude;
        mapCoords.lng = nextProp.marker.longitude;
    }

    onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: true
        });
        var location = sessionStorage.getItem("currentLocation");
        if (location) {
            location = JSON.parse(location);
            coords.lat = location.lat;
            coords.lng = location.lon;
            mapCoords.lat = location.lat;
            mapCoords.lng = location.lon;
        }
    }

    render() {
        return (
            <div className="col-lg-8" id="map" style={style}>
                <Gmaps
                    width={'100%'}
                    height={'350px'}
                    lat={mapCoords.lat}
                    lng={mapCoords.lng}
                    zoom={16}
                    params={{v: '3.exp'}}
                    onMapCreated={this.onMapCreated}>
                    {this.state.markers.map(function(marker) {
                        function onClick(e) {
                            var map = document.getElementById('map');
                            var infowindow = new google.maps.InfoWindow();
                            infowindow.setContent(marker.title);
                            infowindow.open(map, this);
                        }
                        marker.onClick = onClick;
                        return <Marker {...marker} />
                    })}
                    <InfoWindow
                        lat={coords.lat}
                        lng={coords.lng}
                        content={'You!'}
                        onCloseClick={this.onCloseClick} />
                    <Circle
                        lat={coords.lat}
                        lng={coords.lng}
                        radius={5}
                        onClick={this.onClick} />
                </Gmaps>
            </div>
        );
    }
}

export default RestMap;