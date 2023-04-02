const mongoose = require('mongoose')
const {db} = require('./../configuration')

function connectDB() {
  mongoose.connect(db, { useNewUrlParser: true });
  return mongoose.connection;
}

module.exports = { connectDB };