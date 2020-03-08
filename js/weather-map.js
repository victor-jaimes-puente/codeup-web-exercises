'use strict';
console.log('hello');
$.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+ darkSkyKey +'/37.8267,-122.4233').done(function (data) {
    // createCard(data);
    // console.log(data.currently.time * 1000);
var dateObject = new Date(data.currently.time * 1000);
 var dateStringed = (dateObject.toString());
 return dateStringed
});
console.log(dateStringed);