import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Cart extends Component {
	componentWillMount(){
		this.props.actions.getCart();
	}
  	render() {
  		console.log(this.props)
	    return (
	    	<div>
                <h1>React Redux Shopping Cart</h1>
                <h2>Your Cart</h2>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
			</div>
	    );
  	}
};

function mapStateToProps(state) {
	return {
		cart: state.messages.cart
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);