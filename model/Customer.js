'use strict';
var database = require('../data/database.js');
var GeoCode = require('../shared/GeoCode.js');
const intercomOffice = {latitude:'53.3393',longitude:'-6.2576841'};
const maxDistance = 100;

function SortById (current, next){
    if(current.user_id > next.user_id){
        return 1;
    } else if(current.user_id < next.user_id){
        return -1;
    } else {
        return 0;
    }
}

module.exports = {
    Nearest : function(){
        var arrCustomers = [];
        database.Customers().forEach(function(item){
            var customerLocation = {latitude: item.latitude, longitude: item.longitude};
            item.distance = GeoCode.Distance(customerLocation, intercomOffice);
            if(item.distance < maxDistance){
                arrCustomers.push(item);
            }
        });

        var sortedList = arrCustomers.sort(SortById);

        return sortedList;
    }
};