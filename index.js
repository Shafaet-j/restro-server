const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefDatas = require("./data/chefDatas.json");

app.get("/", (req, res) => {
  res.send(chefDatas);
});

app.listen(port, () => {
  console.log(`Restro is running on port ${port}`);
});
