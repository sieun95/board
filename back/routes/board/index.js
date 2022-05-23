const express = require('express');
const router = express.Router();
const boardController = require('./board.controller');

router.post('/view', boardController.viewAction);
router.get('/view/:idx', boardController.view);

router.post('/write', boardController.write);
router.post('/modify', boardController.modify);

router.get('/list', boardController.list);

router.post('/comment', boardController.commentAction);
router.get('/comment/:idx', boardController.comment);

router.get('/like', boardController.likeAction);



module.exports = router;