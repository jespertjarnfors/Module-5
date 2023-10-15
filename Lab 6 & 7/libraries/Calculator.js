class Calculator {
  constructor() {
    this.id = (Math.random()*10e9).toFixed(0);
  }
  
  add(num1, num2) {
    const value = num1 + num2;
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    return value;
  }
}

module.exports = Calculator;
