const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());


//Rotta API per ottenere i dati
app.get('/api/data', async (req, res) => {
    try {
       const apiUrl = "https://fakestoreapi.com/products?limit=10";
       const response = await axios.get(apiUrl);
       res.json(response.data);
    }
    catch (error) {
        console.log(error);
    }   
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});