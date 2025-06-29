const mongoose = require('mongoose');

async function getDatabase() {
    const dbURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/school';
    await mongoose.connect(dbURL)
        .then(() => console.log("Database Connected successfully"))
        .catch(() => console.log("Database Connection error"));
}

module.exports = {
    getDatabase
}
