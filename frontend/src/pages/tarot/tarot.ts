import cards from '../../data/tarot-cards.json';

export { cards };
export type CardId = keyof typeof cards;
export type Orientation = 'upright' | 'reversed';
export type Spread = 'one' | 'three';

export interface SelectedCard {
  id: CardId;
  orientation: Orientation;
}

export interface Reading {
  deck: CardId[];
  selected: SelectedCard[];
  spread: Spread;
}

export const cardIds = Object.keys(cards) as CardId[];
export const positionNames = {
  focus: '지금의 핵심',
  past: '과거',
  present: '현재',
  future: '앞으로의 흐름',
} as const;
export const spreadPositions = {
  one: ['focus'],
  three: ['past', 'present', 'future'],
} as const;
export const readingKey = 'tarot.reading.v2';

export function isSelection(value: unknown): value is SelectedCard[] {
  return Array.isArray(value) && value.every((card) =>
    card && typeof card === 'object' &&
    typeof card.id === 'string' && Object.prototype.hasOwnProperty.call(cards, card.id) &&
    (card.orientation === 'upright' || card.orientation === 'reversed')) &&
    new Set(value.map((card) => card.id)).size === value.length;
}

export function createReading(spread: Spread = 'three'): Reading {
  const deck = [...cardIds];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return { deck, selected: [], spread };
}

export function isReading(value: unknown): value is Reading {
  if (!value || typeof value !== 'object') return false;
  const reading = value as Partial<Reading>;
  return (reading.spread === 'one' || reading.spread === 'three') &&
    Array.isArray(reading.deck) && reading.deck.length === cardIds.length &&
    reading.deck.every((id) => typeof id === 'string' && Object.prototype.hasOwnProperty.call(cards, id)) &&
    new Set(reading.deck).size === cardIds.length && isSelection(reading.selected) &&
    reading.selected.length <= spreadPositions[reading.spread].length;
}

export function readReading(): Reading | null {
  try {
    const saved = JSON.parse(sessionStorage.getItem(readingKey) || 'null');
    if (isReading(saved)) return saved;
  } catch {
    // Storage may be unavailable or contain an older, invalid reading.
  }
  return null;
}

export function saveReading(reading: Reading) {
  try {
    sessionStorage.setItem(readingKey, JSON.stringify(reading));
  } catch {
    // The active reading remains usable through React state when storage is blocked.
  }
}
