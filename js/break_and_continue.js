
/*
Create a file named break_and_continue.js in the js directory.
Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 */

do{
    var userNumber = Number(prompt("Enter a number"));

    if(userNumber < 1 || userNumber > 50){
        alert(userNumber + " is not between 1 and 50, please enter again");
        console.log(userNumber);
    } else if (userNumber % 2 === 0){
        alert(userNumber + " is not odd. Please enter again.");
        console.log(userNumber);
    } else if ( isNaN(userNumber)){
        alert(userNumber + " is not a number. Please enter again!");
        console.log(userNumber);
    } else {
        alert("Congrats, you picked the right number!");
        console.log(userNumber);
        break;
    }

} while (true);

for(var i = 1; i <= 50; i+=2) {
    if(i === userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log("Here's an odd number " + i);
}



