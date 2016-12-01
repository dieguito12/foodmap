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
                <RestDetailDescription descr={this.props.description} />
                <br/>
                <RestDetailRating  rat={this.props.rating}/>
                <br/>
                <RestDetailAddress Add={this.props.address}/>
                <br/>
                <RestDetailPhoneNumber Phone={this.props.phone}/>
                <br/>
                <p><RestDetailEmail Email={this.props.email}/></p>
                <br/>
                <RestDetailSchedule Schedule={this.props.resschedule}/>
            </div>
        );
    }
}

export default RestDetail;