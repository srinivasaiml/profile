const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// THIS IS THE MOST IMPORTANT STEP: LOAD AND TEST ENVIRONMENT VARIABLES
dotenv.config();

// --- TEST CODE TO FIND THE PROBLEM ---
console.log('====================================================');
console.log('--- SERVER STARTING: CHECKING .ENV VARIABLES ---');
console.log('EMAIL_USER loaded on start:', process.env.EMAIL_USER);
console.log('If the value above is "undefined", your .env file is in the wrong location.');
console.log('====================================================');
// --- END OF TEST CODE ---


const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
const { generalLimiter, contactLimiter } = require('./middleware/rateLimiter');


// Connect to database
connectDB();

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration - Essential for connecting frontend and backend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware - THIS MUST BE BEFORE YOUR ROUTES
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Trust proxy (important for rate limiting if behind a proxy like Nginx or Heroku)
app.set('trust proxy', 1);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running successfully',
  });
});

// API routes
app.use('/api/', generalLimiter); // General rate limiter for all /api/ routes
app.use('/api/contact', contactLimiter, contactRoutes); // Specific limiter and routes for contact

// Handle undefined routes
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Error handling middleware (must be the last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`
🚀 Server is running in ${process.env.NODE_ENV} mode on port ${PORT}
`);
});

// Graceful shutdown for unhandled errors
process.on('unhandledRejection', (err, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', err);
  server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  server.close(() => process.exit(1));
});

module.exports = app;