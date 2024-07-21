const mongoose = require('mongoose');

require('../models/User');
require('../models/Movie');

async function configDatabase() {
    const connectionString = 'mongodb://0.0.0.0:27017/sw-library';

    await mongoose.connect(connectionString);
    console.log("Database connected!");
}

module.exports = { configDatabase };