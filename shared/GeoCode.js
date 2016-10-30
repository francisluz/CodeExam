"use strict";

// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

module.exports = {
    Distance: function(startPoint, endPoint){
        var decimals = 2;
        var meanEarthRadius = 6371; // km

        //Parse Points to Float
        var startLat    = parseFloat(startPoint.latitude);
        var endLat      = parseFloat(endPoint.latitude);
        var startLon    = parseFloat(startPoint.longitude);
        var endLon      = parseFloat(endPoint.longitude);

        //Converts from degrees to radians
        var degLat      = Math.radians(endLat - startLat);
        var degLon      = Math.radians(endLon - startLon);
        var degStartLat = Math.radians(startLat);
        var degEndLat   = Math.radians(endLat);

        var sphere = Math.sin(degLat / 2) * Math.sin(degLat / 2) +
                     Math.sin(degLon / 2) * Math.sin(degLon / 2) * Math.cos(degStartLat) * Math.cos(degEndLat);
        var circle = 2 * Math.atan2(Math.sqrt(sphere), Math.sqrt(1 - sphere));
        var distance = meanEarthRadius * circle;

        return Math.round(distance * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }
};