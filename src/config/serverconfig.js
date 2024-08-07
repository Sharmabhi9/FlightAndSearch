const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
    PORT: process.env.PORT
};
