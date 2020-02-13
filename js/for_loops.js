"use strict";

/*
will create a function that prints multiplication table of a number based on the input which should be within 1 - 10.

 */

function showMultiplicationTable(input){
    for(var i = 1; i <= 10; i++){
        var equals = input * i;

        var all1 = input + " X " + i + " = " + equals;

        console.log(all1);
    }
}

console.log(showMultiplicationTable(7));
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

for (var i = 1; i <= 10; i++){
    var numList = (randomNumber(20,200) + " =");
    console.log(numList);
}
