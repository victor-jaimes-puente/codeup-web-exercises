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

// var for today summary string
    var summaryToday = weatherToday.summary;
    var summaryDay2 = weatherTom.summary;
    var summaryday3 = weatherday3.summary;
    console.log(summaryDay2);
    console.log(summaryToday);
    console.log(summaryday3);
// var set for icons
    var todayIcon = weatherToday.icon;
    var tomorrowIcon = weatherTom.icon;
    var day3Icon = weatherday3.icon;
    console.log(todayIcon);
    console.log(tomorrowIcon);
    console.log(day3Icon);
// var set for wind
    var todayWind = weatherToday.windSpeed;
    var tomorrowWind = weatherTom.windSpeed;
    var day3Wind = weatherday3.windSpeed;
    console.log(todayWind);
    console.log(tomorrowWind);
    console.log(day3Wind);
// var set for pressure
    var todayPressure = weatherToday.pressure;
    var tomorrowPressure = weatherTom.pressure;
    var day3Pressure = weatherday3.pressure;
    console.log(todayPressure);
    console.log(tomorrowPressure);
    console.log(day3Pressure);
    console.log(data.daily.data[0]);

// set var for icon

// var set array of all
    var todayAll = [todayDate, todayPressure, todayWind, todayIcon, summaryToday];
    var tomorrowAll = [day2Date, tomorrowPressure, tomorrowWind, tomorrowIcon, summaryday3];
    var day3All = [day3Date, day3Pressure, day3Wind, day3Icon, summaryday3];
    console.log(todayAll);
    console.log(tomorrowAll);
    console.log(day3All);
    // console.log(data.daily.data[0]);

// CARD1
    $('#cardTitle1').text('' + todayAll[0]);
    $('#cardText1').html('' + 'Pressure: ' + todayAll[1] + '<br>' + ' Wind: ' + todayAll[2] + '<br>' + todayAll[3] + '<br>' + todayAll[4]);

// CARD2
    $('#cardTitle2').text('' + tomorrowAll[0]);
    $('#cardText2').html('' + 'Pressure: '+ tomorrowAll[1] + '<br>' + ' Wind: ' + tomorrowAll[2] + '<br>' + tomorrowAll[3] + '<br>' + tomorrowAll[4]);

// CARD3
    $('#cardTitle3').text('' + day3All[0]);
    $('#cardText3').html('' + 'Pressure: '+ day3All[1] + '<br>' + ' Wind: ' + day3All[2] + '<br>' + day3All[3] + '<br>' + day3All[4]);


});



