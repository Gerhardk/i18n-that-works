# i18n that works!

## How to?

Create a locales file ...
```json
{
  "greeting": "Hello"
}
```

... and use it!
```javascript
var i18n = require('i18n-that-works');

i18n.configure({
  directory: './myLocales'
});

i18n.t('greeting'); //=> "Hello"
```

It's that easy, folks!
