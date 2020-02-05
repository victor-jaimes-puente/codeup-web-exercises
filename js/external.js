"use strict";
// console.log("Hello from external JavaScript");
//
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

// var company1Pay = Number(prompt("How much does Facebook pay per hour?"));
// var company2Pay = Number(prompt("How much does Amazon pay per hour?"));
// var company3Pay = Number(prompt("How much does Google pay per hour?"));
// var hoursCompany1 = Number(prompt("How many hours did you work at facebook?"));
// var hoursCompany2 = Number(prompt("How many hours did you work at Amazon?"));
// var hoursCompany3 = Number(prompt("How many hours did you work at Google?"));
// var totalCompany1 = company1Pay * hoursCompany1;
// var totalCompany2 = company2Pay * hoursCompany2;
// var totalCompany3 = company3Pay * hoursCompany3;
// var totalPayWeek = totalCompany1 + totalCompany2 + totalCompany3;
// alert(" Your total pay for the week will be " + totalPayWeek);

var classFull = prompt("Is the class full?");
var classTime = prompt("Does the class conflict with schedule?");
if ((classFull === "No") || (classTime === "no") || (classTime === "NO") && (classTime === "No") || (classTime === "no") || (classTime === "NO") ){
    alert("Student may enroll");
}
else {
    alert("Student my not enroll")
}

// find out if member is premium
// if premium skip item question
// find out if member purchased more than 2 items
// find out if coupon is expired
//
// var premium = prompt("Are you a premium member?");
// var moreThan2Items = prompt("Did you purchase more than two items?");
// var expired = prompt("Is the coupon expired?");
//
// var numberofItems = Number(prompt("How many items?"));
// var offIsValid = confirm("Is the offer valid?");
// var isPremiumMebmer = confirm("Are you a premium member");
//
// var discountAppliedStatus =  offIsValid && (isPremiumMebmer || numberofItems);
// alert("Can use discount" + discountAppliedStatus);