/*eslint no-process-exit:0*/

'use strict';

var express = require('express'),
    router = express.Router();

router.get('/_ah/health', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('ok');
});

module.exports = router;
