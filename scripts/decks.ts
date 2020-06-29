type Template = 'CONNECTED_BY' | 'STYLE' | 'THEME' | 'SETTING' | 'DRESS_IN' | 'DRESS_AS';
type Quant = 'SINGLE' | 'DOUBLE';

interface BaseCard {
  deck: string;
  template: Template;
  quant: Quant;
}

interface CostumeCard extends BaseCard {
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

export type Card = ConnectionCard | AestheticsCard | CostumeCard;

const card: Card = null;

const getFormatString = (card: Card) => {
  switch (card.template) {
    case 'STYLE':
      return 'in a {} style';
    case 'THEME':
      return 'with a theme of {}';
    case 'CONNECTED_BY':
      return 'You are connected by {}.';
    case 'SETTING':
      return 'Dress for a {} setting.';
    case 'DRESS_AS':
      return 'Dress as {}';
    case 'DRESS_IN':
      return 'Dress in {}';
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

export const ConnectionDeck: ConnectionCard[] = [
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an unexpected mission' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a common responsibility' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a common enemy' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a shared performance' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'biological symbiosis' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a shared love' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an accidental life saving' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a hope for the future' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an old mentorship' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: "respect for each other's ethics" },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: "respect for each other's skills" },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'doubt of your own factions' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'shared vital resources' },
];

export const CostumeDeck: CostumeCard[] = [
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'modern formal' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'modern informal' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'medieval fantasy' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'renaissance' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'space opera' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'steampunk' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'cyberpunk' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'post-apcalyptic' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'high fashion' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'underwater' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'uniforms' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'floral designs' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'anthropomorphic animals' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'household objects' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'pilots' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'superheroes' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'sailors' },
];

const getCardText = (card: Card, index?: number): string => {
  // index: number | NULL ???
  switch (card.quant) {
    case 'SINGLE':
      return card.text;
    case 'DOUBLE':
      if (index == undefined) {
        return `${card.text[0]} or ${card.text[1]}`;
      }
      return card.text[index];
  }
};

export const printCard = (card: Card, index?: number): string => {
  return getFormatString(card).replace('{}', getCardText(card, index));
};

export const Decks = { AestheticPairDeck, ConnectionDeck, CostumeDeck };
