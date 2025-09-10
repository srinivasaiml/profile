# Portfolio Backend API

Node.js + Express + MongoDB backend for handling contact form submissions and portfolio data.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file with your configuration
cp .env.example .env

# Start development server
npm run dev

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
backend/
├── config/             # Database configuration
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # MongoDB models
├── routes/            # API routes
├── utils/             # Utility functions
├── server.js          # Main server file
└── package.json       # Dependencies
```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
# MongoDB Connection
MONGODB_URL=mongodb://localhost:27017/portfolio

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📡 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/stats` - Get statistics
- `GET /api/contact/:id` - Get specific message
- `PATCH /api/contact/:id/status` - Update status
- `DELETE /api/contact/:id` - Delete message

## 🚀 Deployment

Deploy to platforms like:
- Railway
- Heroku
- DigitalOcean
- AWS EC2

Make sure to set all environment variables on your hosting platform.