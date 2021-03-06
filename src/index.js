import readlineSync from 'readline-sync';

const askPLayerName = () => readlineSync.question('May I have your name? ');

export default (GameRules, createQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${GameRules}\n`);

  const player = {
    name: askPLayerName(),
  };

  console.log(`Hello, ${player.name}!\n`);


  const addRound = (round) => {
    if (round === 3) {
      return console.log(`Congratulations, ${player.name}!`);
    }

    const question = createQuestion();
    console.log(`Question: ${question.text}`);

    const playerAnswer = readlineSync.question('Your Answer: ');

    if (playerAnswer === question.answer) {
      console.log('Correct!');
      addRound(round + 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      console.log(`Let's try again, ${player.name}!`);
      return false;
    }

    return false;
  };

  addRound(0);
  return false;
};
