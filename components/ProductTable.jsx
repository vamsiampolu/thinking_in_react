var React = require('react');
var ProductRow = require('./ProductRow.jsx');
var ProductCategoryRow = require('./ProductCategoryRow.jsx');
var ReactBootstrap = require('react-bootstrap');
module.exports = React.createClass({
	displayName:'ProductTable',
	propTypes:{
		products:React.PropTypes.arrayOf(
			React.PropTypes.shape({
				category:React.PropTypes.string.isRequired,
				name:React.PropTypes.string.isRequired,
				price:React.PropTypes.string.isRequired,
				stocked:React.PropTypes.bool,
			})
		),
		filterText:React.PropTypes.string.isRequired,
		inStockOnly:React.PropTypes.bool.isRequired
	},
	render:function(){
		var lastCategory = null;
		var tableStyle = {
			responsive:true,
			hover:true,
			condensed:true,
			striped:true
		};

		var products = [];
		var jsxProduct = (function jsxProduct(product) {
			if(lastCategory!== product.category) {
				products.push(
					<ProductCategoryRow category={product.category}/>
				);
			}
			lastCategory = product.category;
			var notInStock = !product.stocked && this.props.inStockOnly;
			var isFilteredOut = product.name.indexOf(this.props.filterText) === -1;
			if(notInStock || isFilteredOut) {
				return;
			}
			products.push(<ProductRow {...product} key={product['name']}/>);
			
		}).bind(this);

		this.props.products.forEach(jsxProduct);
		return (
			<ReactBootstrap.Table {...tableStyle}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{products}</tbody>
			</ReactBootstrap.Table>
		);
	}
});