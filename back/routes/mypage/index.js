const express = require('express');
const router = express.Router();
const mypageController = require('./mypage.controller');

router.get('/userInfo', mypageController.userInfo);


module.exports = router;