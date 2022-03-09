import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const gameTask = 'Answer "yes", if the number is even, otherwise answer "no"';

const getAnswers = () => {
  const askQuestion = getRandomInt(0, 100);
  const referenceAnswer = (askQuestion % 2 === 0) ? 'yes' : 'no';
  return [askQuestion, referenceAnswer];
};
const guessEvenNums = () => defineCommonLogic(gameTask, getAnswers);
export default guessEvenNums;
