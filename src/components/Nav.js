import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Miniflix</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">All Videos</Link>
            </li>
            <li>
              {
              ( isLoggedIn() ) ? <Link to="/upload">Upload Videos</Link> :  ''
              }
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
            {
              (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
            }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;