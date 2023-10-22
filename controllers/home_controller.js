// Require the "createProject" model from the models directory
const createProject = require('../models/create_project');

// Controller code to render the home page
module.exports.home = async function(req, res){
    try {
        // Find and sort projects by creation date
        const projects = await createProject.find({}).sort('-createdAt');
        
        // Render the home page with project data
        return res.render('home', {
            title: 'Issue tracker | Home',
            projects
        });
        
    } catch (error) {
        console.log("Error", error); // Log any errors
        return;
    }
}
