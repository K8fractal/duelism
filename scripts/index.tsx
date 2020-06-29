import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './counter';
import {Decks,printCard} from './card';

ReactDOM.render(
  <>
    <div>Hello world</div>
    <div>{printCard(Decks.AestheticPairDeck[0],0)}</div>
    <Counter name="cats" />
    <Counter name="ukuleles" />
  </>,
  document.getElementById('main'),
);
