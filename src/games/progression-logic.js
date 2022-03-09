import defineCommonLogic from '../index.js';
import getRandomInt from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getAnswers = () => {
  const firstNum = getRandomInt(1, 30);
  const difference = getRandomInt(1, 9);
  const progressionNums = [];

  for (let i = firstNum; i < 100; i += difference) {
    progressionNums.push(i);
  }

  const finalProgression = progressionNums.slice(0, 10);
  const hiddenNum = getRandomInt(0, 10);
  const referenceAnswer = String(finalProgression[hiddenNum]);
  finalProgression[hiddenNum] = '..';
  const askQuestion = finalProgression.join(' ');
  return [askQuestion, referenceAnswer];
};
const completeProgression = () => defineCommonLogic(gameTask, getAnswers);
export default completeProgression;
