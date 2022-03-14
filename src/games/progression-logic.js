import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = (num1, num2) => {
  const progressionNums = [];
  const limitNum = 100;
  for (let i = num1; i < limitNum; i += num2) {
    progressionNums.push(i);
  }
  return progressionNums.slice(0, 10);
};

const gameTask = 'What number is missing in the progression?';
const getAnswers = () => {
  const firstNum = getRandomInt(1, 30);
  const difference = getRandomInt(1, 9);
  const hiddenNum = getRandomInt(0, 10);

  const finalProgression = getProgression(firstNum, difference);
  const referenceAnswer = String(finalProgression[hiddenNum]);
  finalProgression[hiddenNum] = '..';
  const askQuestion = finalProgression.join(' ');
  return [askQuestion, referenceAnswer];
};
const completeProgression = () => runGame(gameTask, getAnswers);
export default completeProgression;
