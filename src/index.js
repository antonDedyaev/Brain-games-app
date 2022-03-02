import readlineSync from 'readline-sync';

const commonLogic = (gameTask, gameAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  let counter = 0;
  while (counter < 3) {
    const [askQuestion, referenceAnswer] = gameAnswers();
    console.log(`Question: ${askQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
export default commonLogic;
