type Template = 'CONNECTED_BY' | 'STYLE' | 'THEME' | 'SETTING' | 'DRESS_IN' | 'DRESS_AS';
type Quant = 'SINGLE' | 'DOUBLE';

interface BaseCard {
  deck: string;
  template: Template;
  quant: Quant;
}

interface CostumeCard extends BaseCard{
  text: string;
  deck: 'COSTUME';
  template: 'SETTING' | 'DRESS_IN' | 'DRESS_AS';
  quant: 'SINGLE';
}

interface ConnectionCard extends BaseCard {
  text: string;
  deck: 'CONNECTION';
  template: 'CONNECTED_BY';
  quant: 'SINGLE';
}

interface AestheticsCard extends BaseCard {
  text: [string, string];
  deck: 'AESTHETICS';
  template: 'STYLE' | 'THEME';
  quant: 'DOUBLE';
}

export type Card = ConnectionCard | AestheticsCard;

const card: Card = null;

const getFormatString = (card: Card) => {
  switch (card.template) {
    case 'STYLE':
      return 'in a {} style';
    case 'THEME':
      return 'with a theme of {}';
    case 'CONNECTED_BY':
      return 'You are connected by {}.';
  }
};

export const AestheticPairDeck: AestheticsCard[] = [
  { quant: 'DOUBLE', template: 'STYLE', deck: 'AESTHETICS', text: ['dark', 'light'] },
  { quant: 'DOUBLE', template: 'STYLE', deck: 'AESTHETICS', text: ['clean', 'dirty'] },
  { quant: 'DOUBLE', template: 'STYLE', deck: 'AESTHETICS', text: ['neat', 'messy'] },
  { quant: 'DOUBLE', template: 'STYLE', deck: 'AESTHETICS', text: ['round', 'pointy'] },
  { quant: 'DOUBLE', template: 'STYLE', deck: 'AESTHETICS', text: ['monochromatic', 'colorful'] },
  { quant: 'DOUBLE', template: 'STYLE', deck: 'AESTHETICS', text: ['intricate', 'plain'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['black', 'white'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['earth', 'air'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['heights', 'depths'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['moon', 'sun'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['summer', 'winter'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['water', 'fire'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['prey', 'predator'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['large', 'small'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['age', 'youth'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['city', 'rural'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['bicycle', 'motorcycle'] },
  { quant: 'DOUBLE', template: 'THEME', deck: 'AESTHETICS', text: ['reptiles', 'mammals'] },
];

const getCardText = (card: Card, index: number): string => {
  switch (card.quant) {
    case 'SINGLE':
      return card.text;
    case 'DOUBLE':
      return card.text[index];
  }
};

export const printCard = (card: Card, index: number): string => {
  return getFormatString(card).replace('{}', getCardText(card, index));
};
