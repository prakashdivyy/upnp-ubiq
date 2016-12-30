"use strict";

const express = require('express');
const Client = require('node-ssdp').Client;

let client = new Client();
let app = express();
let dev = "";

client.on('response', function (headers, statusCode, rinfo) {
    dev = headers.LOCATION;
    //console.log(JSON.stringify(headers));
    console.log(dev);
});

app.get('/', function (req, res) {
    client.search('urn:schemas-upnp-org:device:SeatManager:1');
    res.send(dev);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});