// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV
};