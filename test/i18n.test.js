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
    expect(i18n.locales).to.deep.equal({
      en: require(localesDir + '/en.json'),
      af: require(localesDir + '/af.json')
    });
  });

  it('works with the default locale', function() {
    expect(i18n.t('greeting')).to.equal('Good Morning');
  });

  it('works with a different locale', function() {
    i18n.setLocale('af');
    expect(i18n.t('greeting')).to.equal('Goeie Môre');
  });

  it('works with string replacement', function() {
    expect(i18n.t('greetingWithName', 'Gerhard')).to.equal('Good Morning Gerhard');
  })
});
