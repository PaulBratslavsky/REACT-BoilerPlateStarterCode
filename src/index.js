import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import './index.css';

import Root from './Root';


const RootWithAuth = withRouter(Root);


ReactDOM.render(
  
  <Router>
    <RootWithAuth />
  </Router>, 
  
document.getElementById('root'));
