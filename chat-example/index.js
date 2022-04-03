//const express = require('express');
import express from 'express';
const app = express();
import http from 'http';
//const http = require('http');
const server = http.createServer(app);
import { Server } from "socket.io";
//const { Server } = require("socket.io");
const io = new Server(server);
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  //res.sendFile(new URL('./index.html', import.meta.url));
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});