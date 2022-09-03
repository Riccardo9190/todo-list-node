require('dotenv').config();
const MONGO_URL= process.env.MONGO_URL;

const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 

mongoose.connect(MONGO_URL)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log(err))
