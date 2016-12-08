import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

const style = {
    maxWidth: "100%",
    marginTop: "10px"
}


class RestGallery extends Component {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    state = {
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
            url: "http://159.203.191.142:8080/imagesByIdRestaurant/"+ this.props.restId,
            dataType: 'json',
            success: this.fetchData,
            error: this.handleError
        });
    }
    fetchData = (result) =>{
       this.setState(result);
       console.log(this.state);
    }
    handleError = (error) => {
        if (error['status'] === 403) {
            Auth.unsetUser();
        }
    }

    render() {
        var imagesRest = [];
        for (var i = 0 ; i < 10; i++) {
            if(this.state.hasOwnProperty("gallery_" + i))
            {
                imagesRest.push({ original: 'http://159.203.191.142:8080/images/restaurants/'+this.state["gallery_"+i],
                    thumbnail: 'http://159.203.191.142:8080/images/restaurants/'+this.state["gallery_"+i]});
                console.log(imagesRest);
            }
        }

    return (
        <div>
        {console.log(this.state)}
        <ImageGallery
            ref={i => this._imageGallery = i}
            items={imagesRest}
            slideInterval={5000} />
        </div>
        );
    }
}

export default RestGallery;