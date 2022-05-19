const pool = require('../../db');
// { connectToPeer, getPeers, broadcasting }


const chatting = (req, res) => {
    // console.log(req.body)
    res.send('chatting')
};



module.exports = {
    chatting
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