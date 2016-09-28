import React, { Component } from 'react';
import RestDetailDescription from './RestDetailDescription';
import RestDetailRating from './RestDetailRating';
import RestDetailPhoneNumber from './RestDetailPhoneNumber';
import RestDetailSchedule from './RestDetailSchedule';
import RestDetailAddress from './RestDetailAddress';
import RestDetailEmail from './RestDetailEmail';
import $ from 'jquery';



class RestDetail extends Component {

    state = {
        description: '',
        rating: '',
        address: '',
        phone: '',
        resschedule: '',
        email: '',
    }

    componentWillMount() {
        $.ajax({
            type: 'GET',
            url: "http://34f711b9.ngrok.io/restaurantDetail/1",
            dataType: 'json',
            success: this.fetchData
        });
    }
    fetchData = (result) =>{
                this.setState(result["0"]);
                console.log(this.state);
    }
    render() {
        return (
            <div>
            <p><RestDetailDescription descr={this.state.description} /></p>
            <p><RestDetailRating  rat={this.state.rating}/></p>
            <p><RestDetailAddress Add={this.state.address}/></p>
            <p><RestDetailPhoneNumber Phone={this.state.phone}/></p>
            <p><RestDetailEmail Email={this.state.email}/></p>
            <p><RestDetailSchedule Schedule={this.state.resschedule}/></p>
            </div>
        );
    }
}

export default RestDetail;