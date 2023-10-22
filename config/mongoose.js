// Connect to the MongoDB database
const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided URL
mongoose.connect(`mongodb+srv://MongoDBAdmin:Password123@issuetrackerproject.oq1gras.mongodb.net/`);

// Get the database connection instance
const db = mongoose.connection;

// Handle database connection errors
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// Once the database connection is open, log a success message
db.once('open', function(){
    console.log("Connected to Database :: MongoDB");
});

// Export the database connection for use in other modules
module.exports = db;
