"use strict";

const express = require('express');
const Client = require('node-ssdp').Client;

let client = new Client();
let app = express();

client.on('response', function (headers, statusCode, rinfo) {
    console.log('Got a response to an m-search.');
});

app.get('/', function (req, res) {
    client.search('ssdp:all');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});