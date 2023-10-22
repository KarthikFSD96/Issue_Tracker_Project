// Import required modules
const express = require('express');
const projectController = require('../controllers/project_controller');

// Create an Express router
const router = express.Router();

// Define routes for project-related functionality
router.post('/create', projectController.createSession); // Route for creating a project
router.get('/delete', projectController.delete); // Route for deleting a project
router.get('/:id', projectController.projectDetails); // Route for project details
router.post('/:id', projectController.createIssueSession); // Route for creating an issue within a project
router.get('/issue/delete', projectController.deleteIssue); // Route for deleting an issue

// Export the router for use in other modules
module.exports = router;
