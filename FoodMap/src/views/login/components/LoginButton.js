import React, { Component } from 'react';
import '../Login.css';

class LoginButton extends Component {

  state = {
    defaultClass: 'btn waves-effect waves-light'
  }

  render() {
    return (
      <button
        id="login-button"
        className={this.state.defaultClass + ' ' + ' ' + this.props.class}
        type="submit"
        name="action">Iniciar Sesión
        <i className="material-icons right">send</i>
      </button>
    );
  }
}

export default LoginButton;