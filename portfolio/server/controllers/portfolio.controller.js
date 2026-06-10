const Portfolio = require('../models/Portfolio.model');
const Section = require('../models/Section.model');

// @desc    Get portfolio (creates default if none exists)
// @route   GET /api/portfolio
// @access  Public
const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ isPublic: true })
      .populate('sectionCount');

    if (!portfolio) {
      portfolio = await Portfolio.create({
        owner: 'Student Developer',
        title: 'Full Stack Developer Portfolio',
        bio: 'Passionate full stack developer with expertise in the MERN stack. Building modern, scalable web applications.',
      });
    }

    await portfolio.incrementViews();

    const sections = await Section.find({ portfolioId: portfolio._id }).sort('order');

    res.status(200).json({
      success: true,
      data: { portfolio, sections },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update portfolio metadata
// @route   PUT /api/portfolio/:id
// @access  Public (demo - in prod would be auth-protected)
const updatePortfolio = async (req, res) => {
  try {
    const { owner, title, bio, contact } = req.body;
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { owner, title, bio, contact },
      { new: true, runValidators: true }
    );

    if (!portfolio) {
      return res.status(404).json({ success: false, message: 'Portfolio not found' });
    }

    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get portfolio stats
// @route   GET /api/portfolio/stats
// @access  Public
const getStats = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ success: false, message: 'No portfolio found' });
    }

    const sectionCount = await Section.countDocuments({ portfolioId: portfolio._id });
    const sections = await Section.find({ portfolioId: portfolio._id }, 'type title');

    res.status(200).json({
      success: true,
      data: {
        views: portfolio.views,
        sectionCount,
        sections,
        createdAt: portfolio.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getPortfolio, updatePortfolio, getStats };
