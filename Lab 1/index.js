const express = require("express");

const app1 = express();
const app2 = express();

const port1 = 3000;
const port2 = 3001;

app1.get("/", (req, res) => {
  res.send("This is the main server.");
});
app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});

app2.get("/", (req, res) => {
  res.send("This is the second server.");
});
app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});
