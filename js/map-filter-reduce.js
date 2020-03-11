'use strict';
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//


console.log('INPARABLE');

// PART1
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
var threeOrMore = users.filter(user => user.languages.length >= 3);
// console.log(threeOrMore);


// PART2
// Use .map to create an array of strings where each element is a user's email address
var emailList = users.map(user => user.email += '');
// console.log(emailList);

// PART3
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

console.log(users.length);
var totalYears = users.reduce( (total, user ) => total + user.yearsOfExperience, 0);
// console.log(totalYears);
var meanTotalYears = totalYears/users.length;
// console.log(meanTotalYears);

// PART4
// Use .reduce to get the longest email from the list of users.

for (let user of users){
    console.log(`${user.email} ${user.email.length}`);
}

var longestEmail = users.reduce((longest, user)=>{
    // console.log(user.email.length);
    console.log(longest);
    if (user.email.length > longest.length) {
        return user.email;
    } else {return longest}
},'b');
console.log(longestEmail);
// PART5

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

