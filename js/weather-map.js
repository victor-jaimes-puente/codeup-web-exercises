'use strict';
console.log('hello');
$.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+ darkSkyKey +'/37.8267,-122.4233').done(function (data) {
    // createCard(data);
    console.log(data.currently.summary);
});

// function createCard(data) {
// var result = "";
//     data.forEach(function (set) {
//         result +='<div class="card-body"></div> ';
//         result += set.currently;
//     })
// }
