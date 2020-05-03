const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app)
const PORT = process.env.PORT || 5000
const io = socketio(server);
const router = require("./router");

//MIDDLEWARE
app.use(cors());

//ROUTES
app.use(router);

server.listen(PORT, () => {
    console.log(`Kakarot! His Power level is over ${PORT}`);
})