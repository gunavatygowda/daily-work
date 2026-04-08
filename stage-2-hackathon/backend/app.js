const express = require('express');
const cors = require('cors');
const app = express();
const securityRoutes = require('./routes/securityRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/security', securityRoutes);

module.exports = app;