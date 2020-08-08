import React, { useState } from 'react';
import { draw } from './deck_utils';
import CardFace from './card';
import { Deck, Decks, Card, rotate, printCard } from './decks';

/*interface Props {
  hand: Hand;
}*/

const HandDisplay = (/*{ hand }: Props*/): JSX.Element => {
  const [cardsInHand, setCards] = useState(randomHand());

  return (
    <div className="hand">
      Your Hand: {cardsInHand.cards.length} Cards
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
                Rotate
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="row">
        <button onClick={() => setCards(randomHand())}>Get ALL New Cards</button>
        <button className="deckButton IDEALS" onClick={() => setCards(addFromDeck(cardsInHand, 'IDEALS'))}>
          Draw a new Ideal
        </button>
        {/* <button onClick={() => setCards(emptyHand)}>Discard Entire Hand</button> */}
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
  cards: Card[]; //Use this one
  /*costume: CostumeCard[];
  aesthetics: AestheticsCard[];
  ideals: IdealsCard[];
  manners: MannersCard[];
  world: WorldCard[];
  power: PowerCard[];
  connection: ConnectionCard[];*/
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
  return addCard(draw(Decks[deck]), hand);
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
  const newHand = { cards: [...hand.cards.slice(0, location), draw(deck), ...hand.cards.slice(location + 1)] };
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
