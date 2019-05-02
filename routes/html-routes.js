var path = require("path");

module.exports = function(app) {
app.get("/videolibrary", function(req, res) {
    res.render("./videolibrary");
    });
}
