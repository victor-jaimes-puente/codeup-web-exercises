"use strict";

/* While loop that console logs
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */
// var i = 2;
// while (i < 65537){
//     console.log(i);
//     i *= 2;
// }
/*
* An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
*
* // This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
*
* 1
* create a variable (A) for the number of cones based on the output from the random number generator
* 2
* variable (B) from cones bought generator
* 3
* create loops that subtracts B from A
*  */


 //CONES
    var allCones = Math.floor(Math.random() * 50) + 50;
    var conesSold = Math.floor(Math.random() * 5) + 1;

    do {
        allCones -= conesSold;
        console.log(allCones);
        console.log(conesSold + " ConesSold");
    } while ( allCones >= 6);
    do {
        allCones--;
        console.log(allCones);
    }while (allCones >= 1);

//EndOfCones

