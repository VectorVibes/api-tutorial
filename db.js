const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables

console.log("LOCAL_DB_URL:", process.env.LOCAL_DB_URL);
console.log("REMOTE_DB_URL:", process.env.REMOTE_DB_URL);

mongoose.connect("mongodb+srv://priya:V.t97-yhNUbLk!-@cluster0.nvt4yee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

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
