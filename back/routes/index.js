const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const authRouter = require('./auth');
const mypageRouter = require('./mypage');
const chatRouter = require('./chat');



router.use('/board', boardRouter);

router.use('/auth', authRouter);

router.use('/mypage', mypageRouter);

router.use('/chat', chatRouter);

module.exports = router;
