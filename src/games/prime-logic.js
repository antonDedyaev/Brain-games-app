import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (Num) => {
  for (let i = 2; i <= Math.sqrt(Num); i += 1) {
    if (Num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getAnswers = () => {
  const askQuestion = getRandomInt(2, 100);
  const referenceAnswer = isPrime(askQuestion);
  return [askQuestion, referenceAnswer];
};
const guessPrimeNums = () => defineCommonLogic(gameTask, getAnswers);
export default guessPrimeNums;
