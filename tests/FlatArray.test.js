'use strict';
const assert = require('assert');
var flatArray = require('../shared/FlatArray.js');

describe('Flatten Array', function() {
    it('Test FlatArray function', function(done){
        assert.deepEqual(flatArray(null),[]);
        assert.deepEqual(flatArray("wwww"),[]);
        assert.deepEqual(flatArray(),[]);
        assert.deepEqual(flatArray([]),[]);
        assert.deepEqual(flatArray([1, 2, [1, 2, 3]]), [1, 2, 1, 2, 3]);
        assert.deepEqual(flatArray([1, 2, 1, 2, 3 ]), [1, 2, 1, 2, 3]);
        assert.deepEqual(flatArray([[1],[2], [1, 2], [3] ]), [1, 2, 1, 2, 3]);
        assert.deepEqual(flatArray([[1],[2], [[1], [2]], [3] ]), [1, 2, 1, 2, 3]);

        done();
    });
});