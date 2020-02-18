(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            // TODO: return the proper value
            return (Math.PI * Math.sqrt(this.radius));
        },
        logInfo: function (doRounding) {
            if (doRounding === true) {
                console.log((Math.round(Math.PI * Math.sqrt(this.radius))));
            }else {
                console.log((Math.PI * Math.sqrt(this.radius)).toFixed(2));

            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);

    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
function ifRadius(input){
    return circle.radius = input;
}
ifRadius(5);
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
