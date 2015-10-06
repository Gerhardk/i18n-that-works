'use strict';

var i18n = require('../');
var path = require('path');

var localesDir = path.join(__dirname, 'locales');

describe('i18n', function() {
  beforeEach(function() {
    i18n.configure({
      directory: localesDir,
      defaultLocale: 'en'
    });
  });

  it('loads locale from json', function() {
    expect(i18n.directory).to.equal(localesDir);
    expect(i18n.locales).to.deep.equal({ en: require(localesDir + '/en.json') });
  });

  it('works', function() {
    expect(i18n.t('greeting')).to.equal('Hello');
  });
});
