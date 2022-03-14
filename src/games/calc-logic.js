/* eslint-disable default-case */
import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const i = getRandomInt(0, operators.length);
  return operators[i];
};

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
  return null;
};

const gameTask = 'What is the result of the expression? ';
const getAnswers = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomOperator = getRandomOperator();

  const askQuestion = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const referenceAnswer = String(calc(randomNum1, randomNum2, randomOperator));
  return [askQuestion, referenceAnswer];
};
const calculateNums = () => runGame(gameTask, getAnswers);
export default calculateNums;
