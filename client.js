"use strict";

const express = require('express');
const Client = require('node-ssdp').Client;

let client = new Client();
let app = express();
let a = 10;

client.on('response', function (headers, statusCode, rinfo) {
    a+=1;
});

app.get('/SeatManager', function (req, res) {
    client.search('urn:schemas-upnp-org:device:SeatManager:1');
    res.send(a);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});