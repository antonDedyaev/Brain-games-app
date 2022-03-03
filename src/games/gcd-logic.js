import commonLogic from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gameAnswers = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);

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
const findCommonDiv = () => commonLogic(gameTask, gameAnswers);
export default findCommonDiv;
