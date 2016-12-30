"use strict";

const SSDP = require('node-ssdp').Server;
let server = new SSDP({
    location: require('ip').address()
});

server.addUSN('upnp:rootdevice');

server.on('advertise-alive', function (heads) {
 
});

server.on('advertise-bye', function (heads) {
 
});

server.start('0.0.0.0');