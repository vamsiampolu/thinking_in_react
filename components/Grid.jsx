var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var FilterableProductTable = require('./FilterableProductTable.jsx');
module.exports = React.createClass({
	displayName:'Grid',
	propTypes:{
		data:React.PropTypes.arrayOf(React.PropTypes.object),
		source:React.PropTypes.string
	},
	render:function(){
		return (
		<ReactBootstrap.Grid>
			<ReactBootstrap.Row>
				<ReactBootstrap.Col xs={8} xsOffset={2}>
					<FilterableProductTable products={this.props.data}/>			
				</ReactBootstrap.Col>
			</ReactBootstrap.Row>
		</ReactBootstrap.Grid>);
	}
});