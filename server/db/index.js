const mongoose = require('mongoose');

const PASSWORD = process.env.DB_PASSWORD;
const PROJECT = process.env.PROJECT_NAME;

const setDB = async () => {
  await mongoose.connect(`mongodb+srv://Yura:${PASSWORD}@cluster0.2kx0nbv.mongodb.net/?retryWrites=true&w=majority`);
  console.log('DB success');
}

module.exports = setDB;