"use strict";

const express = require('express');
const Client = require('node-ssdp').Client;

let client = new Client();
let app = express();

client.on('response', function (headers, statusCode, rinfo) {
});

app.get('/', function (req, res) {
    client.search('urn:schemas-upnp-org:device:SeatManager:1');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});