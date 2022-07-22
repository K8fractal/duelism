import React, { useState, useRef } from 'react';
import { findLastIndex, draw } from './array_utils';
import CardFace from './card';
import TextField from './textfield';
import {
  Deck,
  Decks,
  Card,
  rotate,
  printCard,
  getCardText,
  printCombo,
  printCostumeCombo,
  printStyleCombo,
} from './decks';

const HandDisplay = (): JSX.Element => {
  const [cardsInHand, setCards] = useState(randomHand());
  const [name1, setName1] = useState('Character 1');
  const [name2, setName2] = useState('Character 2');
  const characterPair = useRef(null);
  // const [copySuccess, setCopySuccess] = useState('');

  return (
    <div className="hand">
      Your Hand: {cardsInHand.cards.length} Cards, {handStatus(cardsInHand)}
      <div className="row">
        <button onClick={() => setCards(emptyHand)}>Discard Entire Hand</button>
        <button onClick={() => setCards(randomHand())}>Get a Random Hand</button>
      </div>
      <p></p>
      <div className="cards">
        {deckOrder.map((deck) => (
          <button key={deck} className={`deckButton ${deck}`} onClick={() => setCards(addFromDeck(cardsInHand, deck))}>
            Draw a new {deck.toLowerCase()} card
          </button>
        ))}
      </div>
      <p>
        <div className="cards">
          {cardsInHand.cards.map((c, i) => (
            <div className="cardWithButtons" key={`cardInterface${i}`}>
              <CardFace card={c} key={`card${i}`} />
              <div className="cardButtons">
                {c.quant == 'DOUBLE' && (
                  <button onClick={() => setCards(rotateCard(c, cardsInHand))} key={`rotate${i}th`}>
                    Flip
                  </button>
                )}
                {i > 0 && c.deck == cardsInHand.cards[i - 1].deck && (
                  <button onClick={() => setCards(moveBack(i, cardsInHand))} key={`moveBack${i}th`}>
                    Move Back
                  </button>
                )}
              </div>
              <div className="cardButtons">
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
              </div>
            </div>
          ))}
        </div>
      </p>
      <TextField value={name1} setValue={setName1} label="Name" />
      <TextField value={name2} setValue={setName2} label="Name" />
      <textarea
        ref={characterPair}
        value={`${printCharacter(cardsInHand, 0, name1)} ${printCharacter(cardsInHand, 1, name2)}`}
      />
      <div className="row">{printCharacter(cardsInHand, 0, name1)}</div>
      <div className="row">{printCharacter(cardsInHand, 1, name2)}</div>
      {
        /* Logical shortcut for only displaying the 
          button if the copy command exists */
        document.queryCommandSupported('copy') && (
          <div>
            <button
              onClick={() => {
                characterPair.current.select();
                document.execCommand('copy');
                // setCopySuccess('Copied!');
              }}
            >
              Copy
            </button>
            {/* {copySuccess} */}
          </div>
        )
      }
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

type HandByDeck = SingleDeckHand[]; // Size is 7

interface SingleDeckHand {
  deck: Deck;
  cards: Card[];
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
  const drawFrom: Card[] = Decks[deck];
  let newCard: Card = draw(drawFrom);
  let tries = 0; // Prevent infinite loops.
  while (hand.cards.includes(newCard) && tries < 100) {
    newCard = draw(drawFrom);
    tries++;
  }
  //console.log(tries);
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

const moveBack = (index: number, hand: Hand): Hand => {
  if (index >= hand.cards.length || index < 1) {
    // check bounds
    return hand;
  }
  const newHand = {
    cards: [
      ...hand.cards.slice(0, index - 1),
      hand.cards[index],
      hand.cards[index - 1],
      ...hand.cards.slice(index + 1),
    ],
  };
  return newHand;
};

export const replaceCard = (card: Card, hand: Hand): Hand => {
  const location = hand.cards.indexOf(card);
  const deck: Card[] = Decks[card.deck];
  let replacement: Card = draw(deck);
  let tries = 0; ///Prevent infinite loops
  while (hand.cards.includes(replacement) && tries < 100) {
    replacement = draw(deck);
    tries++;
  }
  //console.log(tries);
  const newHand = { cards: [...hand.cards.slice(0, location), replacement, ...hand.cards.slice(location + 1)] };
  return newHand;
};

/*const printCharacter = (hand: Hand, index: 0 | 1): string => {
  let sentence = '';
  hand.cards.forEach((c) => {
    sentence += printCard(c, index);
  });
  return sentence;
};*/

const countDecks = (hand: Hand): number[] => {
  const counts: number[] = [0, 0, 0, 0, 0, 0, 0];
  hand.cards.forEach((c) => {
    counts[deckOrder.indexOf(c.deck)]++;
  });
  return counts;
};

const handStatus = (hand: Hand): string => {
  const counts = countDecks(hand);
  const n = counts.indexOf(0);
  if (n == -1) {
    return 'Complete';
  } else {
    return 'missing ' + deckOrder[n].toLowerCase();
  }
};

// const convertHand = (hand: Hand): HandByDeck => {
//   const result = deckOrder.map((deck) => ({ // The cards aren't constant!
//     deck,
//     cards: [],
//   }));
//   hand.cards.forEach((c) => {
//     result[deckOrder.indexOf(c.deck)].cards.push(c);
//   });
//   return result;
// };

// const printCharacterTemp = (hand: HandByDeck, index: 0 | 1): string => {
//   let sentence = '';
//   hand.map(printSingleDeckHand,)
// }

// const printSingleDeckHand = ({deck: Deck, cards: Card[]}): string => {
//   if (deck == 'W')
//   return ''
// }

const printCharacter = (hand: Hand, index: 0 | 1, name: string): string => {
  let sentence = name + ': ';
  let cardindex = 0;
  let combo = '';
  let joiner = '';
  const counts: number[] = countDecks(hand);
  for (let i = 0; i < deckOrder.length; i++) {
    if (counts[i] == 1) {
      sentence += printCard(hand.cards[cardindex], index);
      cardindex += 1;
    }
    if (counts[i] > 1) {
      // TODO: check template for joiner and combo templates
      // possibly move joining code to decks.
      const deckCards = hand.cards.slice(cardindex, cardindex + counts[i]);
      if (deckOrder[i] == 'COSTUME') {
        sentence += printCostumeCombo(deckCards);
      } else if (deckOrder[i] == 'AESTHETICS') {
        sentence += printStyleCombo(deckCards, index);
      } else {
        if (deckOrder[i] == 'MANNERS') {
          joiner = ' ';
        } else {
          joiner = ' and ';
        }
        combo = getCardText(deckCards[0], index);
        for (let j = 1; j < deckCards.length; j++) {
          combo += joiner; // ' and ' or space
          combo += getCardText(deckCards[j], index);
        }
        sentence += printCombo(combo, deckCards[0].template); // assumes const template
      }

      cardindex += counts[i];
    }
    // if 0, do nothing
  }
  return sentence;
};

export default HandDisplay;
