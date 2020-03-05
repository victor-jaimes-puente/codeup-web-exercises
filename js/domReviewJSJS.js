


// Welcome to your DOM Assessment Review. This will test your knowledge of using
// JavaScript to manipulate the DOM. During the assessment, you will also have
// the option to use jQuery if you prefer.
//
//     Open up `dom-review.html` and follow the instructions:
//
//     - Allow the user to type in their favorite food into the input and append it
// to the list once the button is clicked.
//
// will link button to input
// button will take user input and add it to bottom of list
// ul ID is #favorite-food
// will create a var for UserInput
// will appaend userInput to bottom of #favorite-food


$('#add-to-list').click(function () {
  var userValue =   $('#input').val();
    console.log(userValue);
  $('#favorite-food').append('<li> '+ userValue + '</li>'
      )
});

// - When the heading 'Change Me' is double clicked, change its
// background-color to purple.

// will call h4 id of #change-me
$('#change-me').dblclick(function () {
$(this).toggleClass('pBackGround');
});

// will add a listener with Jq which will listen for a double click
// cill create a class which has a background color of purple
// once the double click is heard it will toggle the class on and off.
//




//
// - Allow the user to input their cohort name. Once Update button is clicked,
//     the text should should update with the name of the cohort.
//
// 1 link button to input
        // button id = #cohort-name
        // input id = #change-cohort
// 2 create variable from input var cohortInput =
// 3 .html var to #my-cohort

$('#change-cohort').click(function () {
        var cohortInput = $('#cohort-name').val();
        $('#my-cohort').text(cohortInput);
});



//     ```$xslt
// My Cohort: Fortuna
// ```
//
// - When 'Highlight' button is clicked, change the background color of the
// cohort name to yellow.

// 1 set listiner for button to listen for click
    // #highlight = button
//2 create a class which highlights
// 3 set toggle for class once button is clicked on #my-cohort

$('#highlight').click(function () {
        $('#my-cohort').toggleClass('highLight');
});

//
// - Write some JavaScript that changes the background-color of the container to
// pink after 3 seconds.

// Create a delay listiner for the document
// after 3000 milisec change background color to pink

$('*').delay(3000).queue(function () {
    $(this).css('background-color', 'pink');
});