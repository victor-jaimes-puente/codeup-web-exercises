'use strict';
$.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + '/37.8267,-122.4233').done(function (data) {
// dateCorrectionFunction
    function dateCorrection(time) {
        var dateObject = new Date(time * 1000);
        var dateStringed = (dateObject.toString());
        console.log(dateStringed);
        return dateStringed;
    }

// three days including today
    var weatherToday = data.daily.data[0];
    var weatherTom = data.daily.data[1];
    var weatherday3 = data.daily.data[2];
// testing date crrection function

// dateCorrection(weatherToday.time);

// dateVariable Creation
    var todayDate = dateCorrection(weatherToday.time);
    var day2Date = dateCorrection(weatherTom.time);
    var day3Date = dateCorrection(weatherday3.time);

});

