import React from 'react';
import ReactDOM from 'react-dom';
import HandDisplay from './hand';

ReactDOM.render(
  <>
    <div id="Intro">
      <h2>Duelism: a enemies to friends character pair generator</h2>
      <h3>How to play</h3>
      <p>
        Build a hand with one or two cards of each type (
        <span style={{ fontWeight: 'bold' }} className="WORLD">
          world
        </span>
        {', '}
        <span style={{ fontWeight: 'bold' }} className="POWER">
          power
        </span>
        , etc.). You have a random hand with one of each card type to start. Draw more and discard those you don't like. You can rearrange the order of cards of the same type, using the Move Back buttons.
      </p>
      <p>
        Some cards are different for each of the characters (
        <span style={{ fontWeight: 'bold' }} className="AESTHETICS">
          aesthetics
        </span>
        {', '}
        <span style={{ fontWeight: 'bold' }} className="IDEALS">
          ideals
        </span>
        {', and '}
        <span style={{ fontWeight: 'bold' }} className="MANNERS">
          manners
        </span>
        ). You can flip these cards to change which character has which attribute. You can also replace any cards you
        don't like.
      </p>
      <p>
        Once you are happy with your hand, name your characters with the textboxes below the buttons. Then, copy the
        description of your characters from the bottom to share or save! Enjoy!
      </p>
      <h3>The game</h3>
    </div>
    <HandDisplay />
  </>,
  document.getElementById('main'),
);
