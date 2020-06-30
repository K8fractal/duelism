import React, { useState } from 'react';
import { Card, printCard } from './decks';

interface Props {
  card: Card;
}

export const CardFace = ({ card }: Props): JSX.Element => {
  return <div>{printCard(card)}</div>;
};
