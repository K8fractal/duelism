import React, { useState } from 'react';
import { Decks, emptyHand, debugHand, addCard, removeCard } from './decks';
import { draw } from './deck_utils';
import CardFace from './card';

/*interface Props {
  hand: Hand;
}*/

const HandDisplay = (/*{ hand }: Props*/): JSX.Element => {
  //  const [cards, setCards] = useState(emptyHand);
  const [cardsInHand, setCards] = useState(debugHand);

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

export default HandDisplay;
