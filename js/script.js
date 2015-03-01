var createGrid = function(side) {

	// Create width of grid
    for (var i = 0; i < side; i++) {
        var newRect = $('<div class="rectangle"></div>');
        $('#container').append(newRect);
    };

    // Create height of grid
    for (var i = 0; i < side; i++) {
    	var newBox = $('<div class="box"></div>');
    	$('.rectangle').append(newBox);
    };

    // Set width and height of each box
    $('.box').css({'width': 960/side + 'px', 'height': 960/side + 'px'});

}

var colorBox = function() {

    // Changes background color of box on hover
    $('.box').on('mouseenter', function() {
    	$(this).addClass('highlight');
    });

}

$(document).ready(function() {

	// Create 16x16 grid on page load
	createGrid(16);
	colorBox();

    // Make custom grid
    $('button').on('click', function() {
    	$('.rectangle').remove();
    	var side = prompt('Enter number of squares per side');
    	createGrid(side);
    	colorBox();
    });

});