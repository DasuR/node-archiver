/**
 * node-archiver
 *
 * Copyright (c) 2012-2013 Chris Talkington, contributors.
 * Licensed under the MIT license.
 * https://github.com/ctalkington/node-archiver/blob/master/LICENSE-MIT
 */

var inherits = require('util').inherits;

var ArchiveParser = require('./core');
var headers = require('../headers/zip');
var util = require('../util');

var ArchiveParserZip = module.exports = function(options) {
  options = util.defaults(options, {});

  ArchiveParser.call(this, options);
};

inherits(ArchiveParserZip, ArchiveParser);
