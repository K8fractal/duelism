import React, { useState } from 'react';
import { Decks, emptyHand, debugHand, addCard, removeCard, randomHand, replaceCard, Card } from './decks';
import { draw } from './deck_utils';
import CardFace from './card';

/*interface Props {
  hand: Hand;
}*/

const HandDisplay = (/*{ hand }: Props*/): JSX.Element => {
  const [cardsInHand, setCards] = useState(randomHand());

  return (
    <div className="hand">
      Your Hand: {cardsInHand.cards.length} Cards
      {cardsInHand.cards.map((c, i) => (
        <div className="cardButtons" key={`cardInterface${i}`}>
          <CardFace card={c} key={`card${i}`} />
          {/* <button onClick={() => setCards(removeCard(c, cardsInHand))} key={`discard${i}th`}>
            Discard
          </button> */}
          <button onClick={() => setCards(replaceCard(c, cardsInHand))} key={`redraw${i}th`}>
            Replace
          </button>
          <button>Rotate</button>
        </div>
      ))}
      <div>
        <button onClick={() => setCards(randomHand())}>Get ALL New Cards</button>
        {/* <button onClick={() => setCards(emptyHand)}>Discard Entire Hand</button> */}
      </div>
    </div>
  );
};

export default HandDisplay;
