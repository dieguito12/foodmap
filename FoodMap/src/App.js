import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginViewContainer from './views/login/containers/LoginViewContainer';
import Auth from './auth/Auth';

class App extends Component {
  render() {
    if (Auth.user() == null) {
      return (
        <div className="container">
          <LoginViewContainer />
        </div>
      );
    } else {
      alert('User Logged In');
    }
  }
}

export default App;
