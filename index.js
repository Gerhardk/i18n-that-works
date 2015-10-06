'use strict';

var path = require('path');

var i18n = {
  configure: function(options) {
    if (options == null) options = {};
    this.directory = options.directory;
    this.locales = {};
    this.locales.en = require(path.join(this.directory, 'en.json'));
  },
  translate: function(phrase) {
    return this.locales.en[phrase];
  }
};

i18n.t = i18n.translate;

module.exports = i18n;
