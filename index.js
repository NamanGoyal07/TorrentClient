'use strict';
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');

const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'),'utf8');

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
});








