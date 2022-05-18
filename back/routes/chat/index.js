const express = require('express');
const router = express.Router();
const chatController = require('./chat.controller');
// { connectToPeer, getPeers, broadcasting }

router.post('/connectToPeer', chatController.connectToPeer);
router.post('/getPeers', chatController.getPeers);
router.post('/broadcasting', chatController.sendMessage);

module.exports = router;
