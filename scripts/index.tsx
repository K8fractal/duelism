import React from 'react';
import ReactDOM from 'react-dom';
import { Decks } from './decks';
import { CardFace } from './card';
import { draw } from './deck_utils';
import { HandDisplay } from './hand';

ReactDOM.render(
  <>
    <div>Character Pair Generator</div>
    <br></br>
    <HandDisplay />
  </>,
  document.getElementById('main'),
);
