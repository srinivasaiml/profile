# Portfolio Backend API

A robust Node.js/Express.js backend for handling contact form submissions with MongoDB integration.

## Features

- ✅ Contact form submission handling
- ✅ MongoDB integration with Mongoose
- ✅ Input validation and sanitization
- ✅ Rate limiting for security
- ✅ CORS configuration
- ✅ Error handling middleware
- ✅ Admin endpoints for managing contacts
- ✅ Contact statistics
- ✅ Environment-based configuration

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Configuration

Create a `.env` file in the server directory with the following variables:

```env
# MongoDB Connection URL
MONGODB_URL=mongodb://localhost:27017/portfolio

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# For local MongoDB installation
mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 4. Run the Server

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### Public Endpoints

#### POST /api/contact
Submit a new contact form message.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a potential project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! Thank you for contacting me.",
  "data": {
    "id": "contact_id",
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "subject": "Project Inquiry",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Admin Endpoints

#### GET /api/contact
Get all contact messages with pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status (new, read, replied)

#### GET /api/contact/stats
Get contact statistics.

#### GET /api/contact/:id
Get a specific contact message by ID.

#### PATCH /api/contact/:id/status
Update contact status.

**Request Body:**
```json
{
  "status": "read"
}
```

#### DELETE /api/contact/:id
Delete a contact message.

## Database Schema

### Contact Model

```javascript
{
  firstName: String (required, max: 50 chars),
  lastName: String (required, max: 50 chars),
  email: String (required, valid email),
  subject: String (required, max: 200 chars),
  message: String (required, max: 1000 chars),
  status: String (enum: ['new', 'read', 'replied'], default: 'new'),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

- **Rate Limiting**: 5 contact form submissions per 15 minutes per IP
- **Input Validation**: Comprehensive validation using express-validator
- **CORS Protection**: Configured for specific frontend origin
- **Helmet**: Security headers
- **Data Sanitization**: Email normalization and input trimming

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Database connection issues
- Duplicate entries
- Invalid ObjectIds
- Server errors

## Development

### Adding Authentication

To secure admin endpoints, add authentication middleware:

```javascript
const authMiddleware = (req, res, next) => {
  // Implement your authentication logic
  // Check JWT token, API key, etc.
  next();
};

// Apply to admin routes
router.get('/', authMiddleware, getAllContacts);
```

### Email Notifications

You can extend the contact controller to send email notifications:

```javascript
const nodemailer = require('nodemailer');

// Add to createContact function
const sendNotificationEmail = async (contactData) => {
  // Configure nodemailer and send email
};
```

## Deployment

### Environment Variables for Production

```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-portfolio-domain.com
```

### PM2 Configuration

```json
{
  "name": "portfolio-backend",
  "script": "server.js",
  "instances": "max",
  "exec_mode": "cluster",
  "env": {
    "NODE_ENV": "production"
  }
}
```

## Testing

You can test the API using tools like Postman or curl:

```bash
# Test contact form submission
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message from the API."
  }'
```

## Support

For any issues or questions, please check the error logs and ensure:
1. MongoDB is running and accessible
2. Environment variables are properly configured
3. All dependencies are installed
4. Port 5000 is available