import React, { Component } from 'react';
import '../Login.css';

class LoginInput extends Component {

  state = {
    inputClass: '',
    value: ''
  }

  static defaultProps = {
    type: 'text'
  }

  handleOnBlur = (e) => {
    if (e.target.value !== '') {
      this.setState({ inputClass: 'input-mini used'});
    } else {
      this.setState({ inputClass: 'input-mini'});
    }
  }

  handleOnChange = (e) => {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="group col-md-12" id={this.props.id}>
        <input
          disabled={this.props.disabled}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          type={this.props.type}
          required
          className={this.state.inputClass}></input>
        <span className="highlight"></span>
        <label id="label">{this.props.name}</label>
      </div>
    );
  }
}

export default LoginInput;