# express-appengine-handlers

[![Build Status](https://travis-ci.org/home-buddy/express-appengine-handlers.svg?branch=master)](https://travis-ci.org/home-buddy/express-appengine-handlers) [![Circle CI](https://circleci.com/gh/home-buddy/express-appengine-handlers.svg?style=shield)](https://circleci.com/gh/home-buddy/express-appengine-handlers) [![npm version](https://badge.fury.io/js/express-appengine-handlers.svg)](http://badge.fury.io/js/express-appengine-handlers)

Lifecycle request handlers for express apps running in [Google App Engine Managed VMs](https://cloud.google.com/appengine/docs/managed-vms/)

### Usage

```js
var express = require('express'),
    aeHandlers = require('express-appengine-handlers'),
    app = express();

app.use(aeHandlers);

app.listen(1337);
```

You can now test by going to `http://localhost:1337/_ah/health`

