import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);
  console.log('checked guess: ', checkedGuess);
  return (
    // if value, check guess
    // else, use range to create empty cells
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num] : undefined}
          status={value ? checkedGuess[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
