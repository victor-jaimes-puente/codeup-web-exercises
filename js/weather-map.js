'use strict';


$('#inputButton').click(function () {
    var userInput = $('#userInput').val();
    console.log(userInput);
    geocode(userInput, mapboxToken).then(function (result) {

        console.log(result);
        map.setCenter(result);
        map.setZoom(10);

        var reversed = result.reverse();
        console.log(reversed);
    });

});

$.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + '/37.8267,-122.4233').done(function (data) {
// dateCorrectionFunction
    function dateCorrection(time) {
        var dateObject = new Date(time * 1000);
        var dateStringed = (dateObject.toString());
        // console.log(dateStringed);
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
    // CHANGING DATE FOR TITLE

    // TODAY
    var dateTodaySplit = todayDate.split(' ');
    var dateTodayStringed = (dateTodaySplit[0] + ' ' + dateTodaySplit[1] + ' ' + dateTodaySplit[2] + ' ' + dateTodaySplit[3]);
    // console.log(dateTodayStringed);

    // DAY2
    var day2DateSplit = day2Date.split(' ');
    var day2DateStringed = (day2DateSplit[0] + ' ' + day2DateSplit[1] + ' ' + day2DateSplit[2] + ' ' + day2DateSplit[3]);
    // console.log(day2DateStringed);
    //DAY3
    var day3DateSplit = day3Date.split(' ');
    var day3DateStringed = (day3DateSplit[0] + ' ' + day3DateSplit[1] + ' ' + day3DateSplit[2] + ' ' + day3DateSplit[3]);
    // console.log(day3DateStringed);


// var for today summary string
    var summaryToday = weatherToday.summary;
    var summaryDay2 = weatherTom.summary;
    var summaryday3 = weatherday3.summary;
    // console.log(summaryDay2);
    // console.log(summaryToday);
    // console.log(summaryday3);
// var set for icons
    var todayIcon = weatherToday.icon;
    var tomorrowIcon = weatherTom.icon;
    var day3Icon = weatherday3.icon;
    // console.log(todayIcon);
    // console.log(tomorrowIcon);
    // console.log(day3Icon);
// var set for wind
    var todayWind = weatherToday.windSpeed;
    var tomorrowWind = weatherTom.windSpeed;
    var day3Wind = weatherday3.windSpeed;
    // console.log(todayWind);
    // console.log(tomorrowWind);
    // console.log(day3Wind);

// var set for tempHigh
    var todayTempHigh = weatherToday.temperatureHigh;
    var tomorrowTempHigh = weatherTom.temperatureHigh;
    var day3TempHigh = weatherday3.temperatureHigh;
    // console.log(todayPressure);
    // console.log(tomorrowPressure);
    // console.log(day3Pressure);
    // console.log(data.daily.data[0]);
// var set for tempLow
    var todayTempLow = weatherToday.temperatureLow;
    var tomorrowTempLow = weatherTom.temperatureLow;
    var day3TempLow = weatherday3.temperatureLow;

// set var for icon

// var set array of all
    var todayAll = [dateTodayStringed, todayTempHigh, todayTempLow, todayWind, todayIcon, summaryToday];
    var tomorrowAll = [day2DateStringed, tomorrowTempHigh, tomorrowTempLow, tomorrowWind, tomorrowIcon, summaryDay2];
    var day3All = [day3DateStringed, day3TempHigh, day3TempLow, day3Wind, day3Icon, summaryday3];
    // console.log(todayAll);
    // console.log(tomorrowAll);
    // console.log(day3All);
    // // console.log(data.daily.data[0]);

// ICONS

    var icons = [
        {
            name: 'clearDay',
            condition: 'clear-day',
            class: 'wi wi-day-sunny'
        },
        {
            name: 'clearNight',
            condition: 'clear-night',
            class: 'wi wi-night-clear'
        },
        {
            name: 'rain',
            condition: 'rain',
            class: 'wi wi-night-clear'
        },
        {
            name: 'snow',
            condition: 'snow',
            class: 'wi wi-snow'
        },
        {
            name: 'sleet',
            condition: 'sleet',
            class: 'wi wi-slee'
        },
        {
            name: 'windy',
            condition: 'wind',
            class: 'wi wi-windy'
        },
        {
            name: 'fog',
            condition: 'fog',
            class: 'wi wi-fog'
        },
        {
            name: 'cloudy',
            condition: 'cloudy',
            class: 'wi wi-cloudy'
        },
        {
            name: 'partCloudy',
            condition: 'partly-cloudy-day',
            class: 'wi wi-day-cloudy-high'
        },
        {
            name: 'partCloudyNight',
            condition: 'partly-cloudy-night',
            class: 'wi wi-night-alt-cloudy'
        }

    ];
    var bucket = '';

// FUNCTION.FOR.ICONS
    function assignIcon(condition) {
        icons.forEach(function (icon) {
            if (condition === icon.condition) {
                bucket += icon.class;
            }
        });
        return bucket;
    }

// CREATION.OF.CARDS

// CARD1
    $('#cardTitle1').text('' + todayAll[0]);
    $('#cardText1').html('High' + ': ' + todayAll[1] + '<br>' + 'Low' + ': ' + todayAll[2] + '<br>' + ' Wind: ' + todayAll[3] + '<br>' + '<br>' + todayAll[5]);
    $('#icon1').addClass(assignIcon(todayAll[4]));
// CARD2
    $('#cardTitle2').text('' + tomorrowAll[0]);
    $('#cardText2').html('High' + ': ' + tomorrowAll[1] + '<br>' + 'Low' + ': ' + tomorrowAll[2] + '<br>' + ' Wind: ' + tomorrowAll[3] + '<br>' + '<br>' + tomorrowAll[5]);
    $('#icon2').addClass(assignIcon(tomorrowAll[4]));
// CARD3
    $('#cardTitle3').text('' + day3All[0]);
    $('#cardText3').html('High' + ': ' + day3All[1] + '<br>' + 'Low' + ': ' + day3All[2] + '<br>' + ' Wind: ' + day3All[3] + '<br>' + '<br>' + day3All[5]);
    $('#icon3').addClass(assignIcon(day3All[4]));

    // console.log(data);

});

// MAP

// mapbox
mapboxgl.accessToken = mapboxToken;
console.log(mapboxToken);

var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/navigation-guidance-night-v4",
    zoom: 10,
    center: [-97.7437, 30.2711]

});


