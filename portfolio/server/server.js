const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolio.routes');
const sectionRoutes = require('./routes/section.routes');
const { errorHandler, notFound } = require('./middleware/error.middleware');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true }));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/sections', sectionRoutes);

// Serve static files - handle both local and Vercel
const staticPath = process.env.VERCEL 
  ? path.join(__dirname, '../client/build')  // Vercel: from /var/task/server/ -> /var/task/client/build
  : path.join(__dirname, '../client/build');  // Local: same calculation

console.log('Static files path:', staticPath);
app.use(express.static(staticPath));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  const indexPath = path.join(staticPath, 'index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath);
});

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Only listen if not running on Vercel (serverless)
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API: http://localhost:${PORT}/api\n`);
  });
}

module.exports = app;
