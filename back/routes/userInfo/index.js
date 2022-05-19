const express = require('express');
const router = express.Router();
const userInfoController = require('./userInfo.controller');

router.post('/signUp', userInfoController.signUp)

router.post('/login', userInfoController.login)

module.exports = router;