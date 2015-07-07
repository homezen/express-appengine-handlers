/*eslint no-process-exit:0*/

'use strict';

var express = require('express'),
    router = express.Router();

router.get('/_ah/health', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('ok');
});

router.get('/_ah/start', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('ok');
});

router.get('/_ah/stop', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('ok');
    process.exit();
});

module.exports = router;
