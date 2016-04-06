var React = require('react');
module.exports = React.createClass({
	displayName:'ProductRow',
	propTypes:{
		name:React.PropTypes.string.isRequired,
		price:React.PropTypes.string.isRequired,
		stocked:React.PropTypes.bool.isRequired
	},
	render:function(){
		var name = this.props.stocked?
				<span className="text-danger">{this.props.name}</span>:
				this.props.name;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.price}</td>
			</tr>
		);
	}
});