import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignInForm from './SignInForm';

class SignIn extends Component {
    submit = values => {
      this.props.actions.signInForm(values, (res) => {
        if(res.success){
          this.props.actions.toUserHome(res);
          this.props.history.push('/home', {info: res});
        }
      })
    }
  	render() {
	    return (
	    	<div>
          <h1>React Redux Shopping Cart</h1>
          <h2>Sign In</h2>
          <Link to="/">Home</Link>
          <Link to="/sign-up">Sign Up</Link>
          <br></br>
          <SignInForm onSubmit={this.submit}/>
			</div>
	    );
  	}
};

function mapStateToProps(state) {
  return {
    status: state.messages.status,
    message: state.messages.message,
    info: state.info
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)
const RoutedContainer = withRouter(connectedContainer);
export default RoutedContainer;