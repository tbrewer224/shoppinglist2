$(document).ready(function () {

// Disable "Add to List" when no input

$('#add-todo').on('input', function() {
	if($('input#add-todo').val().trim().length > 0)
    $('button#add-button').removeAttr('disabled');
else
    $('button#add-button').attr('disabled','disabled');
});

// Add an item if there's input

$('button#add-button').click(function() {
		$('ul').append('<li class="todo"><button class="item">Done</button>' + $('input#add-todo').val() + '</li>');
	});

//Toggle done button

$('ul').on('click', '.item', function() {
		$(this).closest('li').toggleClass('todo done');
		$(this).remove();
	});

})