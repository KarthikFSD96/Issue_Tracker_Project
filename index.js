// Require all necessary modules and variables
const express = require('express');
const app = express();
const port = 7000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const customMware = require('./config/middleware');
const session = require('express-session');

// Setup Express and serve static assets
app.use(express.urlencoded());
app.use(express.static('./assets'));

// Setup the view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', './views');

// Enable Express Layouts
app.use(expressLayouts);

// Extract styles and scripts from views
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Configure session settings
app.use(session({
    secret: "IssueCreater",
    resave: false,
    saveUninitialized: false
}));

// Enable flash messages and use custom middleware for setting flash
app.use(flash());
app.use(customMware.setFlash);

// Use the defined routes
app.use('/', require('./routes'));

// Start the server on the specified port
app.listen(port, function(err) {
    if (err) {
        console.log('Error in connecting to port', err);
    }
    console.log('App is listening successfully on port:', port);
});
