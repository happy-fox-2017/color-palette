var express = require("express");
var app = express();
const getPallete = require('./lib/get_pallete');

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index", { palettes: getPallete(), title: 'Color Pallete' });
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);
