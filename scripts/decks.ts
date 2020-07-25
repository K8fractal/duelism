import { draw } from './deck_utils';

type Template =
  | 'POWER MEASURE'
  | 'MANNER'
  | 'CONNECTED_BY'
  | 'STYLE'
  | 'THEME'
  | 'SETTING'
  | 'DRESS_IN'
  | 'DRESS_AS'
  | 'REPRESENT'
  | 'WORLD';
type Quant = 'SINGLE' | 'DOUBLE';

interface BaseCard {
  deck: string;
  template: Template;
  quant: Quant;
}

interface DoubleCard extends BaseCard {
  deck: string;
  template: Template;
  quant: 'DOUBLE';
  rotation: 0 | 1;
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

interface AestheticsCard extends DoubleCard {
  text: [string, string];
  deck: 'AESTHETICS';
  template: 'STYLE' | 'THEME';
  quant: 'DOUBLE';
}

interface IdealsCard extends DoubleCard {
  text: [string, string];
  deck: 'IDEALS';
  template: 'REPRESENT';
  quant: 'DOUBLE';
}

interface MannersCard extends DoubleCard {
  text: [string, string];
  deck: 'MANNERS';
  template: 'MANNER';
  quant: 'DOUBLE';
}

interface PowerCard extends BaseCard {
  text: string;
  deck: 'POWER';
  template: 'POWER MEASURE';
  quant: 'SINGLE';
}

interface WorldCard extends BaseCard {
  text: string;
  deck: 'WORLD';
  template: 'WORLD';
  quant: 'SINGLE';
}

export type Card = ConnectionCard | AestheticsCard | CostumeCard | IdealsCard | MannersCard | PowerCard | WorldCard;

export const AestheticPairDeck: AestheticsCard[] = [
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['dark', 'light'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['clean', 'dirty'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['neat', 'messy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['round', 'pointy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['monochromatic', 'colorful'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['intricate', 'plain'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['black', 'white'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['earth', 'air'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['heights', 'depths'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['moon', 'sun'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['summer', 'winter'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['water', 'fire'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['prey', 'predator'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['large', 'small'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['age', 'youth'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['city', 'rural'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['bicycle', 'motorcycle'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['reptiles', 'mammals'] },
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

export const IdealPairDeck: IdealsCard[] = [
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['good', 'evil'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['order', 'chaos'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['freedom', 'loyalty'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['caution', 'action'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['heritage', 'progress'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['spirit', 'physicality'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['authority', 'rebellion'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['knowledge', 'innocence'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['community', 'individualism'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['revenge', 'forgiveness'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['purity', 'contrast'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['management', 'labor'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['diversity', 'unity'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['nature', 'technology'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['creation', 'destruction'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['faith', 'questioning'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['hierarchy', 'equality'] },
];

export const MannerPairDeck: MannersCard[] = [
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['populist', 'elitist'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['calm', 'energetic'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['disaster', 'blessed'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['sacred', 'profane'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['tame', 'feral'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['cheerful', 'grumpy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['direct', 'subtle'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['rich', 'poor'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['focused', 'opportunistic'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['slow', 'fast'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['hot', 'cold'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['hardworking', 'lazy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['modern', 'traditional'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['polite', 'rude'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['social', 'solitary'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['nervous', 'confident'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['adventurous', 'cautious'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['cynical', 'gullible'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['quiet', 'loud'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['practical', 'imaginative'] },
];

export const PowerDeck: PowerCard[] = [
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'crisis response skills' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'self-denial' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'self-sacrifice' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'storytelling' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'popularity' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'agricultural yield' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'fearlessness' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'secrets' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'words' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'imagination' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'followers' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'speed' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'territory' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'money' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'magic' },
];

export const WorldDeck: WorldCard[] = [
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'old ruins' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'feudalism' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'religion' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'olympic sports' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'megacities' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'TV entertainment' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'theater' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'proper etiquette' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'aliens' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'crime' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'monsters' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'academies' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'politics' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'warring nations' },
];

export const rotate = (card: DoubleCard): DoubleCard => {
  return { ...card, rotation: card.rotation == 1 ? 0 : 1 }; // return rotation:0 if rotation is 1, otherwise 0
};

export const getFormatString = (card: Card): string => {
  switch (card.template) {
    case 'STYLE':
      return 'in a {} style.';
    case 'THEME':
      return 'with a theme of {}.';
    case 'CONNECTED_BY':
      return 'You are connected by {}.';
    case 'SETTING':
      return 'Dress for a {} setting';
    case 'DRESS_AS':
      return 'Dress as {}';
    case 'DRESS_IN':
      return 'Dress in {}';
    case 'REPRESENT':
      return 'You represent {}.';
    case 'MANNER':
      return 'Act in a {} manner.';
    case 'POWER MEASURE':
      return 'where power is measured by {}';
    case 'WORLD':
      return 'In a world of {},';
  }
};

export const getCardText = (card: Card, index?: number): string => {
  // index: number | NULL ???
  switch (card.quant) {
    case 'SINGLE':
      return card.text;
    case 'DOUBLE':
      if (index == undefined) {
        return `${card.text[(0 + card.rotation) % 2]} or ${card.text[(1 + card.rotation) % 2]}`;
      }
      return card.text[(index + card.rotation) % 2];
  }
};

export const printCard = (card: Card, index?: number): string => {
  return getFormatString(card).replace('{}', getCardText(card, index));
};

export const Decks = {
  AestheticPairDeck,
  ConnectionDeck,
  CostumeDeck,
  IdealPairDeck,
  MannerPairDeck,
  PowerDeck,
  WorldDeck,
};

//
// * HAND INTERFACE & METHODS * //
//
// Hand card: Card and orientation
export interface HandCard {
  card: Card;
  rotation: 0 | 1;
}

export interface Hand {
  cards: Card[]; //Use this one
  /*costume: CostumeCard[];
  aesthetics: AestheticsCard[];
  ideals: IdealsCard[];
  manners: MannersCard[];
  world: WorldCard[];
  power: PowerCard[];
  connection: ConnectionCard[];*/
}

export const emptyHand: Hand = {
  cards: [],
};

export const debugHand: Hand = {
  cards: [Decks.IdealPairDeck[0], Decks.PowerDeck[1]],
};

export const randomHand = (): Hand => {
  return {
    cards: [
      draw(WorldDeck),
      draw(PowerDeck),
      draw(CostumeDeck),
      draw(AestheticPairDeck),
      draw(IdealPairDeck),
      draw(MannerPairDeck),
      draw(ConnectionDeck),
    ],
  };
};

export const addCard = (card: Card, hand: Hand): Hand => {
  const newHand = { cards: [...hand.cards, card] };
  return newHand;
};

export const removeCard = (card: Card, hand: Hand): Hand => {
  const location = hand.cards.indexOf(card);
  const newHand = { cards: [...hand.cards.slice(0, location), ...hand.cards.slice(location + 1)] };
  return newHand;
};
