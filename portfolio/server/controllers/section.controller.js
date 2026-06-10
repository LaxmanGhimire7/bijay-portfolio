const Section = require('../models/Section.model');
const Portfolio = require('../models/Portfolio.model');

// @desc    Get all sections for a portfolio
// @route   GET /api/sections/:portfolioId
// @access  Public
const getSections = async (req, res) => {
  try {
    const sections = await Section.find({ portfolioId: req.params.portfolioId }).sort('order');
    res.status(200).json({ success: true, count: sections.length, data: sections });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single section by type
// @route   GET /api/sections/:portfolioId/:type
// @access  Public
const getSectionByType = async (req, res) => {
  try {
    const section = await Section.findOne({
      portfolioId: req.params.portfolioId,
      type: req.params.type,
    });

    if (!section) {
      return res.status(404).json({ success: false, message: `Section '${req.params.type}' not found` });
    }

    res.status(200).json({ success: true, data: section });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create or update a section (upsert)
// @route   POST /api/sections
// @access  Public
const upsertSection = async (req, res) => {
  try {
    const { portfolioId, type, title, overview, keyPoints, codeExamples, liveDemo, order } = req.body;

    const portfolio = await Portfolio.findById(portfolioId);
    if (!portfolio) {
      return res.status(404).json({ success: false, message: 'Portfolio not found' });
    }

    const section = await Section.findOneAndUpdate(
      { portfolioId, type },
      { portfolioId, type, title, overview, keyPoints, codeExamples, liveDemo, order },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: section });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a section
// @route   DELETE /api/sections/:id
// @access  Public
const deleteSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    if (!section) {
      return res.status(404).json({ success: false, message: 'Section not found' });
    }
    res.status(200).json({ success: true, message: 'Section removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getSections, getSectionByType, upsertSection, deleteSection };
