"use strict";
(function () {


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 *
 * //Create a prompt which ask user if they would like to input a number -> if yes
 *  // have user input a number on the next prompt
 *
 *  // first prompt: even or odd?
 *  // second prompt: number + 100
 *  // third prompt: neg or pos.
 *
 */
var firstQuestion = confirm("Would you like to enter a number?");
        if (firstQuestion) {
        console.log("firstQuestion: Yes");
        var userNumber = Number(prompt("Please enter a number"));
        console.log("user number " + userNumber);
// evenOrOdd
         if ((userNumber %2 ) === 0 ){
         console.log("UserNumberEven")
         alert("Your number is Even")
        }else {
         alert("Your Number is Odd")
         console.log("userNumberOdd")}
// userNumber plus 100
         alert("Your number plus 100 is: " + (userNumber + 100));
         console.log("added 100 to user number");
// posOrNeg
        if (userNumber >= 0){
            console.log("User number is positive");
            alert("Your number is Positive.");
        }else{console.log("UserNumber is Negative");
             alert("Your number is negative.")}
    }




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 *
 *
 * // analyzeColor
 * // input: string of a color name
 * // only include colors below when matching
 * // else: I dont understand that input
 *
 */

function analyzeColor(color) {
    var returnColor = '';
 if (color === 'red'){
     console.log('red');
     returnColor = "Apples are Red";
 }else if ((color === 'orange')){
     console.log('orange');
     returnColor = "Orange is soothing";
 }else if ((color === 'yellow')){
     console.log('yellow');
     returnColor = "I hate yellow teeth";
 }else if (color === 'green'){
        console.log("green");
       returnColor = "Green is the color of money";
 }else if (color === 'blue'){
        console.log("blue");
       returnColor= "the sky is blue, because god loves the infantry.";
 }else if (color === 'indigo'){
        console.log("indigo");
        returnColor =  "Indigo, IDK amigo";
 }else if (color === 'violet'){
        console.log("violet");
        returnColor = "Violet? More like Violent lol";
 }else { returnColor = "We dont recognise that color."
 }
    console.log(returnColor);
 }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor2(color) {
    var returnColor = '';
    switch (color){
        case "red":
        console.log("red")
        returnColor = "Apples are Red";
        break;
        case "orange" :
        console.log('orange');
        returnColor = "Orange is soothing";
        break;
        case "yellow":
        console.log('yellow');
        returnColor = "I hate yellow teeth";
        break;
        case "green":
        console.log("green");
        returnColor = "Green is the color of money";
        break;
        case "blue":
        console.log("blue");
        returnColor= "the sky is blue, because god loves the infantry.";
        break;
        case "indigo":
        console.log("indigo");
        returnColor =  "Indigo, IDK amigo";
        break;
        case "violet":
        console.log("violet");
        returnColor = "Violet? More like Violent lol";
        break;
        default:
        returnColor = "We dont recognise that color."
    }
    return (returnColor);
}
analyzeColor2("red");
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt("Enter a color");
// console.log(userColor);
// var userColorAnalyzed = analyzeColor2(userColor);
// console.log(userColorAnalyzed);
// alert(userColorAnalyzed);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 * 1 switch is : lucky number
 * 2 case each different percentage
 * 3 excecute the math for every discount at every case
 * 4 return the new discounted total
 */
function calculatedTotal(luckyNumber, cost) {
    switch (luckyNumber){
        case 1:
            console.log("1");
            var discount = (cost * .10) ;
            console.log(discount);
            var newCost = (cost - discount);
            console.log(newCost);
            break;
        case 2:
            console.log("2");
             discount = (cost * .25) ;
            console.log(discount);
             newCost = (cost - discount);
            console.log(newCost);
            break;
        case 3:
            console.log("3");
            discount = (cost * .35) ;
            console.log(discount);
            newCost = (cost - discount);
            console.log(newCost);
            break;
        case 4:
            console.log("4");
            discount = (cost * .50) ;
            console.log(discount);
            newCost = (cost - discount);
            console.log(newCost);
            break;
        default: console.log("na");

    }

}

    console.log(calculatedTotal(2, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
    prompt user for total bill
    then apply according discount
 */


// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);


 var totalCost = prompt("What is your total cost?");
 console.log(totalCost);
 console.log(luckyNumber);
 alert(calculatedTotal(luckyNumber, totalCost));

// ------  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -


})();
