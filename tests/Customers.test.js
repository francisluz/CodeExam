const assert = require('assert');
var Customer = require('../model/Customer.js');
var nearestCustomers = require('./NearestCustomers.json');
//Intercom office
//53.3393,-6.2576841
// var intercomOffice  = {latitude:'53.3393',longitude:'-6.2576841'};
//My Location
//53.3762215,-6.3984635
// var customerLocation = {latitude:'52.986375',longitude:'-6.043701'};
// console.log('Distance: '+ GeoCode.Distance( customerLocation, intercomOffice));

describe('Nearest Customers List', function() {
    it('Test Nearest function', function(done){
        assert.deepEqual(Customer.Nearest(), nearestCustomers);

        done();
    });
});

var customerList = Customer.Nearest();

console.log('*** Customers nearest list *** ');
console.log(JSON.stringify(customerList))
console.log('Total: ' + customerList.length);
// console.log(database.Customers()[0].user_id);console.log('Customers list: ' + JSON.stringify(sortedList));
// console.log('Total: ' + sortedList.length);