import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Login from './_Components/LogIn';
import Register from './_Components/Register';
import Private from './_Components/Private';

import { fireDB } from './_Firebase/firebase';


class Root extends Component {

  state = {
    loading: false,
    user: null,
    loggedIn: false
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fireDB.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        console.log(this.props.history, 'IS THIS A THING');
        this.setState({ user: user, loggedIn: true });
        localStorage.setItem('user', user.uid);
        this.props.history.push('/private');    


        console.log('LOGGEDIN')
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
        this.props.history.push('/');    


      }
    });
  }

  logOutUser = () => {
    fireDB.auth().signOut();
    this.setState({ loggedIn: false });
    console.log('LOGGED OUT');
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    return (   
      <React.Fragment>
      
      { this.state.loggedIn && <button onClick={this.logOutUser}>log out</button> }


      <Switch>

        <Route 
          exact path='/' 
          render={(props) => <Login {...props} 
            user={this.state.user} 
            loggedIn={this.state.loggedIn}
            />} 
        />
        <Route path='/register' component={Register} />

        <Route render={ (props) => ( this.state.user 
            ? <Private {...props} /> 
            : <Redirect to='/login' />

        )} 
        />

      </Switch>
      </React.Fragment>   
    );
  }
  
}
/*
const PrivateRoute = ({ component: Component, ...rest }) => {

  return(

    <Route {...rest} render={ (props) => ( 

        true === true
        ? <Component {...props} /> 
        : <Redirect to='/login' />

      )} 
    />

  );
  
}

        <PrivateRoute path='/private' component={Private}/>

*/
export default Root;

/*
<ul>
<li>
  <Link to="/public">Public Page</Link>
</li>
<li>
  <Link to="/private">Protected Page</Link>
</li>
</ul>
*/