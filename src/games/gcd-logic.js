import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const getGcd = (Num1, Num2) => {
  let firstNum = Num1;
  let secondNum = Num2;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum + secondNum;
};

const gameTask = 'Find the greatest common divisor of given numbers.';
const getAnswers = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);

  const askQuestion = `${randomNum1} ${randomNum2}`;
  const referenceAnswer = String(getGcd(randomNum1, randomNum2));
  return [askQuestion, referenceAnswer];
};
const findCommonDiv = () => defineCommonLogic(gameTask, getAnswers);
export default findCommonDiv;
