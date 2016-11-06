import React, { Component } from 'react';
import './App.css';
import LoginFormContainer from './views/login/containers/LoginFormContainer';
import Auth from './auth/Auth';
import HeaderBar from './views/layout/components/HeaderBar';
import LayoutContainer from './views/layout/components/LayoutContainer';


class App extends Component {

  render() {
    if (Auth.loggedUser() == null) {
      return (
        <div className="container">
          <LoginFormContainer />
        </div>
      );
    } else {
      let user = Auth.loggedUser();
      return (
        <div>
          <HeaderBar username={user['username']}/>
          <LayoutContainer />
        </div>
      );
    }
  }
}

export default App;
