/**
 * Seed Script — populates MongoDB with all 5 required portfolio sections
 * Run: node scripts/seed.js
 */
require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio.model');
const Section = require('../models/Section.model');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clean existing data
    await Portfolio.deleteMany({});
    await Section.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create portfolio
    const portfolio = await Portfolio.create({
      owner: 'Student Developer',
      title: 'CET138 Full Stack Development Portfolio',
      bio: 'A comprehensive ePortfolio demonstrating mastery of full stack web development technologies, built with the MERN stack following MVC architecture principles.',
      contact: {
        email: 'student@university.ac.uk',
        github: 'https://github.com/student',
        linkedin: 'https://linkedin.com/in/student',
      },
    });

    console.log(`✅ Portfolio created: ${portfolio._id}`);

    // Create all 5 required sections
    const sections = [
      {
        portfolioId: portfolio._id,
        type: 'fullstack',
        title: 'Full Stack Development',
        overview: 'Full stack development encompasses the complete spectrum of web application engineering...',
        keyPoints: [
          { heading: 'Frontend Layer', body: 'React, HTML, CSS, JavaScript — user-facing presentation.' },
          { heading: 'Backend Layer', body: 'Node.js, Express — server logic and REST API design.' },
          { heading: 'Database Layer', body: 'MongoDB with Mongoose ODM for data persistence.' },
          { heading: 'MVC Architecture', body: 'Clean separation of Model, View, and Controller concerns.' },
        ],
        order: 0,
      },
      {
        portfolioId: portfolio._id,
        type: 'html',
        title: 'HTML — Structure & Semantics',
        overview: 'HyperText Markup Language (HTML5) is the structural skeleton of every web page...',
        keyPoints: [
          { heading: 'Semantic Elements', body: 'header, nav, main, article, section, footer.' },
          { heading: 'Accessibility', body: 'ARIA roles, alt text, keyboard navigation.' },
          { heading: 'Forms & Validation', body: 'Native HTML5 form validation and input types.' },
        ],
        order: 1,
      },
      {
        portfolioId: portfolio._id,
        type: 'css',
        title: 'CSS — Style & Layout',
        overview: 'Cascading Style Sheets transforms raw HTML structure into compelling visual experiences...',
        keyPoints: [
          { heading: 'Grid & Flexbox', body: 'Two-dimensional and one-dimensional layout systems.' },
          { heading: 'Custom Properties', body: 'CSS variables for theming and design tokens.' },
          { heading: 'Animations', body: 'Keyframe animations and transitions for rich UI.' },
        ],
        order: 2,
      },
      {
        portfolioId: portfolio._id,
        type: 'bootstrap',
        title: 'Bootstrap — Rapid UI Framework',
        overview: 'Bootstrap 5 is the world\'s most popular CSS framework...',
        keyPoints: [
          { heading: '12-Column Grid', body: 'Responsive layout with breakpoint-aware columns.' },
          { heading: 'Component Library', body: 'Cards, modals, navbars, badges out of the box.' },
          { heading: 'Utility Classes', body: 'Rapid styling without custom CSS.' },
        ],
        order: 3,
      },
      {
        portfolioId: portfolio._id,
        type: 'javascript',
        title: 'JavaScript — Logic & Interactivity',
        overview: 'JavaScript (ES2023+) is the programming language of the web...',
        keyPoints: [
          { heading: 'ES6+ Syntax', body: 'Arrow functions, destructuring, modules, async/await.' },
          { heading: 'DOM Manipulation', body: 'querySelector, event listeners, classList API.' },
          { heading: 'React Hooks', body: 'useState, useEffect, custom hooks for stateful logic.' },
        ],
        order: 4,
      },
    ];

    await Section.insertMany(sections);
    console.log(`✅ Seeded ${sections.length} sections`);
    console.log('\n🎉 Database seeded successfully!\n');

  } catch (err) {
    console.error('❌ Seed error:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

seed();
