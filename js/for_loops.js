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

//FunctionCall
console.log(showMultiplicationTable(7));