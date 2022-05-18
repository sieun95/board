const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');


app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true
}));

app.use(router);

app.listen(9400, () => {
    console.log('http://localhost:9400')
})

//p2p sever
const { initP2PServer } = require('./utils/p2pserver.js');
const p2pPort = parseInt(process.env.P2P_Port) || 6001; // 6001
const p2pserver = initP2PServer(p2pPort);

// const io = require('socket.io')(p2pserver,{
//     cors: { origin: '*' },
// })

// const chat = io.of('/chat')

// console.log(chat)
// chat.on('connection', socket =>{
//     let c_id
//     socket.on('joinRoom', chatRoom => {
//         c_id = chatRoom
//         socket.join(chatRoom)
//         console.log('current_room : ',chatRoom)
//     })

//     socket.on('leaveRoom', chatRoom => {
//         socket.leave(chatRoom)
//         console.log('leave room : ', chatRoom)
        
//     })

//     socket.on('message', (msg)=> {
//         const {author, data, c_id:curr_id} = msg
//         console.log(msg)

//         chat.to(curr_id).emit('send',msg)
//     })

//     socket.on('disconnect',()=>{
//         console.log(c_id,'번 나감~')
//         socket.leave(c_id)
//     })
// })