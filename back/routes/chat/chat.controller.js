const pool = require('../../db');
const p2p = require('../../utils/p2pserver.js');
// { connectToPeer, getPeers, broadcasting }


const addPeer = (req, res) => {
    console.log(req.body)
    const ipAddress = req.body.ipAddress
    const port = req.body.port
    connectedIP = ipAddress;

    let fullAddress = "ws://" + ipAddress + ":" + port;
    console.log(fullAddress)
    console.log("connectToPeer")
    res.send(p2p.connectToPeer(fullAddress));
};

const getPeers = (req, res) => {
    res.send(p2p.getPeers());
};

const sendMessage = (req, res) => {
    let data = {
        "message": req.body.msg,
        "type": parseInt(req.body.type)
    }
    // console.log(data)
    p2p.broadcasting(data);
    res.send(data)
};


module.exports = {
    addPeer,
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