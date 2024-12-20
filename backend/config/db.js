const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ Connessione a MongoDB riuscita');
    } catch (error) {
      console.error('❌ Errore nella connessione a MongoDB:', error.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
  