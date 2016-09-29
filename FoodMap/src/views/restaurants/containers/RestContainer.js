import React, { Component } from 'react';
import './RestContainer.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  RestDetail from '../components/RestDetail';
import Auth from '../../../auth/Auth';
import $ from 'jquery';

var BarName = {
    color: 'red',
    backgroundColor: '#EAF0ED',
};

var DataStyle = {
    fontFamily: 'GillSans, Calibri, Trebuchet, sans-serif',
    padding: '30px',
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
        let user = Auth.user();
        if (user != null) {
            $.ajaxSetup({
                headers: { 'token': user['auth_token'] }
            });
        }
        console.log(Auth.user());
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
                console.log(this.state);
    }
    handleError = (error) => {
        if (error['status'] === 403) {
            Auth.unsetUser();
        }
    }
    render() {
    return (
    <div className="RestContainer">
      <Tabs>
        <TabList>
          <Tab style={BarName}>Detalles</Tab>
          <Tab style={BarName}>Menu</Tab>
          <Tab style={BarName}>Galeria</Tab>
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