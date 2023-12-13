const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 3001

// Import routes
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');

app.use(cors());
app.use(express.json());

// Use routes
app.use('/form', formRoutes);
app.use('/response', responseRoutes);

app.use('/', (req, res) => {
    res.send('Introducing BOLO FORMS Server');
});

const connectionWithDb = require("./config/database")
connectionWithDb();

// Start the server
app.listen(PORT, async () => {
    console.log(`Server started ${PORT}`);
});
