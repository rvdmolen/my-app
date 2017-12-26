'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3100;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
    .use((req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({server});

let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandomMockObject = (filename) => {
    const applicationRoot = __dirname.replace(/\\/g, '/');
    const mockRoot = `${applicationRoot}/mock`;
    const data = JSON.parse(fs.readFileSync(`${mockRoot}/${filename}`, 'utf8'));
    const randomEntry = getRandomInt(0, data.length);
    return data[randomEntry];
};


wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});


setInterval(() => {
    wss.clients.forEach((client) => {
        console.log('Send data');
        client.send(JSON.stringify(getRandomMockObject('mock.json')));
    });
}, 5000);





