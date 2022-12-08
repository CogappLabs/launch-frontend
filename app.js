const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const port = process.env.PORT || 4001;

const app = express();

app.use( express.static(__dirname + '/frontend/launch-frontend/build/'));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname + '/frontend/launch-frontend/build', 'index.html')));

const server = http.createServer(app);

const io = socketIo(server);
io.set('origins', '*:*')

io.on('connection', (socket) => {
    socket.screen = 0;
    socket.room = 'Default';
    socket.screenLaunched = false;
    const screens = [];
    for (let [id, socket] of io.of("/").sockets) {
        screens.push({
            screenId: id,
            screenNum: socket.screen,
        });
    }

    socket.on('joinRoom', (room) => {
        socket.join(room);
        socket.room = room;
    });

    socket.on('setScreen', (screen) => {
       socket.screen = screen;
    });

    socket.on('launchScreens', () => {
        io.to(socket.room).emit('launchScreens', {launched: true})
    });

    socket.on('launchScreen', (screen) => {
        for (let i = 0; i < this.screens.length; i++) {
            const screenNum = screen[i].screenNum;
            if (screenNum == screen) {
                socket.to(screen[i].screenId).emit('launchScreen', screen)
            }
        }
    });

    socket.on('setLaunched', (launched) => {
        socket.screenLaunched = launched;
    });

});

server.listen(port, () => console.log(`Listening on port ${port}`));