import React, { Component } from 'react';
import Auth from '../../../auth/Auth';
import '../../../App.css';

var logoStyle = {
    height: '50px'
}

var mobileLogoutStyle = {
    color: '#26a69a',
    fontSize: '16px',
    textDecoration: 'none'
}

var noDecoration = {
    textDecoration: 'none'
}

class HeaderBar extends Component {

    handleLogout = (e) => {
        Auth.unsetUser();
        location.reload();
    }

    render() {
        return (
            <div className="navbar-fixed">
                <ul id="dropdown1" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a style={noDecoration} onClick={this.handleLogout}>Logout</a></li>
                </ul>
                <ul id="mobile-demo" className="side-nav">
                    <li><a style={mobileLogoutStyle} href="#" onClick={this.handleLogout}>Logout</a></li>
                </ul>
                <nav id="header-bar">
                    <div className="nav-wrapper">
                        <a className="brand-logo center" href="#" >
                            <img alt="Brand" style={logoStyle} src="/assets/logo.png"/>
                        </a>
                        <a
                            data-activates="mobile-demo" href="#"
                            className="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a
                                    className="dropdown-button"
                                    data-beloworigin="true"
                                    style={noDecoration}
                                    data-activates="dropdown1">
                                    Bienvenido: {this.props.username}
                                    <i className="material-icons left">perm_identity</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderBar;