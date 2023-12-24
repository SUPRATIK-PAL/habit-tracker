const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_CONNECTION_URI;

mongoose.connect(mongoURI, { 
  useNewUrlParser: true,
}).then(() => console.log("db is connected")).catch((err) => {
  console.log("db is not connected");
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
