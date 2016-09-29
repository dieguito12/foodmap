import React, { Component } from 'react';
import RestDetailDescription from './RestDetailDescription';
import RestDetailRating from './RestDetailRating';
import RestDetailPhoneNumber from './RestDetailPhoneNumber';
import RestDetailSchedule from './RestDetailSchedule';
import RestDetailAddress from './RestDetailAddress';
import RestDetailEmail from './RestDetailEmail';


class RestDetail extends Component {

    render() {
        return (
            <div>
            <p><RestDetailDescription descr={this.props.description} /></p>
            <p><RestDetailRating  rat={this.props.rating}/></p>
            <p><RestDetailAddress Add={this.props.address}/></p>
            <p><RestDetailPhoneNumber Phone={this.props.phone}/></p>
            <p><RestDetailEmail Email={this.props.email}/></p>
            <p><RestDetailSchedule Schedule={this.props.resschedule}/></p>
            </div>
        );
    }
}

export default RestDetail;