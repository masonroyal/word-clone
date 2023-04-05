import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, setGuesses, answer, setGameStatus }) {
  const [guess, setGuess] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // if guess is correct, win game
    if (guess === answer) {
      setButtonDisabled(true);
      setGameStatus('win');
    }
    // create new guesses array to add in current guess and key
    const newGuesses = [...guesses, { guess: guess, key: crypto.randomUUID() }];
    setGuesses(newGuesses);
    setGuess('');
    // if reached maximum number of guesses, lose game
    console.log('guesses.length: ', guesses.length);
    if (newGuesses >= NUM_OF_GUESSES_ALLOWED) {
      setButtonDisabled(true);
      setGameStatus('lose');
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        disabled={buttonDisabled}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
