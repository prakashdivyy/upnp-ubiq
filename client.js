"use strict";

const express = require('express');
const Client = require('node-ssdp').Client;
const sleep = require('sleep');

let app = express();

app.get('/', function (req, res) {
    let client = new Client();
    client.on('response', function (headers, statusCode, rinfo) {
        let dev = headers.LOCATION;
        res.send(dev);
    });
    client.search('urn:schemas-upnp-org:device:SeatManager:1');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});