import React, { Component } from 'react';
import './RestContainer.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  RestDetail from '../components/RestDetail';
import  RestMap from '../components/RestMap';
import  RestGallery from '../components/RestGallery';
import  RestTag from '../components/RestTag';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

Tabs.setUseDefaultStyles(false);

var BarName = {
    color: '#7588AE',
    backgroundColor: '#F7F7F7',
    textDecoration: 'none',

};

var currentRestaurant = {};

var DataStyle = {
    fontFamily: 'GillSans, Calibri, Trebuchet, sans-serif',
    marginTop: '10px',
    marginBottom: 'auto',
    width: '100%'
};

class RestContainer extends Component{
    state = {
        description: '',
        rating: '',
        address: '',
        phone: '',
        resschedule: '',
        email: '',
    }

    componentWillReceiveProps(nextProp) {
        var user = Auth.loggedUser();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        $.ajax({
            type: 'GET',
            url: "http://159.203.191.142:8080/restaurantDetail/"+ nextProp.restId,
            dataType: 'json',
            success: this.fetchData,
            error: this.handleError
        });
    }

    fetchData = (result) =>{
        this.setState(result);
        currentRestaurant = result;
    }
    handleError = (error) => {
        if (error['status'] >= 400) {
            Auth.unsetUser();
            location.reload();
        }
    }
    render() {
    return (
    <div className="col-lg-8">
        <div className="row">
            <RestTag
                restaurant={this.state}/>
            <RestMap
                marker={this.state}
                markers={this.props.restaurants}/>
        </div>
        <Tabs className="row">
            <TabList className="tabs" style={{marginTop: '2%'}}>
                <Tab className="tab col s3"><a style={BarName} href="#test1">Detalles</a></Tab>
                <Tab className="tab col s3"><a style={BarName} href="#test2">Menu</a></Tab>
                <Tab className="tab col s3"><a style={BarName} href="#test3">Galeria</a></Tab>
                <div className="indicator"></div>
            </TabList>

            <TabPanel style={DataStyle}>
                <RestDetail
                    description={this.state.description}
                    rating={this.state.rating}
                    address={this.state.address}
                    phone={this.state.phone}
                    email={this.state.email}
                    resschedule={this.state.resschedule} />
            </TabPanel>
            <TabPanel style={DataStyle}>

            </TabPanel>
            <TabPanel style={DataStyle}>
                <RestGallery />
            </TabPanel>
      </Tabs>
    </div>
    );
  }
}


export default RestContainer;