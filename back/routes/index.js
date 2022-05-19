const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const userInfoRouter = require('./userInfo');
const mypageRouter = require('./mypage');
const chatRouter = require('./chat');



router.use('/board', boardRouter);

router.use('/userInfo', userInfoRouter);

router.use('/mypage', mypageRouter);

router.use('/chat', chatRouter);

module.exports = router;
