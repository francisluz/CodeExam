"use strict";
/**
 * Francis Luz 30/10/2016
 * Converts from degrees to radians.
 * @param {number} degrees.
 */
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

/**
 * Calculate a distance between two points.
 * object format: {latitude:{string}, longitude:{string}}
 * @param {object} startPoint.
 * @param {object} endPoint.
 */
module.exports = {
    Distance: function(startPoint, endPoint){
        var decimals = 2;
        var meanEarthRadius = 6371; // km

        if(startPoint && endPoint){

            //Parse Points to Float
            var startLat    = parseFloat(startPoint.latitude);
            var startLon    = parseFloat(startPoint.longitude);
            var endLat      = parseFloat(endPoint.latitude);
            var endLon      = parseFloat(endPoint.longitude);

            //Converts from degrees to radians
            var degLat      = Math.radians(endLat - startLat);
            var degLon      = Math.radians(endLon - startLon);
            var degStartLat = Math.radians(startLat);
            var degEndLat   = Math.radians(endLat);

            var formule = Math.sin(degLat / 2) * Math.sin(degLat / 2) +
                        Math.sin(degLon / 2) * Math.sin(degLon / 2) * Math.cos(degStartLat) * Math.cos(degEndLat);
            var circle = 2 * Math.atan2(Math.sqrt(formule), Math.sqrt(1 - formule));
            var distance = meanEarthRadius * circle;

            return Math.round(distance * Math.pow(10, decimals)) / Math.pow(10, decimals);
        } else {
            return 0;
        }
    }
};