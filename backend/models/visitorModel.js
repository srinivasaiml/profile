const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  visitDate: { type: Date, default: Date.now },
});

visitorSchema.index({ visitDate: 1 }, { expireAfterSeconds: 2592000 }); // Auto-delete after 30 days

const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;