/**
 * node-archiver
 *
 * Copyright (c) 2012-2013 Chris Talkington, contributors.
 * Licensed under the MIT license.
 * https://github.com/ctalkington/node-archiver/blob/master/LICENSE-MIT
 */

require('../compat/buffer');

var inherits = require('util').inherits;
var Writable = require('stream').Writable || require('readable-stream/writable');

var util = require('../util');

var ArchiveParser = module.exports = function(options) {
  options = util.defaults(options, {
    highWaterMark: 64 * 1024
  });

  Writable.call(this, options);

  this.parser = {
    buffer: [],
    bufferLength: 0,
    parseData: {
      file: [],
      files: [],
      centralFooter: []
    }
  };

  this.once('finish', this._parseArchive);
};

inherits(ArchiveParser, Writable);

ArchiveParser.prototype._write = function(chunk, encoding, callback) {
  if (chunk.length) {
    this.parser.buffer.push(chunk);
    this.parser.bufferLength += chunk.length;
  }

  callback();
};

ArchiveParser.prototype._parseArchive = function() {
  throw new Error('method not implemented');
};

ArchiveParser.prototype.getFiles = function() {
  return this.parser.parseData.files;
};
