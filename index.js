'use strict';

var path = require('path');
var fs = require('fs');
var util = require('util');

var i18n = {
  configure: function(options) {
    if (options == null) options = {};
    i18n.directory = options.directory;
    i18n.locales = {};
    fs.readdirSync(i18n.directory).forEach(function(filename) {
      var ext = path.extname(filename);
      var name = path.basename(filename, ext);
      i18n.locales[name] = require(path.join(i18n.directory, filename));
    });
    i18n.locale = options.defaultLocale;
  },

  setLocale: function(locale) {
    i18n.locale = locale;
  },

  translate: function(phrase) {
    var args = [].slice.call(arguments);
    var localeObject = i18n.locales[i18n.locale];
    if (phrase.indexOf('.') > -1) {
      phrase.split('.').forEach(function(segment) {
        localeObject = localeObject[segment];
      });
      phrase = localeObject;
    } else {
      phrase = localeObject[phrase];
    }
    args[0] = phrase;
    return util.format.apply(util, args);
  }
};

i18n.t = i18n.translate;

module.exports = i18n;
