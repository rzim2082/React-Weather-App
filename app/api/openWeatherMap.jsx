var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0c618c64156039d6d068ca7d23f8a9b1&units=imperial';

//0c618c64156039d6d068ca7d23f8a9b1
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0c618c64156039d6d068ca7d23f8a9b1

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		});
	}
}