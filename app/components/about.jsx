var React = require('react');


/*
var About = React.createClass({
	render: function(){
		return (
			<h3>About Component</h3>
			)
	}
});
*/

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<h4>This project is part of my web development portfolio using the following technologies:</h4>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/" target="_blank">React</a>
				</li>
				<li>
					<a href="http://foundation.zurb.com/" target="_blank">Foundation</a>
				</li>
				<li>
					<a href="http://expressjs.com/" target="_blank">Express</a>
				</li>
				<li>
					<a href="https://nodejs.org/en/" target="_blank">Node</a>
				</li>
				<li>
					<a href="https://babeljs.io/" target="_blank">ES-6 with Babel</a>
				</li>
				<li>
					<a href="https://github.com/mzabriskie/axios" target="_blank">Axios</a>
				</li>
				<li>
					<a href="http://openweathermap.org/" target="_blank">Open Weather Map API</a>
				</li>
				<li>
					<a href="https://webpack.github.io/" target="_blank">Webpack</a>
				</li>
			</ul>
		</div>
	)
};

module.exports = About;