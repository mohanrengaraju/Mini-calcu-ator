const express = require('express');
const router = express.Router();
const Calculation = require('../models/CalculationSchema');

router.post('/', async (req, res) => {
  const { expression, result } = req.body;
  const newCalc = new Calculation({ expression, result });
  await newCalc.save();
  res.json(newCalc);
});

router.get('/', async (req, res) => {
  const calculations = await Calculation.find();
  res.json(calculations);
});

module.exports = router;
