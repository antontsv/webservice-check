#!/usr/bin/env bash

which npm 1>/dev/null 2>&1
if [ $? -ne 0 ];then
    echo "Update information about current debian packages..."
    sudo apt-get update
    echo "Installing node package manager..."
    sudo apt-get install -y npm nodejs-legacy
fi;

cd /vagrant-src && echo "Installing project dependencies..." && npm install

# for convenience go to directory with attached source
if [ ! -e "/home/ubuntu/.bash_login" ];then
    echo "cd /vagrant-src || echo 'Cannot cd into source directory'" > "/home/ubuntu/.bash_login"
fi;
