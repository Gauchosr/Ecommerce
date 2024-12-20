//Rotta API per ottenere i dati dalla fakestoreapi

const axios = require('axios');

exports.articoli = async (req, res) => {
    try {
       const apiUrl = "https://fakestoreapi.com/products?limit=10";
       const response = await axios.get(apiUrl);
       res.json(response.data);
    }
    catch (error) {
        console.log(error);
    }   
};