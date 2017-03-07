const request = require('request').defaults(
    {
        headers: {
            'User-Agent': 'nodejs/request'
        }
    }
)
var assert = require('assert');
const apiHost = "api.github.com"
var ResponseAsserter = require('./responseAsserter');


var CoreHTTPServiceTest = function () { };
module.exports = new CoreHTTPServiceTest();

CoreHTTPServiceTest.prototype.get = function (endpointURI) {
    var asserter = new ResponseAsserter();
    request.get("https://" + apiHost + "/" + endpointURI, function (err, res, body) {
        if (err != null) {
            assert.fail("Cannot reach web service endpoint", err)
        }
        asserter.setResponseObject(res)
        asserter.setResponseBody(body)
        asserter.setReady()
    });
    return asserter;
}

