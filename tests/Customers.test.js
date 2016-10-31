'use strict';
const assert = require('assert');
var Customer = require('../model/Customer.js');
var nearestCustomers = require('./NearestCustomers.json');

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