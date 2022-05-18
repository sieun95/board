const express = require('express');
const router = express.Router();
const userInfoController = require('./userInfo.controller');

router.get('/signUp', userInfoController.signUp)

router.get('/login', userInfoController.login)

module.exports = router;