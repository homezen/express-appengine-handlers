# express-appengine-handlers

[![Build Status](https://travis-ci.org/homezen/express-appengine-handlers.svg?branch=master)](https://travis-ci.org/homezen/express-appengine-handlers)
[![Circle CI](https://circleci.com/gh/homezen/express-appengine-handlers.svg?style=shield)](https://circleci.com/gh/homezen/express-appengine-handlers)
[![codecov](https://codecov.io/gh/homezen/express-appengine-handlers/branch/master/graph/badge.svg)](https://codecov.io/gh/homezen/express-appengine-handlers)
[![npm version](https://badge.fury.io/js/express-appengine-handlers.svg)](http://badge.fury.io/js/express-appengine-handlers)
[![Package Quality](http://npm.packagequality.com/shield/express-appengine-handlers.svg)](http://packagequality.com/#?package=express-appengine-handlers)

[![bitHound Overall Score](https://www.bithound.io/github/homezen/express-appengine-handlers/badges/score.svg)](https://www.bithound.io/github/homezen/express-appengine-handlers)
[![bitHound Dependencies](https://www.bithound.io/github/homezen/express-appengine-handlers/badges/dependencies.svg)](https://www.bithound.io/github/homezen/express-appengine-handlers/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/homezen/express-appengine-handlers/badges/code.svg)](https://www.bithound.io/github/homezen/express-appengine-handlers)

Lifecycle request handlers for express apps running in [Google App Engine Managed VMs](https://cloud.google.com/appengine/docs/managed-vms/)

### Install

```bash
npm i --save express-appengine-handlers
```

### Usage

```js
var express = require('express'),
    aeHandlers = require('express-appengine-handlers'),
    app = express();

app.use(aeHandlers);

app.listen(1337);
```

You can now test by going to `http://localhost:1337/_ah/health`
