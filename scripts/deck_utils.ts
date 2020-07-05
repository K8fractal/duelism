import { Card } from './decks';

export const draw = (deck: Card[]): Card => {
  return deck[Math.floor(Math.random() * deck.length)];
};
