# i18n that works!
[![Circle CI](https://circleci.com/gh/Gerhardk/i18n-that-works.svg?style=svg)](https://circleci.com/gh/Gerhardk/i18n-that-works)
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

## Options

0. `directory`: path to your locales directory.

0. `defaultLocale`: the locale to use by default. (`"en"` if not specified)

0. `objectNotation`: the separator to use for object notation. (`"."` if not specified)

## Features

0. String replacement:

   Locale JSON:
   ```json
   {
     "greeting": "Hello %s"
   }
   ```

   Code:
   ```javascript
   i18n.t('greeting', 'Gerhard'); //=> "Hello Gerhard"
   ```

0. Object Notation:

   Locale JSON:
   ```json
   {
     "greetings": {
       "morning": "Good Morning"
     }
   }
   ```

   Code:
   ```javascript
   i18n.t('greetings.morning'); //=> "Good Morning"
   ```

0. And BOTH!!!

   Locale JSON:
   ```json
   {
    "greetings":{
      "morning": "Good Morning %s"
    }
   }
   ```

   Code:
   ```javascript
   i18n.t('greetings.morning', 'Gerhard'); //=> "Good Morning Gerhard"
   ```
