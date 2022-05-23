const express = require('express');
const router = express.Router();
const chatController = require('./chat.controller');
// { connectToPeer, getPeers, broadcasting }

router.get('/', chatController.chatting);


module.exports = router;
