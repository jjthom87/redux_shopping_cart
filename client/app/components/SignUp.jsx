import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class SignUp extends Component {
	submit = values => {
		this.props.actions.signUpForm(values)
	}
  	render() {
	    return (
	    	<div>
                <h1>React Redux Shopping Cart</h1>
                <h2>Sign Up</h2>
                <Link to="/">Home</Link>
                <Link to="/sign-in">Sign In</Link>
                <br></br>
            	<SignUpForm onSubmit={this.submit}/>
			</div>
	    );
  	}
};

function mapStateToProps(state) {
  return {
  	status: state.messages.status,
  	message: state.messages.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)