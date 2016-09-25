import React, { Component } from 'react';
import './RestContainer.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  RestDetail from './RestDetail';

var BarName = {
    color: 'red',
    backgroundColor: '#EAF0ED',
};

var DataStyle = {
    fontFamily: 'GillSans, Calibri, Trebuchet, sans-serif',
    padding: '30px',
};

class RestContainer extends Component{
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
          <RestDetail />
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