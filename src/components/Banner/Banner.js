import React from 'react';

function Banner({ gameStatus, answer, numOfGuesses }) {
  return (
    <>
      gameStatus === 'win' && (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
      ) gameStatus === 'lose' && (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
      )
    </>
  );
}

export default Banner;
