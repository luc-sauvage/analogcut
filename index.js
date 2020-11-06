const express = require("express");

const app = (exports.app = express());

const hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("homepage", {
        layout: "main",
    }) 
});


if (require.main == module) {
    app.listen(process.env.PORT || 8080, () => {
        console.log("AnalogCut server is running");
    });
};
