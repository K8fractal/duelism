import React, { useState } from 'react';
import { draw } from './deck_utils';
import CardFace from './card';
import { Decks, Card, rotate, printCard } from './decks';

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
            {/* <button onClick={() => setCards(removeCard(c, cardsInHand))} key={`discard${i}th`}>
            Discard
          </button> */}
            <button onClick={() => setCards(replaceCard(c, cardsInHand))} key={`redraw${i}th`}>
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
        {/* <button onClick={() => setCards(emptyHand)}>Discard Entire Hand</button> */}
      </div>
      <div className="row">Character 1: {printCharacter(cardsInHand, 0)}</div>
    </div>
  );
};

//
// * HAND INTERFACE & METHODS * //
//
// Hand card: Card and orientation
export interface HandCard {
  card: Card;
  rotation: 0 | 1;
}

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
      draw(Decks['COSTUME']),
      draw(Decks['AESTHETICS']),
      draw(Decks['IDEALS']),
      draw(Decks['MANNERS']),
      draw(Decks['CONNECTION']),
    ],
  };
};

export const addCard = (card: Card, hand: Hand): Hand => {
  const newHand = { cards: [...hand.cards, card] };
  return newHand;
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
  const sentence = 'THIS IS A TEST: ';
  hand.cards.forEach((c) => {
    sentence.concat(printCard(c, index));
  });
  return sentence;
};

export default HandDisplay;
