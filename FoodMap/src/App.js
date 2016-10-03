import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from './logo.svg';
import './App.css';
import LoginFormContainer from './views/login/containers/LoginFormContainer';
import Auth from './auth/Auth';
import RestContainer from './views/restaurants/containers/RestContainer';
import HeaderBar from './views/layout/components/HeaderBar';

var loginEndpoint = 'http://159.203.191.142:8080/login';

class App extends Component {

  state = {
    title: 'Inicio de Sesión'
  }

  handleOnRegisterLinkClicked = () => {
    this.setState({title: 'Registrarse'});
  }

  render() {
    if (Auth.loggedUser() == null) {
      return (
        <div className="container">
          <LoginFormContainer
            title={this.state.title}
            onRegisterLinkClicked={this.handleOnRegisterLinkClicked}
            endpointUrl={loginEndpoint} />
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
