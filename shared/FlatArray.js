"use strict";

/**
 * Francis Luz 30/10/2016
 * This function will flatten an array of arbitrarily nested arrays of integers into a flat array of integers.
 * @param {array} nestedArray - The original array.
 * @param {array} flatArray - (Optional) The array where we'll be pushed the value.
 */
module.exports = function FlatArray(nestedArray, flatArray) {
    if (flatArray == undefined){
      flatArray = [];
    }

    if(nestedArray instanceof Array){
      nestedArray.forEach(function(item, index, array){
          if(item instanceof Array){
              FlatArray(item, flatArray);
          } else {
            flatArray.push(item);
          }
      });
    }

    return flatArray;
};