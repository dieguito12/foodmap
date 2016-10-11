import React, { Component } from 'react';
import '../Login.css';

class FlatButton extends Component {

  state = {
    defaultClass: 'waves-effect waves-teal btn-flat'
  }

  render() {
    return (
      <a id="register-link"
        onClick={this.props.onClick}
        className={this.state.defaultClass + ' ' + this.props.class}>{this.props.name}</a>
    );
  }
}

export default FlatButton;