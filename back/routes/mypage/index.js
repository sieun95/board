const express = require('express');
const router = express.Router();
const mypageController = require('./mypage.controller');

router.get('/profile/:idx', mypageController.profile);

router.post('/profile', mypageController.profileAction);

module.exports = router;