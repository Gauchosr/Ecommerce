// Import delle librerie
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const connectDB = require('./config/db');

// Import delle rotte
const authRoutes = require('./routes/auth');
const articoliRoutes = require('./routes/articoli');

// Creazione del server express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotte
app.use('/api/auth', authRoutes);
app.use('/api/data', articoliRoutes);

// Connessione al database
connectDB();

// Avvia il server
app.listen(PORT, () => {
    console.log(`🚀Server avviato su http://localhost:${PORT}`);
});

