import commonLogic from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameAnswers = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
const guessPrimeNums = () => commonLogic(gameTask, gameAnswers);
export default guessPrimeNums;
