import React, { Component } from 'react';
import '../Login.css';

class Button extends Component {

  state = {
    defaultClass: 'btn waves-effect waves-light'
  }

  render() {
    return (
      <button
        id="login-button"
        className={this.state.defaultClass + ' ' + this.props.class}
        type="submit"
        name="action">{this.props.name}
        <i className="material-icons right">send</i>
      </button>
    );
  }
}

export default Button;