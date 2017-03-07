var assert = require('assert');
var expect = require('Chai').expect;

var ResponseAsserter = function () {
    this.ready = 0;
    this.checks = [];
    self = this;
    this.promise = new Promise(function (resolve, reject) {
        self.resolve = resolve;
        self.reject = reject;
    });
};

ResponseAsserter.prototype.scheduleAssertion = function (check) {
    this.checks.push(check);
    if (this.ready <= 0) {
    } else {
        this.executeChecks();
    }
}

ResponseAsserter.prototype.executeChecks = function (check) {
    while (c = this.checks.pop()) { 
        c();
        this.checkCompleted();
    }
}

ResponseAsserter.prototype.expectStatusCode = function (expectedStatusCode) {
    self = this
    this.scheduleAssertion(function () {
        expect(self.res.statusCode).to.equal(expectedStatusCode);
    })
    return this;
}

ResponseAsserter.prototype.setResponseObject = function (res) {
    this.res = res
}
ResponseAsserter.prototype.setResponseBody = function (body) {
    this.body = body
}
ResponseAsserter.prototype.setReady = function () {
    this.ready = 1;
    this.executeChecks();
}

ResponseAsserter.prototype.checkCompleted = function () {
    if (self.donePromiseResolve!= undefined && this.checks.length <= 0) {
        self.donePromiseResolve("test case completed execution");
    }
}

ResponseAsserter.prototype.done = function () {
    self = this;
    this.donePromise = new Promise(function (resolve, reject) {
        self.donePromiseResolve = resolve;
    });
    return this.donePromise;
}

module.exports = ResponseAsserter;
