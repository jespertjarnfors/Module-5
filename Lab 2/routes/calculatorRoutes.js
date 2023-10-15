const express = require("express");
const router = express.Router();

// new route for adding two numbers
router.get("/add", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 + num2;

  res.status(200);
  res.send({ res: result });
});

router.get("/multiply", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 * num2;

  res.status(200);
  res.send({ res: result });
});

router.get("/subtract", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 - num2;

  res.status(200);
  res.send({ res: result });
});

router.get("/divide", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 / num2;

  res.status(200);
  res.send({ res: result });
});

module.exports = router;
