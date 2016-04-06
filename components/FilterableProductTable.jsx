var React = require('react');
var SearchBar = require('./SearchBar.jsx');
var ProductTable = require('./ProductTable.jsx');

module.exports = React.createClass({
	displayName:'FilterableProductTable',
	propTypes:{
		products:React.PropTypes.array.isRequired
	},
	getInitialState:function(){
		return {
			filterText:'',
			inStockOnly:false
		};
	},
	handleUserInput:function(data){
		this.setState(data);
	},
	render:function(){
		var properties = {
			handleUserInput:this.handleUserInput,
			filterText:this.state.filterText,
			inStockOnly:this.state.inStockOnly
		};
		return (
			<div className="container">
				<SearchBar {...properties}/>
				<ProductTable
					{...properties} 
					products={this.props.products} 
				/>
			</div>
		);
	}
});