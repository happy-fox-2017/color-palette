var express = require("express");
var app = express();

app.set('view engine', 'ejs');
const getPallette = () => {
  return ["#69D2E7", "#E0E4CC", "#F38630"];
}

app.get("/", function (req, res) {
  res.render("index", { palettes: getPallette(), title: 'Color Pallete' });
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);
