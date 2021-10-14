const express = require('express');
const ta05Controller = require('../controllers/ta05');
const router = express.Router();

router.get('/', ta05Controller.getIndex);

router.post('/changeStyle', ta05Controller.changeStyle);

router.get('/reset', ta05Controller.reset);

router.get('/counter/increment', ta05Controller.counterIncrement);
router.get('/counter/decrement', ta05Controller.counterDecrement);

module.exports = router;