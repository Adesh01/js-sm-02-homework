$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];
	var zipcodes = ['10230', '34500', '90405', '90066', '24300'];



	$('button#makeAddress').click(function(){
		var houseNumber = Math.floor(Math.random() * 10000);
		var streetRandom = Math.floor(Math.random() * streets.length); 
		var typeRandom = Math.floor(Math.random() * types.length);
		var cityRandom = Math.floor(Math.random() * cities.length);
		var stateRandom = Math.floor(Math.random() * states.length);
		var zipRandom = Math.floor(Math.random() * zipcodes.length);

		//var houseNumber = numberRandom;
		var streetName = streets[streetRandom];
		var streetType = types[typeRandom];
		var city = cities[typeRandom];
		var state = states[stateRandom];
		var zipcode = zipcodes[zipRandom];
		//PEMDAS

		//Math.floor((Math.random() * 10) + 1); //will generate a random number between 1 - 10.
		
		$('address.destination').html( houseNumber + ' ' + streetName + ' ' + streetType + '<br/>' ).append( city + ', ' + state + ' ' + zipcode );

	});

});
