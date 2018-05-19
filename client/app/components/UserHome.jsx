import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class UserHome extends Component {
	componentWillMount(){
		this.props.actions.isUserSignedIn();
	}
  	render() {
	    return (
	    	<div>
                <h1>React Redux Shopping Cart</h1>
                <h2>Welcome {this.props.user ? this.props.user.name : ""}</h2>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
			</div>
	    );
  	}
};

function mapStateToProps(state) {
	return {
		info: state.messages.info,
		user: state.messages.user
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);