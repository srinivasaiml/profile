// backend/middleware/visitorTracker.js
const Visitor = require('../models/visitorModel');

const trackVisitor = async (req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (ip) {
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const existingVisitor = await Visitor.findOne({
        ip: ip,
        visitDate: { $gte: twentyFourHoursAgo },
      });
      if (!existingVisitor) {
        await Visitor.create({ ip: ip });
      }
    }
  } catch (error) {
    console.error('Visitor tracking error:', error);
  } finally {
    next();
  }
};

module.exports = { trackVisitor };