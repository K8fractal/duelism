import React from 'react';
import ReactDOM from 'react-dom';
import HandDisplay from './hand';

ReactDOM.render(
  <>
    <div id="Intro">
      <h2>Duelism: a enemies to friends character pair generator</h2>
      <br></br>
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
        , etc.). For quick play, simply click "Get a random hand." For the full experience, draw 3 cards of the first
        two types, then discard any that you don't like or don't think fit. Repeat with next type, or two types, until
        you have a full hand.
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
        Once you are happy with your hand, copy the description of your characters from below the buttons to share or
        save! Enjoy!
      </p>
      <h3>The game</h3>
    </div>
    <HandDisplay />
  </>,
  document.getElementById('main'),
);
