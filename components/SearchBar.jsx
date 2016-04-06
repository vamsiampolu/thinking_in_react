var React = require('react');
var ReactBootstrap = require('react-bootstrap');
module.exports = React.createClass({
	displayName:'SearchBar',
	propTypes:{
		handleUserInput:React.PropTypes.func.isRequired,
		filterText:React.PropTypes.string,
		inStockOnly:React.PropTypes.bool
	},
	handleChange:function(){
		var data = {
			filterText:this.refs.filterTextInput.getValue(),
			inStockOnly:this.refs.inStockOnlyInput.getChecked()
		};
		console.log(data);
		this.props.handleUserInput(data);
	},
	render:function(){
		console.log(this.props.filterText,this.props.inStockOnly);
		return (
			<form className="form-inline">
				<ReactBootstrap.Input  type="text" 
					placeholder="Search"
					label="Search"
					ref="filterTextInput"
					value={this.props.filterText}
					onChange={this.handleChange}
					labelClassName="sr-only"/>
				
				<ReactBootstrap.Input 
					type="checkbox"
					ref="inStockOnlyInput"
					value={this.props.inStockOnly}
					onChange={this.handleChange}
					label="Only show products in stock."/>	
			</form>	
		);
	}
});