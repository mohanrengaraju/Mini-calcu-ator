const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const calculationRoutes = require('./routers/calculation');

app.use(cors());
app.use(express.json());
app.use('/api/calculations', calculationRoutes);

mongoose.connect('mongodb://localhost:27017/calculatorDB')
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));
