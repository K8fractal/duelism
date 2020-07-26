import React from 'react';
import { Card, getFormatString, getCardText } from './decks';

interface Props {
  card: Card;
}

const CardFace = ({ card }: Props): JSX.Element => {
  return <div className="box">{coloredCardText(card)}</div>;
};

export default CardFace;

const coloredCardText = (card: Card, index?: number): JSX.Element => {
  let color = 'Black';
  switch (card.deck) {
    case 'AESTHETICS':
      color = 'Goldenrod';
      break;
    case 'CONNECTION':
      color = 'Green';
      break;
    case 'COSTUME':
      color = 'Maroon';
      break;
    case 'IDEALS':
      color = 'Red';
      break;
    case 'MANNERS':
      color = 'Magenta';
      break;
    case 'POWER':
      color = 'DarkTurquoise';
      break;
    case 'WORLD':
      color = 'Blue';
      break;
  }
  const formats: string[] = getFormatString(card).split('{}');
  if (formats.length == 2) {
    return (
      <div>
        {formats[0]}
        <span style={{ color: color, fontWeight: 'bold' }}>{getCardText(card, index)}</span>
        {formats[1]}
      </div>
    );
  }
  if (formats.length == 1) {
    return (
      <div>
        {formats[0]}
        <span style={{ color: color }}>{getCardText(card, index)}</span>
        {}
      </div>
    );
  } else {
    return (
      <div>
        <span style={{ color: color }}>{getCardText(card, index)}</span>
      </div>
    );
  }
};

//   return getFormatString(card).replace('{}', getCardText(card, index));
