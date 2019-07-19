import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Protected Page</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default LandingPage;