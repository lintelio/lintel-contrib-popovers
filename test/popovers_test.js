'use strict';

var grunt = require('grunt');
var gm = require('gm');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.popovers = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  xs: function (test) {
    test.expect(2);

    gm.compare('test/tmp/xs.png', 'test/expected/xs.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  sm: function (test) {
    test.expect(2);

    gm.compare('test/tmp/sm.png', 'test/expected/sm.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  md: function (test) {
    test.expect(2);

    gm.compare('test/tmp/md.png', 'test/expected/md.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  lg: function (test) {
    test.expect(2);

    gm.compare('test/tmp/lg.png', 'test/expected/lg.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  xl: function (test) {
    test.expect(2);

    gm.compare('test/tmp/xl.png', 'test/expected/xl.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  "2xl": function (test) {
    test.expect(2);

    gm.compare('test/tmp/2xl.png', 'test/expected/2xl.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  "3xl": function (test) {
    test.expect(2);

    gm.compare('test/tmp/3xl.png', 'test/expected/3xl.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
  max: function (test) {
    test.expect(2);

    gm.compare('test/tmp/max.png', 'test/expected/max.png', function(err, isEqual, equality, raw, path1, path2) {
      test.ifError(err);
      test.ok(isEqual, 'Image equality is: ' + equality);
      test.done();
    });
  },
};
