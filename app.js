const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Using static file ; like the style sheet
app.use(express.static("./public"));

// Set up template engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

dbURI =
  "mongodb+srv://adetayo:secretpassword@blogcluster.42newa4.mongodb.net/blogdb?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then((result) => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog route

app.use("/blogs", blogRoutes);

// GET ABOUT US PAGE
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(3000, () => {
  console.log("Running at port 3000");
});
