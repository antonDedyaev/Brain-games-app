/* eslint-disable default-case */
import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const i = getRandomInt(0, 3);
  return operators[i];
};

const calc = (Num1, Num2, operator) => {
  switch (operator) {
    case '+':
      return Num1 + Num2;
    case '-':
      return Num1 - Num2;
    case '*':
      return Num1 * Num2;
  }
  return null;
};

const gameTask = 'What is the result of the expression? ';
const getAnswers = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomOperator = getRandomOperator(0, 3);

  const askQuestion = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const referenceAnswer = String(calc(randomNum1, randomNum2, randomOperator));
  return [askQuestion, referenceAnswer];
};
const calculateNums = () => defineCommonLogic(gameTask, getAnswers);
export default calculateNums;
