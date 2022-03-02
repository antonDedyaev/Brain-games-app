import commonLogic from '../index.js';

const gameTask = 'Answer "yes", if the number is even, otherwise answer "no"';

const gameAnswers = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const askQuestion = getRandomInt(100);
  const referenceAnswer = (askQuestion % 2 === 0) ? 'yes' : 'no';
  return [askQuestion, referenceAnswer];
};
const guessEvenNums = () => commonLogic(gameTask, gameAnswers);
export default guessEvenNums;
