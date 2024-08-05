require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");

console.log("LOCAL_DB_URL:", process.env.LOCAL_DB_URL);
console.log("REMOTE_DB_URL:", process.env.REMOTE_DB_URL);

const LOCAL_DB_URL = process.env.LOCAL_DB_URL;
const REMOTE_DB_URL = process.env.REMOTE_DB_URL;

const DB_URL = LOCAL_DB_URL || REMOTE_DB_URL;

if (!DB_URL) {
    console.error("Database URL not defined. Check your .env file.");
    process.exit(1);
}

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Database is connected");
});

db.on("disconnected", () => {
    console.log("Database is disconnected");
});

db.on("error", (err) => {
    console.log("Something went wrong while connecting to the database", err);
});

module.exports = db;
