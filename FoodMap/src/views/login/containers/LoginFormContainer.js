import React, { Component } from 'react';
import Button from '../components/Button';
import LoginInput from '../components/LoginInput';
import FlatButton from '../components/FlatButton';
import Auth from '../../../auth/Auth';
import User from '../../../auth/User';
import $ from 'jquery';

import '../Login.css';


var baseEndpoint = 'http://159.203.191.142:8080/';

var buttonStyle = {
  textAlign: 'center'
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
    animatedInput: 'row',
    animatedPasswordConfirmationInput: 'password_confirmation_hidden',
    disabled: '',
    currentButtonTitle: 'Iniciar Sesión',
    currentFlatButtonTitle: 'Registrarse',
    currentAction: 'login'
  }

  handleOnInputChange = (fieldName, value) => {
    let newState = {};
    fieldName = fieldName.toLowerCase();
    if (fieldName === 'password confirmation') {
      fieldName = 'passwordConfirmation';
    }
    newState[fieldName] = value;
    this.setState(newState);
  }

  handleOnSubmit = (e) => {
    var postData = {
      username: this.state.username,
      password: this.state.password
    };
    if (this.state.currentAction == 'register' && this.state.password !== this.state.passwordConfirmation) {
      alert('Password and password confirmation must be the same.');
    }
    else {
      $.ajax({
        type: "POST",
        url: baseEndpoint + this.state.currentAction,
        data: postData,
        success: this.handleSubmitSuccess,
        error: this.handleSubmitFailure,
        dataType: 'json',
      });
    }
    e.preventDefault();
  }

  handleSubmitSuccess = (response) => {
    var user = new User(this.state.username);
    user.setToken(response['token']);
    Auth.setUser(user);
    location.reload();
  }

  handleSubmitFailure = (error) => {
    var responseText = error['responseText'];
    responseText = JSON.parse(responseText);
    alert(responseText['error']['message']);
    location.reload();
  }

  handleOnFlatLinkClicked = () => {
    if (this.state.currentAction === 'login') {
      this.setState({
        animatedInput: 'row moving_input_login',
        disabled: 'enabled',
        currentAction: 'register'
      });
      setTimeout( this.handleTimeout, 1050 );
    } else {
      this.setState({
        animatedPasswordConfirmationInput:'password_confirmation_fadeout',
        disabled: '',
        currentAction: 'login'
      });
      setTimeout( this.handleTimeout, 550 );
    }
  }

  handleTimeout = () => {
    if (this.state.currentAction === "login") {
      this.setState({
        currentButtonTitle: 'Iniciar Sesión',
        currentFlatButtonTitle: 'Registrarse',
        animatedInput: 'row moving_input_register',
        animatedPasswordConfirmationInput: 'password_confirmation_hidden'
      })
    } else {
      this.setState({
        currentButtonTitle: 'Crear Cuenta',
        currentFlatButtonTitle: 'Inicio de Sesión',
        animatedInput: 'row',
        animatedPasswordConfirmationInput:'password_confirmation_fadein'
      })
    }
  }

  render() {
    return (
      <div className="jumbotron login">
        <h1 id="login-h1" className='base-font-family'>
          {this.state.currentButtonTitle}
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
              <div className={this.state.animatedInput}>
                <div className="col-lg-6" style={buttonStyle}>
                  <FlatButton
                    name={this.state.currentFlatButtonTitle}
                    onClick={this.handleOnFlatLinkClicked}/>
                </div>
                <div className="col-lg-6" style={buttonStyle}>
                  <Button
                    name={this.state.currentButtonTitle}/>
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