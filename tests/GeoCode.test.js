'use strict';
const assert = require('assert');
var GeoCode = require('../shared/GeoCode.js');

describe('GeoCode Distance', function() {
    it('Test GeoCode calculation Distance function', function(done){
        assert.deepEqual(GeoCode.Distance(null,null), 0);
        assert.deepEqual(GeoCode.Distance({latitude:'53.3762215',longitude:'-6.3984635'}, {latitude:'53.3393',longitude:'-6.2576841'}),10.2);

        done();
    });
});