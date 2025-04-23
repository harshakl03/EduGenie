const dotenv = require("dotenv");
dotenv.config();

const ENV = {
  SERV_PORT: process.env.SERV_PORT,
  DB_URL: process.env.MONGODB_URL,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
};

module.exports = ENV;
