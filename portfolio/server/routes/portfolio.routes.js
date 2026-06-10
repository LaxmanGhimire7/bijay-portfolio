const express = require('express');
const router = express.Router();
const { getPortfolio, updatePortfolio, getStats } = require('../controllers/portfolio.controller');

router.get('/', getPortfolio);
router.get('/stats', getStats);
router.put('/:id', updatePortfolio);

module.exports = router;
