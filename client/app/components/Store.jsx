import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Store extends Component {
	onSelectChange(e){
		this.props.actions.categorySelect(e.target.value)
	}
	componentWillMount(){
		this.props.actions.getProducts();

		setTimeout(() => {
		    var element = ReactDOM.findDOMNode(this.refs.dropdown)
		    $(element).ready(function() {
		    	$('select').material_select();
		    });
		    $(ReactDOM.findDOMNode(this.refs.categorySelect)).on('change', this.onSelectChange.bind(this));
		}, 100)
	}
  	render() {
  		const populateCategories = () => {
			var categories = [...new Set(this.props.products.map(product => product.category))];
			return categories.map((c, index) => {
				return (
					<option key={index} value={c}>{c}</option>
				)
			})
  		}
  		const populateAfterSelect = () => {
  			let products = this.props.products.filter(product => product.category === this.props.categorySelectValue);
  			return products.map((product, index) => {
  				return (
  					<tr key={index}>
  						<td>{product.name}</td>
  						<td>{product.description}</td>
  						<td>{product.price}</td>
  					</tr>
  				)
  			});
  		}
	    return (
	    	<div>
                <h1>React Redux Shopping Cart</h1>
                <h2>Store</h2>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <br></br>
                <div style={{width: '25%', marginLeft: '50px'}}>
					<select ref="categorySelect">
						<option defaultValue="" disabled selected>Choose Category</option>
						{ this.props.products ? populateCategories() : (<option>Awaiting Options</option>) }
					</select>
				</div>
				<div>
					{
						this.props.categorySelectValue ?
							<div>
								<h2>{this.props.categorySelectValue}'s</h2>
								<table>
									<thead>
										<tr>
											<th>Product Name</th>
											<th>Product Description</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										{populateAfterSelect()}
									</tbody>
								</table>
							</div> : 
							<div></div>
					}
				</div>
			</div>
	    );
  	}
};

function mapStateToProps(state) {
	return {
		products: state.messages.products,
		categorySelectValue: state.messages.categorySelectValue
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);