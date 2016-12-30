"use strict";

const express = require('express');
const Client = require('node-ssdp').Client;

let app = express();

app.get('/seat', function (req, res) {
    let client = new Client();
    client.on('response', function (headers, statusCode, rinfo) {
        let dev = headers.LOCATION;
        res.send(dev);
    });
    client.search('urn:schemas-upnp-org:device:SeatManager:1');
});

app.get('/door', function (req, res) {
    let client = new Client();
    client.on('response', function (headers, statusCode, rinfo) {
        let dev = headers.LOCATION;
        res.send(dev);
    });
    client.search('urn:schemas-upnp-org:device:SmartDoorManager:1');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});