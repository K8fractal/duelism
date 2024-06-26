/* Contains data and formatting for cards */

type Template =
  | 'POWER MEASURE'
  | 'MANNER'
  | 'CONNECTED_BY'
  | 'STYLE'
  | 'THEME'
  | 'THEME_OF'
  | 'SETTING'
  | 'DRESS_IN'
  | 'DRESS_AS'
  | 'REPRESENT'
  | 'WORLD';
type Quant = 'SINGLE' | 'DOUBLE';

export type Deck = 'WORLD' | 'POWER' | 'CONNECTION' | 'COSTUME' | 'AESTHETICS' | 'IDEALS' | 'MANNERS';

interface BaseCard {
  deck: Deck;
  template: Template;
  quant: Quant;
}

interface DoubleCard extends BaseCard {
  deck: Deck;
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
  template: 'STYLE' | 'THEME' | 'THEME_OF';
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
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['well-worn', 'fresh'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['smooth', 'rough'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['round', 'pointy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['monochromatic', 'colorful'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['simple', 'fancy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'STYLE', deck: 'AESTHETICS', text: ['expensive', 'economical'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['black', 'white'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['earth', 'air'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME_OF', deck: 'AESTHETICS', text: ['heights', 'depths'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['moon', 'sun'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['outdoor', 'indoor'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME_OF', deck: 'AESTHETICS', text: ['summer', 'winter'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['water', 'fire'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME_OF', deck: 'AESTHETICS', text: ['prey', 'predator'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['large', 'small'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME_OF', deck: 'AESTHETICS', text: ['age', 'youth'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['city', 'rural'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME', deck: 'AESTHETICS', text: ['bicycle', 'motorcycle'] },
  { quant: 'DOUBLE', rotation: 0, template: 'THEME_OF', deck: 'AESTHETICS', text: ['reptiles', 'mammals'] },
];

export const ConnectionDeck: ConnectionCard[] = [
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an unexpected mission' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a common responsibility' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a common enemy' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a shared performance' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'biological symbiosis' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a shared love' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'family' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a prophecy' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a mutual attraction' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a shared secret' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an unusual history' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an accidental life saving' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a hope for the future' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'an old mentorship' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: "respect for each other's ethics" },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: "respect for each other's skills" },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'doubt of their own factions' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'shared vital resources' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a common need' },
  { quant: 'SINGLE', template: 'CONNECTED_BY', deck: 'CONNECTION', text: 'a former relationship' },
];

export const CostumeDeck: CostumeCard[] = [
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'modern formal' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'modern informal' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'medieval fantasy' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'high fantasy' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'renaissance' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'space opera' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'steampunk' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'cyberpunk' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'post-apcalyptic' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'high fashion' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'underwater' },
  { quant: 'SINGLE', template: 'SETTING', deck: 'COSTUME', text: 'swashbuckling' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'uniforms' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'robes' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'floral designs' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'tie-dyes' },
  { quant: 'SINGLE', template: 'DRESS_IN', deck: 'COSTUME', text: 'stripes' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'anthropomorphic animals' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'household objects' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'pilots' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'superheroes' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'sailors' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'mythical creatures' },
  { quant: 'SINGLE', template: 'DRESS_AS', deck: 'COSTUME', text: 'machines' },
];

export const IdealPairDeck: IdealsCard[] = [
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['good', 'evil'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['order', 'chaos'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['freedom', 'safety'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['exploration', 'predictablity'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['loyalty', 'universal compassion'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['caution', 'action'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['heritage', 'progress'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['spirit', 'physicality'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['authority', 'rebellion'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['knowledge', 'innocence'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['community', 'individualism'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['justice', 'forgiveness'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['purity', 'contrast'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['management', 'labor'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['diversity', 'unity'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['nature', 'technology'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['creation', 'destruction'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['faith', 'questioning'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['hierarchy', 'consensus'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['style', 'substance'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['luck', 'skill'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['privacy', 'transparency'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['honor', 'utility'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['pride', 'humility'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['results', 'process'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['honesty', 'gentleness'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['equality', 'caregiving'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['beauty', 'practicality'] },
  { quant: 'DOUBLE', rotation: 0, template: 'REPRESENT', deck: 'IDEALS', text: ['intricacy', 'elegance'] },
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
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['hard-working', 'lazy'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['modern', 'traditional'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['polite', 'rude'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['social', 'solitary'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['nervous', 'confident'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['adventurous', 'cautious'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['cynical', 'gullible'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['quiet', 'loud'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['flexible', 'rigid'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['arrogant', 'humble'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['practical', 'imaginative'] },
  { quant: 'DOUBLE', rotation: 0, template: 'MANNER', deck: 'MANNERS', text: ['playful', 'strategic'] },
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
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'clever plans' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'scientific advancement' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'influence with leaders' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'strength' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'art' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'dexterity' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'raw materials' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'water' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'information' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'stock price' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'reputation' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'variety of resources' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'responsiveness' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'memory' },
  { quant: 'SINGLE', template: 'POWER MEASURE', deck: 'POWER', text: 'a specific rare resource' },
];

export const WorldDeck: WorldCard[] = [
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'old ruins' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'feudalism' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'religion' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'olympic sports' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'team sports' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'megacities' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'TV entertainment' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'theater' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'proper etiquette' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'aliens' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'crime' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'monsters' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'academies' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'politics' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'many islands' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'miracles' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'warring nations' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'immortality' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'airships' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'megacorps' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'the internet' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'pop stars' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'business' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'imminent doom' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'recent discovery' },
  { quant: 'SINGLE', template: 'WORLD', deck: 'WORLD', text: 'space ships' },
];

export const rotate = <T extends DoubleCard>(card: T): T => {
  return { ...card, rotation: card.rotation == 1 ? 0 : 1 }; // return rotation:0 if rotation is 1, otherwise 0
};

const formatStringByTemplate = (template: Template): string => {
  switch (template) {
    case 'STYLE':
      return 'in a {} style. ';
    case 'THEME':
      return 'with a {} theme. ';
    case 'THEME_OF':
      return 'with a theme of {}. ';
    case 'CONNECTED_BY':
      return 'two opposites are connected by {}. ';
    case 'SETTING':
      return 'Dress for a {} setting ';
    case 'DRESS_AS':
      return 'Dress as {} ';
    case 'DRESS_IN':
      return 'Dress in {} ';
    case 'REPRESENT':
      return 'You represent {} ';
    case 'MANNER':
      return 'and act in a {} manner. ';
    case 'POWER MEASURE':
      return 'where power is measured by {}, ';
    case 'WORLD':
      return 'In a world of {}, ';
  }
};

export const getFormatString = (card: Card): string => {
  return formatStringByTemplate(card.template);
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

export const printCombo = (comboText: string, format: Template): string => {
  return formatStringByTemplate(format).replace('{}', comboText);
};

export const printCostumeCombo = (cards: Card[]): string => {
  const settings = cards.filter((card) => card.template == 'SETTING');
  const dress_as = cards.filter((card) => card.template == 'DRESS_AS');
  const dress_in = cards.filter((card) => card.template == 'DRESS_IN');
  let result = 'Dress ';
  if (settings.length > 0) {
    result += 'for a ';
    result += settings[0].text;
    for (let i = 1; i < settings.length; i++) {
      result += ', ';
      result += settings[i].text;
    }
    result += ' setting ';
  }
  if (dress_as.length > 0) {
    result += 'as ';
    result += dress_as[0].text;
    for (let i = 1; i < dress_as.length; i++) {
      result += ' and ';
      result += dress_as[i].text;
    }
    result += ' ';
  }
  if (dress_in.length > 0) {
    result += 'in ';
    result += dress_in[0].text;
    for (let i = 1; i < dress_in.length; i++) {
      result += ' and ';
      result += dress_in[i].text;
    }
    result += ' ';
  }
  return result;
  //return 'Dress for a {} setting as {} in {} ';
};

export const printStyleCombo = (cards: Card[], index: number): string => {
  let result = '';
  // 'in a {} style with a {} theme of {}. '
  const styles = cards.filter((card) => card.template == 'STYLE');
  const themes = cards.filter((card) => card.template == 'THEME');
  const themes_of = cards.filter((card) => card.template == 'THEME_OF');
  if (styles.length > 0) {
    result += 'in a ';
    result += getCardText(styles[0], index);
    for (let i = 1; i < styles.length; i++) {
      result += ' ';
      result += getCardText(styles[i], index);
    }
    result += ' style';
  }
  if (themes.length > 0) {
    result += ' with a ';
    result += getCardText(themes[0], index);
    for (let i = 1; i < themes.length; i++) {
      result += ' and ';
      result += getCardText(themes[i], index);
    }
    result += ' theme';
  }
  if (themes_of.length > 0) {
    if (themes.length == 0) {
      result += ' with a theme';
    }
    result += ' of ';
    result += getCardText(themes_of[0], index);
    for (let i = 1; i < themes_of.length; i++) {
      result += ' and ';
      result += getCardText(themes_of[i], index);
    }
  }
  result += '. ';
  return result;
};

export const Decks = {
  AESTHETICS: AestheticPairDeck,
  CONNECTION: ConnectionDeck,
  COSTUME: CostumeDeck,
  IDEALS: IdealPairDeck,
  MANNERS: MannerPairDeck,
  POWER: PowerDeck,
  WORLD: WorldDeck,
};
