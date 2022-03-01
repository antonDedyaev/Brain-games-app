import readlineSync from 'readline-sync';

const guessEvenNums = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes", if the number is even, otherwise answer "no"');

  let counter = 0;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  while (counter < 3) {
    const randomNum = getRandomInt(100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const referenceAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === referenceAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${referenceAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default guessEvenNums;
