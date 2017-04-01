//global variables
var city = 'new york';
var state = 'NY';
var APIKey = '';

var loadWeather = function(response){

	console.log(response); 
	
	//add an error catch before setting variables
	if(response.response.error){
		alert(response.response.error.description);
		return;
	};
	
	//set variables to elements of your response object
	var thisCity = response.location.city;
	var temp = Math.round(response.current_observation.temp_f) + '°';
	weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;

    rain = response.current_observation.precip_today_metric;
	wind = response.current_observation.wind_dir;

    printRain = response.current_observation.precip_today_metric;
	printWind = response.current_observation.wind_dir;
	
	//set text of HTML elements to your variables
	$('.temperature').html(temp);
	$('.weather').html(weather);
	$('.weatherIcon').html('<img src="' + icon + '">');

	//set value of city input to response city.
	$('.currentCity').val(thisCity);

};



var getWeather = function(){

  var myUrl = "http://api.wunderground.com/api/4945cea5b2c99fb4" +  
  "/geolookup/conditions/q/" + state + "/" + city + ".json"

	//run the ajax call and load weather on success
	$.ajax({
		url : myUrl,
		dataType : "jsonp",
		success : function(response) {
			loadWeather(response);			
		}
	});
};