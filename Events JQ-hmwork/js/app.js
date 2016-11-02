$(document).ready(function(){

	var myButton = $('input#myButton');

	var myJSButton = document.getElementById('myButton');

	myButton.on('mouseover', function(e){
		console.log(e.screenX);
		$(myButton).css('backgroundColor', 'yellow');

	});

	myButton.on('mouseout', function(e){

		$('body').css('backgroundColor', 'blue');

	});

	$('#myText').on('keydown', function(e){
		e.preventDefault();
		$('input#myText').css('padding', '20px');
		$('input#myText').css('border-radius', '30px');
		$('input#myText').css('text-decoration', 'none');
		$('input#myText').css('backgroundColor', 'grey');
	});

	$('.image').on('click', function() {
			$('img.image').css('border', '3px solid #222');
	});
	$('.image').on('drag', function() {
			$('img.image').css('border', '12px solid #fff');
	});

	$(window).on('resize', function(e){
		$('body').css('backgroundColor', 'purple');
	});
	

	/*$(window).on('scroll', function(e){

		// console.log(e);
		console.log( $(this).scrollTop() );

		if( $(this).scrollTop() > 800 ){

			$('body').css('backgroundColor', 'yellow');

		}else if( $(this).scrollTop() > 400 ){

			$('body').css('backgroundColor', 'red');

		}else if( $(this).scrollTop() > 200 ){

			$('body').css('backgroundColor', 'green');

		}

	});*/

});




