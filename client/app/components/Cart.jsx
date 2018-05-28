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
		let total = this.props.cart ? this.props.cart.map(c => parseInt(c.price)).reduce((n, m) => { return n + m }) : 0;
    return (
    	<div>
        <h1>React Redux Shopping Cart</h1>
        <h2>Your Cart</h2>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Remove from Cart?</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.cart ?
                this.props.cart.length > 0 ?
                this.props.cart.map((c) => {
                  return (
                    <tr>
                      <td>{c.name}</td>
                      <td>{c.description}</td>
                      <td>{c.price}</td>
                      <td>
                        <button 
                          style={{color: 'white', backgroundColor: 'red'}}
                          onClick={() => "hello"}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  )
                })
                : <tr><td>No Items in Cart</td></tr>
                : <tr></tr>
            }
            <td style={{position: 'absolute', right: '60px'}}><strong>Total: </strong>{total}</td>
          </tbody>
        </table>
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