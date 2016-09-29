import React, { Component } from 'react';

class AppLayout extends Component {
    render() {
        return (
            <HeaderBar />
            <RestListContainer />
            <MenuContainer />
            <RestTagContainer />
            <GoogleMapContainer />
        );
    }
}

export default AppLayout;