import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { fireDB } from '../../_Firebase/firebase';

class Login extends Component {

  state = {
    user: null,
    loggedIn: null,
    userEmail: '',
    userPassword: '',
    errors: []
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    this.setState({
      user: this.props.user,
      loggedIn: this.props.loggedIn
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = this.state;

    if ( this.isFormValid(userEmail, userPassword) ) {
      this.loginUser(userEmail ,userPassword);

      this.setState({
        loggedIn: true,
        userEmail: '',
        userPassword: ''
      });

    } else {
      console.log('form is not valid')
    }

    

  }

  isFormValid = (userEmail, userPassword) => userEmail && userPassword;

  // Login User
  loginUser = (email, password) => {
  fireDB.auth().signInWithEmailAndPassword(email, password)
  .then( ( singnedInUser ) => console.log() )
  .catch( error => console.log(error) )
}

  render() {
    const { loggedIn } = this.state;
    console.log(this.state, 'from state');
    return (
      <React.Fragment>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='star' /> Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input 
                  disabled={loggedIn}
                  onChange={this.handleInputChange}
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='E-mail address' 
                  name='userEmail'
                  value={this.state.userEmail}
                />
                <Form.Input
                  disabled={loggedIn}
                  onChange={this.handleInputChange}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='userPassword'
                  value={this.state.userPassword}
                />

                <Button 
                  disabled={loggedIn} 
                  onClick={this.handleFormSubmit} 
                  color='teal' 
                  fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account? <Link to='/register'>Create account</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Login;




  