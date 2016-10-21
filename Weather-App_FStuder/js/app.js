$(document).ready(function(){

	// Start with this URL
	var url = 'http://api.openweathermap.org/data/2.5/weather?zip=%ZIPCODE%&APPID=6f181e7b8887bcb10a67c2bb33487822&units=imperial';
	

	$('input#getWeather').click(function() {
		var zipCode = $('input#zipCode').val();

		if (isNaN(zipCode) || zipCode.length !== 5) {
			alert('hey that\'s not a number');
			return;
		}

		var parsedUrl = url.replace('%ZIPCODE%', zipCode); //replaces a placeholder within the variable.
			//console.log(parsedUrl);
			
		$.get(parsedUrl, function(data, status){
			console.log(data)
			$('h3.result').append(data.name +'\'s temperature is ' + data.main.temp + ' with ' + data.weather[0].description +'.'); //added fs
			if (data.main.temp >= 50) {
				$('body').addClass('warm');
			} else if (data.main.temp < 50) {
				$('body').addClass('cool');
			}
		});

		
	});


	// When a user clicks the input that reads "submit" get a JSON feed from the open weather API using the URL above
	// you'll notice that i included a placeholder "%ZIPCODE%"
	// get the user entered zip code and do a find and replace on the URL with the correct ZIP value

	// If the users enters a zipcode containing letters you should stop the function and prompt the user
	
	// Print West Hollywood is 59˚ degrees in the h2 once you've retrieved the JSON

	// If the temperature is greater than 50 degrees add the "warm" class to the body
	// If the temperature is less than 50 add the cool class to the body

	// Reference this: $.getJSON for more information
	// Reference .replace to find & replace


	//use event you have never used before - addl. hmwork =class 8

});