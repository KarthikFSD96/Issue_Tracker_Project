const mongoose = require('mongoose');

// Create a schema for the "Issue" model
const createIssueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    labels: [
        {
            type: String
        }
    ]
}, {
    timestamps: true, // Enable automatic timestamps for created and updated dates
});

// Create the "Issue" model using the schema
const Issue = mongoose.model('Issue', createIssueSchema);

// Export the "Issue" model for use in other modules
module.exports = Issue;
