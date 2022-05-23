const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const router = require('./routes');


dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(router);

const server = app.listen(9400, () => {
    console.log('http://localhost:9400')
})

const io = require('socket.io')(server, {
    cors: { origin: '*' },
})
let sockets = []
io.on('connection', socket => {
    // console.log(socket, " connected")
    sockets.push(socket)
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
        sockets.push(sockets.length)
    })
    sockets.push(sockets.length)
})