// Require all the necessary data and models
const createProject = require('../models/create_project');
const createIssue = require('../models/create_issue');
const mongoose = require('mongoose');

// Controller code to create a project
module.exports.createSession = async function (req, res) {
    try {
        // Create a project using data from the request
        const create = await createProject.create({
            description: req.body.description,
            name: req.body.name,
            author: req.body.author
        });
        if (create) {
            // Show a success flash notification
            req.flash("success", "Project Created");
            return res.redirect('back');
        }
        req.flash("success", "Project Created");
        return res.redirect('back');

    } catch (error) {
        req.flash("error", error);
        return res.redirect('back');

    }
}

// Controller code to delete a project
module.exports.delete = async function (req, res) {
    try {
        // Delete the project by its ID
        let deletedProject = await createProject.findByIdAndDelete(req.query.id)
        if (deletedProject) {
            // Check if the request is AJAX and return JSON response
            if (req.xhr) {
                return res.status(200).json({
                    data: {
                        project_id: req.query.id
                    },
                    message: "Project Deleted"
                });
            }
            // Show a success flash notification
            req.flash("success", "Project Deleted")
            return res.redirect('back');
        }
    } catch (error) {
        req.flash("error", error)
        return res.redirect('back');
    }
}

// Controller code to render project details
module.exports.projectDetails = async function (req, res) {
    try {
        // Find a project by its ID and populate its issues
        const project = await createProject.findById(req.params.id).populate({
            path: "issues",
        });
        if (project) {
            return res.render('project_page', {
                title: "Project Page",
                project
            });
        }
        return res.redirect('back');
    } catch (error) {
        console.log("Error", error);
    }
}

// Controller code to create an issue
module.exports.createIssueSession = async function (req, res) {
    try {
        // Find the project by its ID
        let project = await createProject.findById(req.params.id)
        if (project) {
            // Create an issue using data from the request
            let Issue = await createIssue.create({
                name: req.body.name,
                description: req.body.description,
                author: req.body.author,
                labels: req.body.labels
            });
            project.issues.push(Issue);
            if (!(typeof req.body.labels === "string")) {
                for (let label of req.body.labels) {
                    let isPresent = project.labels.find((obj) => obj == label)
                    if (!isPresent) {
                        project.labels.push(label)
                    }
                }
            } else {
                let isPresent = project.labels.find((obj) => obj == req.body.labels)
                if (!isPresent) {
                    project.labels.push(req.body.labels)
                }
            }
            await project.save();
            req.flash("success", "Issue Created")
            return res.redirect('back');
        } else {
            req.flash("success", "Issue Created")
            return res.redirect('back');
        }

    } catch (error) {
        req.flash("error", error);
        return res.redirect('back');

    }
}

// Controller code to delete an issue
module.exports.deleteIssue = async function (req, res) {
    try {
        // Delete the issue by its ID
        let deleteData = await createIssue.findByIdAndDelete(req.query.id);
        if (deleteData) {
            // Handle the AJAX functionality
            if (req.xhr) {
                return res.status(200).json({
                    message: "Issue Deleted"
                })
            }
            // Show a success flash notification
            req.flash("success", "Issue Deleted");
            return res.redirect('back');      
        }
        req.flash('success', 'Issue Deleted');
        return res.redirect('back')

    } catch (error) {
        req.flash("error", error);
        return res.redirect('back');
    }
}
