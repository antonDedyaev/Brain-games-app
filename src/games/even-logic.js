import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getEven = (num) => num % 2 === 0;

const gameTask = 'Answer "yes", if the number is even, otherwise answer "no"';
const getAnswers = () => {
  const askQuestion = getRandomInt(0, 100);
  const referenceAnswer = getEven(askQuestion) ? 'yes' : 'no';
  return [askQuestion, referenceAnswer];
};
const guessEvenNums = () => runGame(gameTask, getAnswers);
export default guessEvenNums;
