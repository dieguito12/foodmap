import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import '../Login.css';

class LoginViewContainer extends Component {
  render() {
    return (
      <div className="jumbotron login">
        <h1 id="login-h1" className=".base-font-family">
          Inicio de Sesión
        </h1>
        <div>
          <LoginContainer />
        </div>
      </div>
    );
  }
}

export default LoginViewContainer;