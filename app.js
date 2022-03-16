//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

// const mongoose = require("mongoose");

// const_ = require("lodash");

const app = express();

// mongoose.connect(
//   "mongodb+srv://admin-mehul:Test123@cluster0.mycje.mongodb.net/booknowDB",
//   { useNewUrlParser: true }
// );

// const postSchema = {
//   name: String,
//   email: String,
//   tel: String,
//   address: String,
// };

// const Post = mongoose.model("Post", postSchema);
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/index", function (req, res) {
  res.render("index");
});
// app.use(express.static("public"));
// app.get("/payment", function (req, res) {
//   res.render("payment");
// });
// app.use(express.static("public"));
// app.get("/indexreg", function (req, res) {
//   res.render("indexreg");
// });
// app.use(express.static("public"));
// app.get("/photopage", function (req, res) {
//   res.render("photopage");
// });
// app.use(express.static("public"));
// app.get("/list", function (req, res) {
//   res.render("list");
// });

// app.use(express.static("public"));
// app.get("/booknow", function (req, res) {
//   res.render("booknow");
// });

app.post("/indexreg", function (req, res) {
  const post = new Post({
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    address: req.body.address,
  });

  post.save();

  res.redirect("/index");
});

app.listen(3010, function () {
  console.log("Server started on port 3010");
});
