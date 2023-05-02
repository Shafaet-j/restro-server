const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefDatas = require("./data/chefDatas.json");

app.get("/", (req, res) => {
  res.send(chefDatas);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefDatas.find((data) => data.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Restro is running on port ${port}`);
});
