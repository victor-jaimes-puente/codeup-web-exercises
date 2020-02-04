"use strict";
// console.log("Hello from external JavaScript");

// var welcomeAlert = alert("Welcome to my Website!");
// var userFavoriteColor =(prompt("What is your favorite color?"));
// alert(userFavoriteColor + "is also my favorite color!");
//

// Problem 1. How much will it cost to rent x number of movies for y number of days at z cost per day.
// How many movies will you be renting?
// How long will you be renting the movies for?
// How much does it cost to rent a movie for 1 day?

var movie1Days = Number(prompt("For how many days do you plan rent the first movie?"));
console.log(movie1Days);
console.log(typeof movie1Days);
var movie2Days = Number(prompt("For how many days do you plan rent the second movie?"));
console.log(movie1Days);
console.log(typeof movie1Days);
var movie3Days = Number(prompt("For how many days do you plan rent the first movie?"));
console.log(movie1Days);
console.log(typeof movie1Days);
var costPerDay = Number(3);
var totalCost = (movie1Days + movie2Days + movie3Days) * costPerDay;
console.log(totalCost);
alert("Your total cost comes out to " + totalCost + " dollars.");


