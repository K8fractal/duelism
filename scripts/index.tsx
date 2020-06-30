import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './counter';
import { Decks, printCard } from './decks';
import { CardFace } from './card';

ReactDOM.render(
  <>
    <div>Hello world</div>
    <Counter name="cats" />
    <Counter name="ukuleles" />
    <CardFace card={Decks.ConnectionDeck[0]} />
  </>,
  document.getElementById('main'),
);
