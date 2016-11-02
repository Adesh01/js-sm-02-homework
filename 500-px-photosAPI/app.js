$(function() {
  // DOM is now ready // instructions: https://github.com/500px/500px-js-sdk or 500px/api-documentation
	  _500px.init({
	    sdk_key: '51d49f188669e076620d6783b323825da885815a' // key found in the 500px.com/settings/application
	  });


  	var addPhotosToScreen = function (response) {
    	//console.log(response.data.photos);
    	response.data.photos.forEach(function(photo, index) {
    		console.log(photo);
    		$('div.images').append('<img class="image" src="'+ photo.image_url + '">');

    		//var $image = $('<img>').attr('src', photo.image_url);
    		//$('div.images').append( $image );
    	});
	}


	$('a#login').click(function(){
		_500px.login();
	});
	
	_500px.on('authorization_obtained', function () {

		//Hide login btn
		$('div.sign-in-view').hide();
		//show Photos
		$('div.image-results-view').show();
    	//alert('You have logged in');
    	console.log(navigator);
    	if (navigator.geolocation) { 		//how to get the geolocation on your computer
    		navigator.geolocation.getCurrentPosition( function(position){
    			//console.log(position);
    			var geoQuery = position.coords.latitude + ',' + position.coords.longitude + ',' + 25 + 'mi';	//gets the coordinates
    			_500px.api('/photos/search', { geo: geoQuery, rpp:28, page: 1, image_size: 3 }, addPhotosToScreen);
    		});
    	}
    });
  

});
