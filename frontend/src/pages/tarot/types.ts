import { CSSProperties } from 'react';

interface ExtendedCSSProperties extends CSSProperties {
  '--card-src'?: string;
}

interface SelectedCards {
  past: TarotCardName | null;
  present: TarotCardName | null;
  future: TarotCardName | null;
}

const initialTarotData = {
  past: null,
  present: null,
  future: null,
};

type TarotCardName =
  | 'FOOL'
  | 'MAGICIAN'
  | 'PRIESTESS'
  | 'EMPRESS'
  | 'EMPEROR'
  | 'HIEROPHANT'
  | 'LOVERS'
  | 'CHARIOT'
  | 'STRENGTH'
  | 'HERMIT'
  | 'FORTUNE'
  | 'JUSTICE'
  | 'HANGEDMAN'
  | 'DEATH'
  | 'TEMPERANCE'
  | 'DEVIL'
  | 'TOWER'
  | 'STAR'
  | 'MOON'
  | 'SUN'
  | 'JUDGEMENT'
  | 'WORLD';

const cardNames: TarotCardName[] = [
  'FOOL', // '바보', // The Fool
  'MAGICIAN', // '마법사', // The Magician
  'PRIESTESS', // '여사제', // The High Priestess
  'EMPRESS', // '여제', // The Empress
  'EMPEROR', // '황제', // The Emperor
  'HIEROPHANT', // '교황', // The Hierophant
  'LOVERS', // '연인', // The Lovers
  'CHARIOT', // '전차', // The Chariot
  'STRENGTH', // '힘', // Strength
  'HERMIT', // '은둔자', // The Hermit
  'FORTUNE', // '운명의 수레바퀴', // Wheel of Fortune
  'JUSTICE', // '정의', // Justice
  'HANGEDMAN', // '매달린 남자', // The Hanged Man
  'DEATH', // '죽음', // Death
  'TEMPERANCE', // '절제', // Temperance
  'DEVIL', // '악마', // The Devil
  'TOWER', // '탑', // The Tower
  'STAR', // '별', // The Star
  'MOON', // '달', // The Moon
  'SUN', // '태양', // The Sun
  'JUDGEMENT', // '심판', // Judgment
  'WORLD', // '세계', // The World
];

export { initialTarotData, cardNames };
export type { ExtendedCSSProperties, SelectedCards };
