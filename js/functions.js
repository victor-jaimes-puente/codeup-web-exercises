"use strict";
(function(){


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello (name){
   return(name);
}

    console.log(sayHello("Victor"));
    /**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage= sayHello("Victor");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName=("Victor");
    console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)

 */
function isTwo(number) {
return 2 === number;
}

    console.log(isTwo(2));
    console.log(isTwo(3));
    console.log(isTwo(4));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
    1 bill and percentage
    2 multiply bill by percentage -> var decimalPercentage
    3 decimalPercentage / 100 -> tip amount
 */
function calculateTip(percentage, total){
    return (percentage * total) ;
}
console.log(calculateTip(.20, 20));
console.log(calculateTip(0.25, 25.50));
    console.log(calculateTip(0.15, 33.42));

    /**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 1 what is the total? -> total
 2  percentage to be tipped -> percentage
 3 alert the tip
     */
// var whatisTotal = prompt("What is the total?");
// var whatPercentage = prompt("What percentage would you like to tip");
//
// alert("You should tip " + calculateTip(whatPercentage, whatisTotal ) + " dollars");
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 applyDiscount
 1 regular price
 2 discount percent
 3 return the regular price minus discount.
 */
function applyDiscount(regularPrice, discount){
    return regularPrice - ( regularPrice * discount);
}
console.log(applyDiscount(50, .2));
})();