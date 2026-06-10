const mongoose = require('mongoose');

const codeExampleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, default: 'html' },
  code: { type: String, required: true },
  description: { type: String, default: '' },
});

const sectionSchema = new mongoose.Schema(
  {
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Portfolio',
      required: true,
    },
    type: {
      type: String,
      enum: ['fullstack', 'html', 'css', 'bootstrap', 'javascript'],
      required: [true, 'Section type is required'],
    },
    title: {
      type: String,
      required: [true, 'Section title is required'],
    },
    overview: {
      type: String,
      required: [true, 'Section overview is required'],
    },
    keyPoints: [
      {
        heading: String,
        body: String,
      },
    ],
    codeExamples: [codeExampleSchema],
    liveDemo: {
      url: { type: String, default: '' },
      description: { type: String, default: '' },
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index: one section per type per portfolio
sectionSchema.index({ portfolioId: 1, type: 1 }, { unique: true });

const Section = mongoose.model('Section', sectionSchema);
module.exports = Section;
