const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
      required: [true, 'Owner name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    title: {
      type: String,
      required: [true, 'Portfolio title is required'],
      default: 'Full Stack Developer Portfolio',
      trim: true,
    },
    bio: {
      type: String,
      default: '',
      maxlength: [1000, 'Bio cannot exceed 1000 characters'],
    },
    contact: {
      email: { type: String, default: '' },
      github: { type: String, default: '' },
      linkedin: { type: String, default: '' },
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: section count (populated externally)
portfolioSchema.virtual('sectionCount', {
  ref: 'Section',
  localField: '_id',
  foreignField: 'portfolioId',
  count: true,
});

// Increment view count
portfolioSchema.methods.incrementViews = async function () {
  this.views += 1;
  return this.save();
};

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
