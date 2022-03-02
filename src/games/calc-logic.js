/* eslint-disable default-case */
import commonLogic from '../index.js';

const gameTask = 'What is the result of the expression? ';

const gameAnswers = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomOperator = () => {
    const operators = ['+', '-', '*'];
    const i = getRandomInt(3);
    return operators[i];
  };
  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);
  const operator = randomOperator(3);

  const askQuestion = `${randomNum1} ${operator} ${randomNum2}`;

  let result;
  switch (operator) {
    case '+':
      result = randomNum1 + randomNum2;
      break;
    case '-':
      result = randomNum1 - randomNum2;
      break;
    case '*':
      result = randomNum1 * randomNum2;
      break;
  }
  const referenceAnswer = String(result);
  return [askQuestion, referenceAnswer];
};
const calculator = () => commonLogic(gameTask, gameAnswers);
export default calculator;
