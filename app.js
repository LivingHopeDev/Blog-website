var express = require("express");
var blogController = require("./controllers/blogController");

var app = express();

// Set up template engine
app.set("view engine", "ejs");

// Using static file ; like the style sheet
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// Invoking the controller
blogController(app);

app.listen(3000, () => {
  console.log("Running at port 3000");
});
