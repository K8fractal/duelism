import React, { useState } from 'react';
import { Decks, Card, Hand, printCard, getFormatString, getCardText, emptyHand } from './decks';

/*interface Props {
  hand: Hand;
}*/

export const CardFace = (/*{ hand }: Props*/): JSX.Element => {
  const [cards, setCards] = useState(emptyHand);

  /*return (
    <>
      <div>
        {name}: {value}
      </div>
      <div>
        <button onClick={() => setValue(value + 1)}>Increase</button>
        <button onClick={() => setValue(value - 1)}>Decrease</button>
      </div>
    </>
  );*/
  return <div className="box">STUB</div>;
};
