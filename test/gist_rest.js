var core = require('../core')

describe('GitHub API', function () {
    describe('/gists endpoint', function () {
        it.skip('should return 201 for new gist', function () {
            data = {
                "description": "web service check repo",
                "public": true,
                "files": {
                    "test.txt": {
                        "content": "This is sample content from web-service check repo"
                    }
                }
            }
            return core.post("gists", data)
                .expectStatusCode(201)
                .expectJsonProperty("description",data.description)
                .expectJsonProperty("public",data.public)
                .done()
        });

    });
});
