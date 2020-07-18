import { Card } from './decks';

export const draw = (deck: Card[]): Card => {
  return deck[Math.floor(Math.random() * deck.length)];
};

export const drawN = (deck: Card[], size: number): Card[] => {
  /*   let shuffled = deck.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);*/
  return [];
};
