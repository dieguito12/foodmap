import React, { Component } from 'react';
import './RestContainer.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  RestDetail from '../components/RestDetail';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

Tabs.setUseDefaultStyles(false);

var BarName = {
    color: '#7588AE',
    backgroundColor: '#F7F7F7',
    textDecoration: 'none',

};

var DataStyle = {
    fontFamily: 'GillSans, Calibri, Trebuchet, sans-serif',
    marginTop: '10%',
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

    componentWillMount() {
        var user = Auth.loggedUser();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        $.ajax({
            type: 'GET',
            url: "http://159.203.191.142:8080/restaurantDetail/1",
            dataType: 'json',
            success: this.fetchData,
            error: this.handleError
        });
    }
    fetchData = (result) =>{
        this.setState(result["0"]);
    }
    handleError = (error) => {
        if (error['status'] === 403) {
            Auth.unsetUser();
        }
    }
    render() {
    return (
    <div>
      <Tabs className="col s6">
        <TabList className="tabs" style={{marginTop: '35%'}}>
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

        </TabPanel>
      </Tabs>
    </div>
    );
  }
}


export default RestContainer;