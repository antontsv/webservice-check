# Web Service check 
[![Build Status](https://travis-ci.org/antontsv/webservice-check.svg?branch=master)](https://travis-ci.org/antontsv/webservice-check)

Sample package to show how to test REST web service/API [for example Github API]
using node JS

# Vagrant setup
You can run test in a virtual box, using vagrant:
```sh
vagrant plugin install vagrant-cachier
vagrant up
vagrant ssh
GITHUB_TOKEN="your-api-token" npm test
```

To obtain API token to go: 
[Your Github Settings](https://github.com/settings/tokens) and create a token with `public_repo` scope
