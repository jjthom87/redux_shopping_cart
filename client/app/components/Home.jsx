import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  	render() {
	    return (
	    	<div>
                <h1>React Redux Shopping Cart</h1>
                <h2>Home</h2>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
			</div>
	    );
  	}
};