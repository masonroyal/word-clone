import React from 'react';
import Guess from '../Guess/Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

/*
A new component should be created, to render previous guesses.
When the user submits their guess, that value should be rendered within this new component.
There should be no key warnings in the console!
*/

function GuessResults({ guesses, answer }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          answer={answer}
          key={num}
          value={guesses[num] ? guesses[num].guess : guesses[num]}
        />
      ))}
    </div>
  );
}

export default GuessResults;
