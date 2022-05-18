const express = require('express');
const router = express.Router();
const chatController = require('./chat.controller');
// { connectToPeer, getPeers, broadcasting }

router.post('/addPeer', chatController.addPeer);
router.post('/getPeers', chatController.getPeers);
router.post('/sendMsg', chatController.sendMessage);

module.exports = router;
