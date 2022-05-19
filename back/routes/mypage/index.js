const express = require('express');
const router = express.Router();
const mypageController = require('./mypage.controller');

router.post('/profile', mypageController.profile);


module.exports = router;