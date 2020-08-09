import React from 'react';
import { Card, getFormatString, getCardText } from './decks';

interface Props {
  card: Card;
}

const CardFace = ({ card }: Props): JSX.Element => {
  return <div className="card">{coloredCardText(card)}</div>;
};

export default CardFace;

const coloredCardText = (card: Card, index?: number): JSX.Element => {
  const formats: string[] = getFormatString(card).split('{}');
  if (formats.length == 2) {
    return (
      <div>
        {formats[0]}
        <span style={{ fontWeight: 'bold' }} className={card.deck}>
          {getCardText(card, index)}
        </span>
        {formats[1]}
      </div>
    );
  }
  if (formats.length == 1) {
    return (
      <div>
        {formats[0]}
        <span style={{ fontWeight: 'bold' }} className={card.deck}>
          {getCardText(card, index)}
        </span>
        {}
      </div>
    );
  } else {
    return (
      <div>
        <span style={{ fontWeight: 'bold' }} className={card.deck}>
          {getCardText(card, index)}
        </span>
      </div>
    );
  }
};

//   return getFormatString(card).replace('{}', getCardText(card, index));
