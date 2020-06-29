import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './counter';
import { Decks, printCard } from './decks';

ReactDOM.render(
  <>
    <div>Hello world</div>
    <Counter name="cats" />
    <Counter name="ukuleles" />
  </>,
  document.getElementById('main'),
);
