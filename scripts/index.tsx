import React from 'react';
import ReactDOM from 'react-dom';
import { Decks } from './decks';
import { CardFace } from './card';
import { draw } from './deck_utils';

ReactDOM.render(
  <>
    <div>Character Pair Generator</div>
    <CardFace card={draw(Decks.ConnectionDeck)} />
    <CardFace card={draw(Decks.CostumeDeck)} />
    <CardFace card={draw(Decks.AestheticPairDeck)} />
  </>,
  document.getElementById('main'),
);
