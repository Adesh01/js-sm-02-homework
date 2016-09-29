$(document).ready(function(){

	$('input#makeLetter').click(function(){

		
		var texts = new Array();
		var company = $('input#company').val();
		var friendsName = $('input#friendN').val();
		var adjective = new Array();
		var time = $('input#time').val();
		var occupation = new Array();
		var name = $('input#name').val();
		var noun = new Array();
		var verb = $('input#verb').val();
		var adverb = new Array();
		var animal = $('inputName#animal').val();
		var movieName = $('inputName#nameMovie').val();

		adjective[0] = $('input#adjectiveOne').val();
		adjective[1] = $('input#adjectiveTwo').val();
		adjective[2] = $('input#adjectiveThree').val();
		adjective[3] = $('input#adjectiveFour').val();
		adjective[4] = $('input#adjectiveFive').val();
		adjective[5] = $('input#adjectiveSix').val();
		adjective[6] = $('input#adjectiveSeven').val();
		adjective[7] = $('input#adjectiveEight').val();
		adjective[8] = $('input#adjectiveNine').val();

		occupation[0] = $('input#occupOne').val();
		occupation[1] = $('input#occupTwo').val();
		occupation[2] = $('input#occupThree').val();

		noun[0] = $('input#nounOne').val();
		noun[1] = $('input#nounTwo').val();
		noun[2] = $('input#nounThree').val();

		adverb[0] = $('input#adverbOne').val();
		adverb[1] = $('input#adverbTwo').val();

		texts[0] = 'Dear ' + company + ':';

		texts[1] = friendsName + ' worked for me as my assistant for ' + time + '. I recommend her without ' + noun[0] +'s for the ' + occupation[0] +' program.';

		texts[2] = 'While working in ' + noun[1] + ' production, I often relied on ' + friendsName + ' to put together ' + adjective[0] + ' presentations, for which she described and ' + verb +'ed the artistic approach to the project, researching ' + friendsName + ' and photographic ' + adjective[1] + ' materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ' + adjective[2] + ' and ' + adjective[3] + '.' ;

		texts[3] = 'When we went into production on the feature film ' + movieName + ', ' + friendsName + ' was able to observe every ' + noun[2] + ' of the process, ' + verb +'ing in on meetings and working with ' + animal +'s in all areas of the production from the moment the production was set in motion through the release of the film ' + time + ' later.';

		texts[4] = 'During this time, she was an ' + adjective[5] + ' ' + occupation[1] + ', often serving as my liason to scattered ' + noun[3] + ' of the crew. She also coordinated projects involving ' + adjective[4] + ' people, and her ability to work ' + adverb[0] + ' while guiding the project quickly and ' + adverb[1] + ' was ' + adjective[6] + '. For example, when we suddenly needed to reconceive several action ' + noun[4] + 's that had already been storyboarded, ' + friendsName + ' quickly found a new storyboard ' + occupation[2] + ' on location and worked with him, the stunt coordinator and the ' + occupation[3] + ' through several drafts to make sure the new ' + noun[4] + 's worked, and then ' + verb + 'ed with crew ' + noun[2] + 's from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even ' + verb[1] + 'ed in to draw a few last-minute ' + adjective[7] + ' changes herself.';

		texts[5] = friendsName +'\'s sensitivity, ' + noun[0] + ', energy and sense of ' + noun[1] + ' made working with her a/an ' + noun[2] +'. I highly recommend her as a/an ' + adjective[6] + ' addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = name ;

		$(texts).each(function(index, value){

			$('div.output').append('<p>' + value + '</p>');

		});

	});


});
