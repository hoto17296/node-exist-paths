var existPaths = require('.');
var assert = require('assert');

describe('existPaths', function() {

  var EXIST_FILE = './index.js';
  var NOT_EXIST_FILE = './not_exist_file';

  it('filters from arguments', function() {
    var paths = existPaths(NOT_EXIST_FILE, EXIST_FILE);
    assert.deepEqual(paths, [ EXIST_FILE ]);
  });

  it('filters from array', function() {
    var paths = existPaths([ NOT_EXIST_FILE, EXIST_FILE ]);
    assert.deepEqual(paths, [ EXIST_FILE ]);
  });

});
