import React, { useState } from 'react';
import { Card, printCard, getFormatString, getCardText } from './decks';

interface Props {
  card: Card;
}

export const CardFace = ({ card }: Props): JSX.Element => {
  //* Switch on type for color of border *//
  return <div className="box">{printCard(card)}</div>;
};
