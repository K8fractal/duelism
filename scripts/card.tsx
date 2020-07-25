import React, { useState } from 'react';
import { Card, printCard, getFormatString, getCardText } from './decks';

interface Props {
  card: Card;
}

export const CardFace = ({ card }: Props): JSX.Element => {
  //* Switch on type for color of border *//
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
      color = 'Magenta';
      break;
    case 'MANNERS':
      color = 'Cyan';
      break;
    case 'POWER':
      color = 'Blue';
      break;
    case 'WORLD':
      color = 'Navy';
      break;
  }
  return (
    <div className="box" style={{ color: color }}>
      {printCard(card)}
    </div>
  );
};
