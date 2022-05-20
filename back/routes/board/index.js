const express = require('express');
const router = express.Router();
const boardController = require('./board.controller');

router.get('/view', boardController.view);

router.post('/write', boardController.write);

router.post('/modify', boardController.modify);

router.get('/list', boardController.list);



module.exports = router;