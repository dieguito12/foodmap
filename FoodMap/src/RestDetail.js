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
            <p><RestDetailDescription /></p>
            <p><RestDetailRating /></p>
            <p><RestDetailAddress /></p>
            <p><RestDetailPhoneNumber /></p>
            <p><RestDetailEmail /></p>
            <p><RestDetailSchedule /></p>
            </div>
        );

    }
}

export default RestDetail;