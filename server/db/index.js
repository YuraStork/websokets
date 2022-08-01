const mongoose = require('mongoose');

const PASSWORD = process.env.DB_PASSWORD;
const PROJECT = process.env.DATABASE

const setDB = async () => {
  await mongoose.connect(PROJECT);
  console.log('DB success');
}

module.exports = setDB;