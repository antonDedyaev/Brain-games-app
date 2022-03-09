import readlineSync from 'readline-sync';

const defineCommonLogic = (gameTask, getAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  const numOfRounds = 3;
  for (let counter = 0; counter < numOfRounds; counter += 1) {
    const [askQuestion, referenceAnswer] = getAnswers();
    console.log(`Question: ${askQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === referenceAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${referenceAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default defineCommonLogic;
