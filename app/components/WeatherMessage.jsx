var React = require('react');

/*
var WeatherMessage = React.createClass({
	render: function(){
		var location = this.props.location;
		var temp = this.props.temp;
		//could be destructed var {temp, location} = this.props;

		return (
			<div>
				<h1>It is {temp} in {location}</h1>
			</div>
		)
	}
});
*/


var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<h1 className="text-center">It is {temp} in {location}</h1>
		</div>
	)
};

module.exports = WeatherMessage;