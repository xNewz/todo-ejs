const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true })); // ใช้ในการรับค่าจาก form ที่มี method = post
app.use(express.static("public"));

app.get("/", (req, res) => {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("th-TH", options);
  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
