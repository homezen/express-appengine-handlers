'use strict';

var request = require('supertest'),
    express = require('express'),
    proxyquire = require('proxyquire'),
    aeHandlers = require('./'),
    app = express();

process.exit = function () {};

app.use(aeHandlers);

describe('App Engine Handlers', function() {
    it('handles the health request properly', function(done) {
        request(app)
            .get('/_ah/health')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(200, 'ok', done);
    });

    it('handles the start request properly', function(done) {
        request(app)
            .get('/_ah/start')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(200, 'ok', done);
    });

    it('handles the stop request properly', function(done) {
        request(app)
            .get('/_ah/stop')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(200, 'ok', done);
    });
});
