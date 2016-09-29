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

class LoginFormContainer extends Component {

  state = {
    username: '',
    password: ''
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
    console.log(response);
    user.setToken(response['auth-token']);
    Auth.setUser(user);
    location.reload();
  }

  handleSubmitFailure = (error) => {
    alert("Error logging in: " + error['statusText']);
    location.reload();
  }

  render() {
    return (
      <div className="login-form">
        <form id='login' onSubmit={this.handleOnSubmit}>
          <div className="row">
            <LoginInput
              name="Username"
              onChange={this.handleOnInputChange}/>
          </div>
          <div className="row">
            <LoginInput
              name="Password"
              onChange={this.handleOnInputChange}
              type="password"/>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <RegisterButton />
            </div>
            <div className="col-lg-6" style={buttonStyle}>
              <LoginButton />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginFormContainer;