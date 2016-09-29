import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginViewContainer from './views/login/containers/LoginViewContainer';
import Auth from './auth/Auth';
import RestContainer from './views/restaurants/containers/RestContainer';
import HeaderBar from './views/layout/components/HeaderBar';

class App extends Component {
  render() {
    if (Auth.user() == null) {
      return (
        <div className="container">
          <LoginViewContainer />
        </div>
      );
    } else {
      let user = Auth.user();
      return (
        <div>
          <HeaderBar username={user['username']} />
          <RestContainer />
        </div>
      );
    }
  }
}

export default App;
