const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  expression: String,
  result: Number,
});

module.exports = mongoose.model('Calculation', calculationSchema);
