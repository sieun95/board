const express = require('express');
const router = express.Router();
const boardController = require('./board.controller');

router.get('/view/:idx', boardController.view);

router.post('/write', boardController.write);
router.post('/modify', boardController.modify);

router.get('/list', boardController.list);

router.post('/comment', boardController.commentAction);
router.get('/comment/:idx', boardController.comment);




module.exports = router;