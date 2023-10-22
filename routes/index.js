// Import required modules
const express = require('express');
const homeController = require('../controllers/home_controller');

// Create an Express router
const router = express.Router();

// Define routes for the main functionality
router.get('/', homeController.home); // Route for the home page
router.use('/project', require('./project')); // Route for project-related functionality

// Export the router for use in other modules
module.exports = router;
