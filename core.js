const request = require('request').defaults(
    {
        headers: {
            'User-Agent': 'nodejs/request',
            'Authorization': 'token ' + process.env.GITHUB_TOKEN
        },
        json: true
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

CoreHTTPServiceTest.prototype.post = function (endpointURI, data) {
    var asserter = new ResponseAsserter();
    request({
        url: "https://" + apiHost + "/" + endpointURI,
        method: "POST",
        json: data,
        headers: {
            'User-Agent': 'nodejs/request',
            'Authorization': 'token ' + process.env.GITHUB_TOKEN
        },
    }, function (err, res, body) {
        if (err != null) {
            assert.fail("Cannot reach web service endpoint", err)
        }
        if(res.statusCode != 201) {
            assert.fail(body)
        }
        asserter.setResponseObject(res)
        asserter.setResponseBody(body)
        asserter.setReady()
    });
    return asserter;
}

