import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Log In</Link>
          </li>
        </ul>
        <h1>Register</h1>
      </div>
    )
  }
}

export default Register;