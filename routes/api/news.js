const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/news');

router.get('/getAll', ctrl.getAllNews);

router.get('/search', ctrl.getNewsByQuery);

module.exports = router;
