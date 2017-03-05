var core = require('../core')

describe('GitHub API', function () {
    describe('/test endpoint', function () {

        it('should return 403', function () {
            return core.get("test").expectStatusCode(403).done()
        });

    });
});
