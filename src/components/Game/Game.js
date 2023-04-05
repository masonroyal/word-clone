import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// const defaultGuesses = range(0, 5);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // const [isGameOver, setIsGameOver] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState('');

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
        setGameStatus={setGameStatus}
        numOfGuesses={guesses.length}
      />
      {gameStatus && <Banner gameStaus={gameStatus} answer={answer} />}
    </>
  );
}

export default Game;
