const express = require('express');
const router = express.Router();
const boardController = require('./board.controller');

router.get('/view', boardController.view);
router.get('/write', boardController.write);
router.get('/modify', boardController.modify);
router.get('/list', boardController.list);

module.exports = router;