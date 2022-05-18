const pool = require('../../db');
const p2p = require('../../utils/p2pserver.js');
// { connectToPeer, getPeers, broadcasting }


const connectToPeer = (req, res) => {
    const { ipAddress, port } = req.body
    connectedIP = ipAddress;

    let fullAddress = "ws://" + ipAddress + ":" + port;
    console.log(fullAddress)
    console.log("connectToPeer")
    res.send(connectToPeer(fullAddress));
};

const getPeers = (req, res) => {
    res.send(getPeers());
};

const sendMessage = (req, res) => {
    let data = {
        "message": req.body.msg,
        "type": parseInt(req.body.type)
    }
    // console.log(data)
    broadcasting(data);
};


module.exports = {
    connectToPeer,
    getPeers,
    sendMessage,
    // chatting,
}











// const io = require('socket.io')(server, {
//     cors: { origin: '*' },
// })
// const chat = io.of('/chat')

// console.log(chat)

// const chatting = (req, res) => {
//     chat.on('connection', socket => {
//         let c_id
//         socket.on('joinRoom', chatRoom => {
//             c_id = chatRoom
//             socket.join(chatRoom)
//             console.log('current_room : ', chatRoom)
//         })

//         socket.on('leaveRoom', chatRoom => {
//             socket.leave(chatRoom)
//             console.log('leave room : ', chatRoom)

//         })

//         socket.on('message', (msg) => {
//             const { author, data, c_id: curr_id } = msg
//             console.log(msg)

//             chat.to(curr_id).emit('send', msg)
//         })

//         socket.on('disconnect', () => {
//             console.log(c_id, '번 나감~')
//             socket.leave(c_id)
//         })
//     })
// }