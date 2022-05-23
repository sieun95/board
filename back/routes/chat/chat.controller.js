const pool = require('../../db');


const chatting = (req, res) => {
    console.log(req.body)
    res.send('chatting')
};



module.exports = {
    chatting,
}

