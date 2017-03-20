#!/usr/bin/env bash

which node 1>/dev/null 2>&1
if [ $? -ne 0 ];then
    echo "Update information about current debian packages..."
    sudo apt-get update
    echo "Installing node JS..."
    sudo apt-get install -y nodejs
fi;
which npm 1>/dev/null 2>&1
if [ $? -ne 0 ];then
    echo "Installing node package manager..."
    sudo apt-get install -y npm
fi;

cd /vagrant-src && echo "Installing project dependencies..." && npm install

# for convenience go to directory with attached source
if [ $? -eq 0 ] && [ ! -e "$HOME/.bash_login" ];then
    echo "cd /vagrant-src" > "$HOME/.bash_login"
fi;
