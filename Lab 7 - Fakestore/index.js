const express = require("express");
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const fakestoreRoutes = require("./routes/fakestoreRoutes");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/store", fakestoreRoutes);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
