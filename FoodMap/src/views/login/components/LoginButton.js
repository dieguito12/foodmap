import React, { Component } from 'react';
import '../Login.css';

class LoginButton extends Component {

  render() {
    return (
      <button
        id="login-button"
        className="btn waves-effect waves-light"
        type="submit"
        name="action">Iniciar Sesión
        <i className="material-icons right">send</i>
      </button>
    );
  }
}

export default LoginButton;