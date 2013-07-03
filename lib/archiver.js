/**
 * node-archiver
 *
 * Copyright (c) 2012-2013 Chris Talkington, contributors.
 * Licensed under the MIT license.
 * https://github.com/ctalkington/node-archiver/blob/master/LICENSE-MIT
 */

var ArchiverTar = require('./archiver/tar');
var ArchiverZip = require('./archiver/zip');

var ArchiveParserTar = require('./parser/tar');
var ArchiveParserZip = require('./parser/zip');

var archiver = module.exports = function(type, options) {
  if (type === 'zip') {
    return new ArchiverZip(options);
  } else if (type === 'tar') {
    return new ArchiverTar(options);
  } else {
    throw new Error('Unknown archive type');
  }
};

archiver.create = archiver;

archiver.createTar = function(options) {
  return new ArchiverTar(options);
};

archiver.createZip = function(options) {
  return new ArchiverZip(options);
};

archiver.parser = function(type, options) {
  if (type === 'zip') {
    return new ArchiveParserZip(options);
  } else if (type === 'tar') {
    return new ArchiveParserTar(options);
  } else {
    throw new Error('Unknown archive type');
  }
};