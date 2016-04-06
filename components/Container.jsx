var React = require('react');
var App = require('./Grid.jsx');

module.exports = React.createClass({
	displayName:'Container',
	getInitialState:function(){
		return {
			data:[]
		};
	},
	componentDidMount:function(){
		function status(response) {  
		  if (response.status >= 200 && response.status < 300) {  
		    return Promise.resolve(response)  
		  } else {  
		    return Promise.reject(new Error(response.statusText))  
		  }  
		}

		function json(response) {  
		  return response.json();  
		}
		var getDataAsState = (function getDataAsState(data) {
			this.setState({
				data:data
			});
			return data;	
		}).bind(this);

		var data = fetch('../data.json')
					.then(status)
					.then(json)
					.then(getDataAsState)
					.catch(function(err){
						console.error('An error occured','\n',err,'\n',err.stack);
					});
		
	},
	render:function(){
		return (<App data={this.state.data}/>);
	}
});