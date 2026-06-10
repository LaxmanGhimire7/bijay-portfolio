const express = require('express');
const router = express.Router();
const { getSections, getSectionByType, upsertSection, deleteSection } = require('../controllers/section.controller');

router.get('/:portfolioId', getSections);
router.get('/:portfolioId/:type', getSectionByType);
router.post('/', upsertSection);
router.delete('/:id', deleteSection);

module.exports = router;
