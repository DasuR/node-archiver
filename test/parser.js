/*global before,describe,it */
var fs = require('fs');

var assert = require('chai').assert;

var common = require('./helpers/common');
var HashStream = common.HashStream;
var UnBufferedStream = common.UnBufferedStream;
var WriteHashStream = common.WriteHashStream;
var binaryBuffer = common.binaryBuffer;

var archiver = require('../lib/archiver');

var testDate = new Date('Jan 03 2013 14:26:38 GMT');
var testDate2 = new Date('Feb 10 2013 10:24:42 GMT');

describe('parser', function() {

  describe('tar', function() {

  });


  describe('zip', function() {

  });

});