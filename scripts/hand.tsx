import React, { useState } from 'react';
import {
  Decks,
  Card,
  Hand,
  printCard,
  getFormatString,
  getCardText,
  emptyHand,
  debugHand,
  addCard,
  removeCard,
} from './decks';
import { draw } from './deck_utils';
import { CardFace } from './card';

/*interface Props {
  hand: Hand;
}*/

export const HandDisplay = (/*{ hand }: Props*/): JSX.Element => {
  //  const [cards, setCards] = useState(emptyHand);
  const [cardsInHand, setCards] = useState(debugHand);
  /*return (
    <>
      <div>
        {name}: {value}
      </div>
      <div>
        <button onClick={() => setValue(value + 1)}>Increase</button>
        <button onClick={() => setValue(value - 1)}>Decrease</button>
      </div>
    </>
  );*/
  return (
    <div>
      Your Hand: {cardsInHand.cards.length} Cards
      {cardsInHand.cards.map((c, i) => (
        <div key={`cardInterface${i}`}>
          <CardFace card={c} key={`card${i}`} />
          <button onClick={() => setCards(removeCard(c, cardsInHand))} key={`discard${i}th`}>
            Discard
          </button>
        </div>
      ))}
      <div>
        <button onClick={() => setCards(addCard(draw(Decks.WorldDeck), cardsInHand))}>Get New Cards</button>
        <button onClick={() => setCards(emptyHand)}>Discard Entire Hand</button>
      </div>
    </div>
  );
};
