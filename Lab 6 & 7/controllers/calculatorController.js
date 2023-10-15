const Calculator = require("../libraries/Calculator");
const Logging = require("../libraries/Logging");
let myLog = new Logging();
let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);
  myLog.log(myCalc.id, sum);
  res.status(200);
  res.json({ res: sum });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.subtract(number1, number2);
  myLog.log(myCalc.id, sum);
  res.status(200);
  res.json({ res: sum });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.multiply(number1, number2);
  myLog.log(myCalc.id, sum);
  res.status(200);
  res.json({ res: sum });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.divide(number1, number2);
  myLog.log(myCalc.id, sum);
  res.status(200);
  res.json({ res: sum });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
