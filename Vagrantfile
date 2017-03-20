# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.synced_folder ".", "/vagrant-src"
  config.vm.define "box-web-service-check" do |d|
    d.vm.box = "ubuntu/xenial-cloud"
    d.vm.box_url = "https://cloud-images.ubuntu.com/xenial/20170311/xenial-server-cloudimg-amd64-vagrant.box"
    d.vm.hostname = "web-service-tests"
    d.vm.network "private_network", ip: "10.200.200.201"
    d.vm.provision :shell, path: "provision/nodejs.sh"
    d.vm.provider "virtualbox" do |v|
      v.memory = 1024
    end
  end
end
