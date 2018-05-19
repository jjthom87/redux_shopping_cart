import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux'

class Guestbook extends Component {
	componentWillMount(){
        this.props.showMessages();
	}
  	render() {
        console.log(this.props.messages)
	    return (
	    	<div>
                <h1>Look at the console.log inside your componentWillMount()</h1>
                <h2>Open up your google inspect to see that console.log</h2>
			</div>
	    );
  	}
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showMessages: () => dispatch(actions.getItemsFromDb())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Guestbook);