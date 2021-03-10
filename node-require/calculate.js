const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const functionType = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
let answer = null;
if (functionType === 'plus' || functionType === '+') {
  answer = add(num1, num2);
} else if (functionType === 'minus' || functionType === '-') {
  answer = subtract(num1, num2);
} else if (functionType === 'times' || functionType === '*') {
  answer = multiply(num1, num2);
} else if (functionType === 'over' || functionType === 'divided by' || functionType === '/') {
  answer = divide(num1, num2);
} else {
  answer = 'we do not have this tool in the shed';
}

console.log(answer);
