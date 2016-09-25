import React, { Component } from 'react';
import './Menu.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  MenuDetail from './MenuDetail';

var navbar = {
    color: 'red',
    backgroundColor: '#EAF0ED'
};

class MenuContainer extends Component{
    render() {
    return (
      <Tabs>
        <TabList>
          <Tab style={navbar}>Detalles</Tab>
          <Tab style={navbar}>Menu</Tab>
          <Tab style={navbar}>Galeria</Tab>
        </TabList>

        <TabPanel>
          <MenuDetail />
        </TabPanel>
        <TabPanel>
          <p>Hello from Bar</p>
        </TabPanel>
        <TabPanel>
          <p>Hello from Baz</p>
        </TabPanel>
      </Tabs>
    );
  }
}


export default MenuContainer;