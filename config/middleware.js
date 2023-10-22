// Middleware to set flash messages for success and error
module.exports.setFlash = function(req, res, next){
    res.locals.flash = {
        'success': req.flash('success'), // Set success flash message
        'error': req.flash('error') // Set error flash message
    }

    next();
}
