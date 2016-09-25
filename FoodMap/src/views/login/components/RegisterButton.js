import React, { Component } from 'react';
import '../Login.css';

class RegisterButton extends Component {

  handleOnClick = (e) => {
    alert('TODO');
  }

  render() {
    return (
      <a id="register-link"
        onClick={this.handleOnClick}
        className="mdl-button mdl-js-button mdl-button--primary">Registrarse</a>
    );
  }
}

export default RegisterButton;