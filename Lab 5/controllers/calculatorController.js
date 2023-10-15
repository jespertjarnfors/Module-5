const addNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 + num2;
  res.status(200);
  res.json({ res: result });
};

const subtractNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 - num2;
  res.status(200);
  res.json({ res: result });
};

const multiplyNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 * num2;
  res.status(200);
  res.json({ res: result });
};

const divideNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 / num2;
  res.status(200);
  res.json({ res: result });
};

module.exports = {
    addNumbers, subtractNumbers, multiplyNumbers, divideNumbers
}
