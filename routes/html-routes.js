var path = require("path");

module.exports = function(app) {
app.get("/videolibrary", function(req, res) {
    res.render("./videolibrary");
    });

app.get("/strength", function(req, res) {
        res.render("./strength");
        });
        
app.get("/results", function(req, res) {
            res.render("./results");
            });

}
