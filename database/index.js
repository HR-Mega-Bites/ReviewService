const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/davidcheng1290';

const db = mongoose.connect(mongoUri);

module.exports = db;
