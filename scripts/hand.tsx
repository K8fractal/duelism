import React, { useState } from 'react';
import { draw } from './deck_utils';
import CardFace from './card';
import { Deck, Decks, Card, rotate, printCard } from './decks';

/*interface Props {
  hand: Hand;
}*/

const HandDisplay = (/*{ hand }: Props*/): JSX.Element => {
  const [cardsInHand, setCards] = useState(emptyHand);

  return (
    <div className="hand">
      Your Hand: {cardsInHand.cards.length} Cards
      <div className="row">
        <button onClick={() => setCards(emptyHand)}>Discard Entire Hand</button>
        <button onClick={() => setCards(randomHand())}>Get a Random Hand</button>
      </div>
      <div className="row">
        {cardsInHand.cards.map((c, i) => (
          <div className="cardButtons" key={`cardInterface${i}`}>
            <CardFace card={c} key={`card${i}`} />
            <button onClick={() => setCards(removeCard(c, cardsInHand))} key={`discard${i}th`}>
              Discard
            </button>
            <button
              className={`deckButton ${c.deck}`}
              onClick={() => setCards(replaceCard(c, cardsInHand))}
              key={`redraw${i}th`}
            >
              Replace
            </button>
            {c.quant == 'DOUBLE' && (
              <button onClick={() => setCards(rotateCard(c, cardsInHand))} key={`rotate${i}th`}>
                Flip
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="row">
        {deckOrder.map((deck) => (
          <button key={deck} className={`deckButton ${deck}`} onClick={() => setCards(addFromDeck(cardsInHand, deck))}>
            Draw a new {deck.toLowerCase()} card
          </button>
        ))}
      </div>
      <div className="row">Character 1: {printCharacter(cardsInHand, 0)}</div>
      <div className="row">Character 2: {printCharacter(cardsInHand, 1)}</div>
    </div>
  );
};

//
// * HAND INTERFACE & METHODS * //
//

export interface Hand {
  cards: Card[];
}

export const emptyHand: Hand = {
  cards: [],
};

export const randomHand = (): Hand => {
  return {
    cards: [
      draw(Decks['WORLD']),
      draw(Decks['POWER']),
      draw(Decks['CONNECTION']),
      draw(Decks['COSTUME']),
      draw(Decks['AESTHETICS']),
      draw(Decks['IDEALS']),
      draw(Decks['MANNERS']),
    ],
  };
};

const deckOrder: Deck[] = ['WORLD', 'POWER', 'CONNECTION', 'COSTUME', 'AESTHETICS', 'IDEALS', 'MANNERS'];

function findLastIndex<T>(array: T[], critera: (item: T) => boolean): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (critera(array[i])) {
      return i;
    }
  }
  return -1;
}

const findInsertIndex = (hand: Hand, deck: Deck): number => {
  const lastCardIndex: number = findLastIndex(hand.cards, (element) => element.deck == deck);
  if (lastCardIndex == -1) {
    const deckLocation: number = deckOrder.indexOf(deck);
    // No card of the appropriate type
    if (deckLocation == 0 || deckLocation == -1) {
      return 0; // Give a valid answer, namely the beginning of the array.
    } else {
      return findInsertIndex(hand, deckOrder[deckLocation - 1]);
    }
  }
  // InsertIndex is after the last Card with the same type/deck, if it exists
  return lastCardIndex + 1;
};

export const addCard = (card: Card, hand: Hand): Hand => {
  const location: number = findInsertIndex(hand, card.deck);
  const newHand = { cards: [...hand.cards.slice(0, location), card, ...hand.cards.slice(location)] };
  return newHand;
};

export const addFromDeck = (hand: Hand, deck: Deck): Hand => {
  let newCard: Card = draw(Decks[deck]);
  while (hand.cards.includes(newCard)) {
    newCard = draw(Decks[deck]);
  } // This will infinite loop if you try to draw more cards of a type than exist in the deck.
  return addCard(newCard, hand);
};

export const removeCard = (card: Card, hand: Hand): Hand => {
  const location = hand.cards.indexOf(card);
  const newHand = { cards: [...hand.cards.slice(0, location), ...hand.cards.slice(location + 1)] };
  return newHand;
};

export const rotateCard = (card: Card, hand: Hand): Hand => {
  if (card.quant == 'SINGLE') {
    return hand;
  }
  const location = hand.cards.indexOf(card);
  const newHand = { cards: [...hand.cards.slice(0, location), rotate(card), ...hand.cards.slice(location + 1)] };
  return newHand;
};

export const replaceCard = (card: Card, hand: Hand): Hand => {
  const location = hand.cards.indexOf(card);
  const deck: Card[] = Decks[card.deck];
  let replacement: Card = draw(deck);
  while (hand.cards.includes(replacement)) {
    replacement = draw(deck);
  } // This will infinite loop if you try to draw more cards of a type than exist in the deck.
  const newHand = { cards: [...hand.cards.slice(0, location), replacement, ...hand.cards.slice(location + 1)] };
  return newHand;
};

const printCharacter = (hand: Hand, index: 0 | 1): string => {
  let sentence = '';
  hand.cards.forEach((c) => {
    sentence += printCard(c, index);
  });
  return sentence;
};

// const printCharacterByDeck = (hand: Hand, index: 0 | 1): string => {
//   let sentence = '';
//   let i = 0;
//   deckOrder.forEach((d) => {

//   });
//   return sentence;
// };

export default HandDisplay;
