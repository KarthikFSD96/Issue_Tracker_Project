const { timeStamp } = require('console');
const mongoose = require('mongoose');

// Create a schema for the "createProject" model
const createProjectSchema = new mongoose.Schema({
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
    issues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue" // Reference the "Issue" model
        }
    ],
    labels: [
        {
            type: String
        }
    ]
}, {
    timestamps: true // Enable automatic timestamps for created and updated dates
});

// Create the "createProject" model using the schema
const createProject = mongoose.model('createProject', createProjectSchema);

// Export the "createProject" model for use in other modules
module.exports = createProject;
