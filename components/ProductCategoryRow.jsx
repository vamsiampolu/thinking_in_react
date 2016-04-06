var React = require('react');
module.exports = React.createClass({
	displayName:'ProductCategoryRow',
	propTypes:{
		category:React.PropTypes.string
	},
	render:function(){
		return (
			<tr><td className="text-success">
				<strong>{this.props.category}</strong>
			</td></tr>
		);
	}
});
