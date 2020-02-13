
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names1 = ["Ay", "Bee", "Cii", "Dee", "Eeei",];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names1.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
for (var i=0; i < names1.length; i++){
        console.log(names1[i]);
    }
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i=0; i < names1.length; i++) {
        console.log(names1[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
        for (var i=0; i < names1.length; i++) {
            console.log(names1[i]);
        }
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function index0(array) {
        return array[0];
    }
    function index1(array) {
        return array[1];
    }
    function index2(array) {
        return array[2];
    }
    console.log(index0(names1));
    console.log(index1(names1));
    console.log(index2(names1));
