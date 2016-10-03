import React, { Component } from 'react';
import LoginButton from '../components/LoginButton';
import LoginInput from '../components/LoginInput';
import RegisterButton from '../components/RegisterButton';
import Auth from '../../../auth/Auth';
import User from '../../../auth/User';
import $ from 'jquery';

import '../Login.css';

var buttonStyle = {
  textAlign: 'right'
};

var styles = {
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#808080',
};

class LoginFormContainer extends Component {

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    animatedInput: '',
    animatedPasswordConfirmationInput: 'password_confirmation_hidden',
    'disabled': ''
  }

  handleOnInputChange = (fieldName, value) => {
    let newState = {};
    fieldName = fieldName.toLowerCase();
    newState[fieldName] = value;
    this.setState(newState);
  }

  handleOnSubmit = (e) => {
    var postData = {
      username: this.state.username,
      password: this.state.password
    };
    $.ajax({
      type: "POST",
      url: this.props.endpointUrl,
      data: postData,
      success: this.handleSubmitSuccess,
      error: this.handleSubmitFailure,
      dataType: 'json',
    });
    e.preventDefault();
  }

  handleSubmitSuccess = (response) => {
    var user = new User(this.state.username);
    user.setToken(response['auth-token']);
    Auth.setUser(user);
    location.reload();
  }

  handleSubmitFailure = (error) => {
    alert("Error logging in: " + error['statusText']);
  }

  handleOnRegisterLinkClicked = () => {
    this.setState({
      animatedInput: 'moving_input',
      disabled: 'enabled',
    });
    setTimeout( this.handleTimeout, 1000 );
    this.props.onRegisterLinkClicked();
  }

  handleTimeout = () => {
    this.setState({animatedPasswordConfirmationInput:'password_confirmation'})
  }

  render() {
    return (
      <div className="jumbotron login">
        <h1 id="login-h1" className='base-font-family'>
          {this.props.title}
        </h1>
        <div style={styles}>
          <div className="login-form">
            <form id='login' onSubmit={this.handleOnSubmit}>
              <div className="row">
                <LoginInput
                  name="Username"
                  onChange={this.handleOnInputChange}/>
              </div>
              <div className="row">
                <LoginInput
                  id={this.state.animatedInput}
                  name="Password"
                  onChange={this.handleOnInputChange}
                  type="password"/>
              </div>
              <div className="row" >
                <LoginInput
                  id={this.state.animatedPasswordConfirmationInput}
                  name="Password Confirmation"
                  disabled={!this.state.disabled}
                  onChange={this.handleOnInputChange}
                  type="password"/>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <RegisterButton
                    onClick={this.handleOnRegisterLinkClicked}
                    class={this.state.animatedInput}/>
                </div>
                <div className="col-lg-6" style={buttonStyle}>
                  <LoginButton
                    class={this.state.animatedInput}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginFormContainer;