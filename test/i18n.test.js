'use strict';

var i18n = require('../');
var path = require('path');

var localesDir = path.join(__dirname, 'locales');

describe('i18n', function() {
  beforeEach(function() {
    i18n.configure({
      directory: localesDir
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

  it('works with string replacement', function() {
    expect(i18n.t('greetingWithName', 'Gerhard')).to.equal('Good Morning Gerhard');
  });

  it('works with object notation', function() {
    expect(i18n.t('greetings.morning')).to.equal('Good Morning');
    expect(i18n.t('greetings.evening')).to.equal('Good Evening');
  });

  it('works with string replacement and object notation', function() {
    expect(i18n.t('greetingsWithName.morning', 'Daniel')).to.equal('Good Morning Daniel');
    expect(i18n.t('greetingsWithName.evening', 'Daniel')).to.equal('Good Evening Daniel');
  });

  context('with different defaultLocale', function() {
    beforeEach(function() {
      i18n.configure({
        directory: localesDir,
        defaultLocale: 'af'
      });
    });

    it('uses the given defaultLocale', function() {
      expect(i18n.locale).to.equal('af');
      expect(i18n.t('greeting')).to.equal('Goeie Môre');
    });
  });

  context('with a custom object notation', function() {
    beforeEach(function() {
      i18n.configure({
        directory: localesDir,
        objectNotation: '#'
      });
    });

    it('uses the given object notation', function() {
      expect(i18n.t('greetings#morning')).to.equal('Good Morning');
      expect(i18n.t('greetings#evening')).to.equal('Good Evening');
    });
  });

  describe('.setLocale', function() {
    it('sets the locale', function() {
      i18n.setLocale('af');

      expect(i18n.locale).to.equal('af');
      expect(i18n.t('greeting')).to.equal('Goeie Môre');
    });
  });
});
