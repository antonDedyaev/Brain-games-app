import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswers = () => {
  const askQuestion = getRandomInt(2, 100);
  let isPrime;

  for (let i = 2; i <= Math.sqrt(askQuestion); i += 1) {
    if (askQuestion % i === 0) {
      isPrime = 'no';
      break;
    }
    isPrime = 'yes';
  }

  const referenceAnswer = isPrime;
  return [askQuestion, referenceAnswer];
};
const guessPrimeNums = () => defineCommonLogic(gameTask, getAnswers);
export default guessPrimeNums;
