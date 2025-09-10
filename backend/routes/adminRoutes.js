const express = require('express');
const router = express.Router();
const { protectAdmin } = require('../middleware/authMiddleware');

const Visitor = require('../models/visitorModel'); 
const Contact = require('../models/Contact'); // Using capital 'C'

router.use(protectAdmin);

router.get('/stats', async (req, res) => {
  try {
    const totalVisits = await Visitor.countDocuments();
    const totalMessages = await Contact.countDocuments();
    res.json({
      success: true,
      data: { totalVisits, totalMessages },
    });
  } catch (error) {
    console.error('--- CRASH IN /api/admin/stats ---', error);
    res.status(500).json({ success: false, message: 'Server failed to fetch stats.' });
  }
});

router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (error) {
    console.error('--- CRASH IN /api/admin/messages ---', error);
    res.status(500).json({ success: false, message: 'Server failed to fetch messages.' });
  }
});

module.exports = router;