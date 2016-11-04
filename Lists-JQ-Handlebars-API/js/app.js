$(document).ready(function(){

//display List
	$.ajax({
		url: 'http://www.kameronzach.com/todo/api/',
		method: 'get', //pushing things up
		data: { action :'displayList', list_id: 34, token: '58097cbe1a49b' },
		dataType: 'json',
		//cache: false,
		success: function(data) {
			console.log(data);
			$(data.items).each(function(index, item){ //iterates through the array
					console.log(item);
					addItem( item.text, item.id, item.completed );
				});
			}
	});

//update the h1 content with new title of list:
	$.ajax({
		url: 'http://www.kameronzach.com/todo/api/',
		method: 'post', //pushing things up
		data: { action :'renameList', title: 'Awesome Things To Do', list_id: 34, token: '58097cbe1a49b' },
		dataType: 'json',
		//cache: false,
		success: function(data) {
			$('h1').html(data.title);
			}
	});

	//update Title Name on H1 click:
	$('h1').on('click', function(){

		var listItem = $(this);
		var itemId = $(this).parents('li').data('item-id');

			$.ajax({
				url: 'http://www.kameronzach.com/todo/api/',
				method: 'post', //pushing things back
				data: { action :'updateItem', text:'Today\'s List',list_id: 34, completed: true, token: '58097cbe1a49b', item_id: itemId },
				dataType: 'json',
				success: function(data) {
					console.log(data);
					var newTitle = prompt('please update your List Title', '');
					$('h1').html(newTitle);
				},
				error: function() {

					alert('Please update your list name');
				}
			});	

		});


	function addItem(text, itemId, completed){

		// 3. Make sure input isn't empty INPUT != ''
		if( text == '' ){
			alert('Yo, we need an item...');
			return;
		}

		var listItemHTML = $('script#listHtml').html();
		var listItemTemplate = Handlebars.compile(listItemHTML);
		if (completed == 0) {
			var checkedState = false;
		} else {
			var checkedState = true;
		}
		var itemData = { listItem: text, deleteText: 'Remove', listItemID: itemId, checked: checkedState };
		var newHTML = listItemTemplate( itemData );
		// 4. Append item to list
		
		$('ul#list').append( newHTML );

		//input.val('');
		//input.focus();
		
	}
	//update Status -keep box checked
	$('ul#list').on('change', 'input', function() {
		
		
		var listItem = $(this);
		var itemId = listItem.data('item-id');
		var completed = ( $(this).is(":checked") ) ? true : false;
		

		console.log(itemId);
		
		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post', //pushing things back
			data: { action :'updateItemStatus',list_id: 34, completed: completed, token: '58097cbe1a49b', item_id: itemId },
			dataType: 'json',
			success: function(data) {
					
					//$(data.items).each(function(index, value, status){ //iterates through the array
						console.log(data);
						//addItem( status.text, status.id, status.completed[1] );
					//});
				}
				
			
			});	
	});


	$('#composer').submit(function(e){

		e.preventDefault();
		// 2. Get value from input
		var input = $('input#new-thing');
		var inputValue = input.val();

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post', //pushing things back
			data: { action :'newItem', list_id: 34, token: '58097cbe1a49b', text: inputValue },
			dataType: 'json',
			success: function(data){

				console.log( data );
				addItem(inputValue, data.item_id);

			}
		});	

	});

	$('#list').on('change', 'input[type=checkbox]', function(){

		if( $(this).is(':checked') ){
			$(this).parent().addClass('done');
		}else{
			$(this).parent().removeClass('done');
		}

	});

	//$('#list').on('click', 'input[type=checkbox]', function(){


	//});

	$('#list').on('click', 'a.deleteItem', function(event){

		event.preventDefault();

		var listItem = $(this);
		var itemId = $(this).parents('li').data('item-id');

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post', //pushing things back
			data: { action :'deleteItem', list_id: 34, token: '58097cbe1a49b', item_id: itemId },
			dataType: 'json',
			success: function(data) {
				console.log(data);
				listItem.parents('li').slideUp(900, function(){

					listItem.remove();

				});
			},
			error: function() {

				alert('Hey something went wrong');
			}
		});	

	});
	
	//let user make new List
	$('body').on('click', 'a.create', function(e) {
		e.preventDefault();

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post', //pushing things back
			data: { action :'newList', title:'User\'s List', list_id:106, token: '580fda0f49673' },
			dataType: 'json',
			success: function(data) {
				console.log(data);
				$('ul#listtwo').html('<li><input type="text"></li>');
				var input = $('input');
				var inputValue = input.val();
				$('input').blur( function() {
					
					$('ul#listtwo').html( inputValue )
				})

			}

		});

		

	});

	$('input[type=checkbox]').click(function(){

	// 	// check if parent HAS CLASS
	// 	// use item PROP
	// 	// .is


		if( $(this).parent().hasClass('done') ){
			$(this).parent().removeClass('done');
		}else{
			$(this).parent().addClass('done');
		}

	// 	// if( $(this).prop('checked') == true ){
	// 	// 	$(this).parent().removeClass('done');
	// 	// }else{
	// 	// 	$(this).parent().addClass('done');
	// 	// }

	// 	// if( $(this).is(':checked') ){
	// 	// 	$(this).parent().removeClass('done');
	// 	// }else{
	// 	// 	$(this).parent().addClass('done');
	// 	// }

	});


	// $('.fa-pencil').click(addItem);
	
	//CRUD create-read-update-delete
});





