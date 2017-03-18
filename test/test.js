var core = require('../core')

describe('GitHub API', function () {
    describe('/repos endpoint', function () {
        it('should return 404 for unknown repo', function () {
            return core.get("repos/antontsv/blah")
                .expectStatusCode(404)
                .expectJsonProperty("message","Not Found")
                .done()
        });

        it('should return 200 for existing public repo', function () {
            return core.get("repos/antontsv/webservice-check")
            .expectJsonProperty("id",82895274)
            .expectJsonProperty("private",false)
            .expectStatusCode(200)
            .done()
        });

    });
});
