var core = require('../core')

describe('GitHub API', function () {
    describe('/repos endpoint', function () {
        it('should return 404 for unknown repo', function () {
            return core.get("repos/antontsv/blah").expectStatusCode(404).done()
        });

        it('should return 200 for existing public repo', function () {
            return core.get("repos/antontsv/webservice-check").expectStatusCode(200).done()
        });

    });
});
