const express = require('express');
const router = express.Router();
const boardController = require('./board.controller');

router.get('/view/:idx', boardController.view);

router.post('/write', boardController.write);
router.post('/modify', boardController.modify);

router.get('/list', boardController.list);

router.get('/comment', boardController.comment);
router.post('/comment', boardController.commentAction);



module.exports = router;