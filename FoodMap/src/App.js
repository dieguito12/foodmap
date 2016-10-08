import React, { Component } from 'react';
import './App.css';
import LoginFormContainer from './views/login/containers/LoginFormContainer';
import Auth from './auth/Auth';
import RestContainer from './views/restaurants/containers/RestContainer';
import HeaderBar from './views/layout/components/HeaderBar';


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
          <RestContainer />
        </div>
      );
    }
  }
}

export default App;
