import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getAnswers = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);

  const askQuestion = `${randomNum1} ${randomNum2}`;

  let result1 = randomNum1;
  let result2 = randomNum2;
  while (result1 !== 0 && result2 !== 0) {
    if (result1 > result2) {
      result1 %= result2;
    } else {
      result2 %= result1;
    }
  }
  const referenceAnswer = String(result1 + result2);
  return [askQuestion, referenceAnswer];
};
const findCommonDiv = () => defineCommonLogic(gameTask, getAnswers);
export default findCommonDiv;
