import React, { Component } from 'react';
import LoginFormContainer from './LoginFormContainer';
import '../Login.css';

var styles = {
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#808080',
};

var loginEndpoint = 'http://159.203.191.142:8080/login';

class LoginContainer extends Component {
  render() {
    return (
      <div style={styles}>
        <LoginFormContainer endpointUrl={loginEndpoint} />
      </div>
    );
  }
}

export default LoginContainer;