$(document).ready(function(){

	$('input#makeLetter').click(function(){

		// var Adjective = $('input#adjective').val();
		var texts = new Array();
		var company = $('input#company').val();
		var friendsName = $('input#friendN').val();
		var adjective = new Array();
		var time = $('input#time').val();
		var occupation = new Array();
		var name = $('input#name').val();
		var noun = new Array();
		var verb = $('input#verb').val();

		adjective[0] = $('input#adjectiveOne').val();
		adjective[1] = $('input#adjectiveTwo').val();
		adjective[2] = $('input#adjectiveThree').val();
		adjective[3] = $('input#adjectiveFour').val();
		adjective[4] = $('input#adjectiveFive').val();
		adjective[5] = $('input#adjectiveSix').val();
		adjective[6] = $('input#adjectiveSeven').val();

		occupation[0] = $('input#occupOne').val();
		occupation[1] = $('input#occupTwo').val();

		noun[0] = $('input#nounOne').val();
		noun[1] = $('input#nounTwo').val();
		noun[2] = $('input#nounThree').val();


		texts[0] = 	'Dear ' + company + ':';

		texts[1] = ''+friendsName + ' worked for me as my assistant for ' + time + '. I recommend her without ' + noun[0] + '(PL) for the ' + occupation[0] +' program.';

		texts[2] = 'While working in ' + noun[1] + ' production, I often relied on ' + friendsName + ' to put together ' + adjective[0] + ' presentations, for which she described and ' + verb +'ed' + ' the artistic approach to the project, researching ' + friendsName + 'and photographic ' + adjective[1] +' materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ' + adjective[2] + ' and ' + adjective[3] + '.' ;

		texts[3] = 'When we went into production on the feature film NAME OF MOVIE,' + friendsName +' was able to observe every ' + noun[2] + '  of the process, ' + verb+'ing' + ' in on meetings and working with ANIMAL (PL) in all areas of the production from the moment the production was set in motion through the release of the film LENGTH OF TIME later.';

		texts[4] = 'During this time, she was an ' + adjective[5] + occupation[1] + ', often serving as my liason to scattered ' + noun[3] + ' of the crew. She also coordinated projects involving ' + adjective[4] + '  people, and her ability to work ADVERB #1 while guiding the project quickly and ADVERB #2 was ADJECTIVE #7. For example, when we suddenly needed to reconceive several action NOUN #5 (PL) that had already been storyboarded, FRIENDS NAME quickly found a new storyboard OCCUPATION #3 on location and worked with him, the stunt coordinator and the OCCUPATION #4 thorugh several drafts to make sure the new NOUN #5 (PL) worked, and then VERB ENDING IN "ED" with crew NOUN #3 (PL) from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even VERB ENDING IN "ED" #2 in to draw a few last-minute ADJECTIVE #8 changes herself.';

		texts[5] = ''+friendsName +'\'s sensitivity, ' + noun[0] + ', energy and sense of ' + noun[1] + ' made working with her a/an ' + noun[2] +'. I highly recommend her as a/an ' + adjective[6] + ' addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = name ;

		$(texts).each(function(index, value){

			$('div.output').append('<p>' + value + '</p>');

		});

	});


});