const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const userInfoRouter = require('./userInfo');
const mypageRouter = require('./mypage');


router.use('/board', boardRouter);

router.use('/userInfo', userInfoRouter);

router.use('/mypage', mypageRouter);

module.exports = router;
