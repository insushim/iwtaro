export interface TarotCard {
  id: number;
  name: string;
  nameKo: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  number: number;
  element: string;
  elementKo: string;
  zodiac: string;
  zodiacKo: string;
  planet?: string;
  planetKo?: string;
  keywords: {
    upright: string[];
    uprightKo: string[];
    reversed: string[];
    reversedKo: string[];
  };
  meaning: {
    upright: {
      general: string;
      generalKo: string;
      love: string;
      loveKo: string;
      career: string;
      careerKo: string;
      finance: string;
      financeKo: string;
      health: string;
      healthKo: string;
      spirituality: string;
      spiritualityKo: string;
    };
    reversed: {
      general: string;
      generalKo: string;
      love: string;
      loveKo: string;
      career: string;
      careerKo: string;
      finance: string;
      financeKo: string;
      health: string;
      healthKo: string;
      spirituality: string;
      spiritualityKo: string;
    };
  };
  symbolism: string;
  symbolismKo: string;
  advice: string;
  adviceKo: string;
  yesOrNo: "yes" | "no" | "maybe";
  numerology: string;
  numerologyKo: string;
  affirmation: string;
  affirmationKo: string;
  cardBackEmoji: string;
  visualDescription: string;
}

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
}

export interface SpreadPosition {
  id: number;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  x: number;
  y: number;
  rotation?: number;
}

export interface Spread {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  cardCount: number;
  positions: SpreadPosition[];
  icon: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  bestFor: string[];
  bestForKo: string[];
}

export interface ReadingCategory {
  id: string;
  name: string;
  nameKo: string;
  icon: string;
  description: string;
  descriptionKo: string;
  sampleQuestions: string[];
  sampleQuestionsKo: string[];
}

export interface ReadingResult {
  opening: string;
  cardInterpretations: Array<{
    position: string;
    cardName: string;
    isReversed: boolean;
    interpretation: string;
    advice: string;
  }>;
  cardInteractions: string;
  overallMessage: string;
  actionableAdvice: string;
  affirmation: string;
  luckyElements: {
    color: string;
    number: string;
    day: string;
  };
}

export interface JournalEntry {
  id: string;
  date: string;
  spread: Spread;
  cards: DrawnCard[];
  question: string;
  category: string;
  reading: ReadingResult;
  isFavorite: boolean;
}

export type Language = "ko" | "en";

export interface ReadingState {
  step:
    | "category"
    | "spread"
    | "question"
    | "shuffle"
    | "select"
    | "reveal"
    | "reading"
    | "result";
  selectedCategory: ReadingCategory | null;
  selectedSpread: Spread | null;
  question: string;
  drawnCards: DrawnCard[];
  revealedCards: number[];
  readingResult: ReadingResult | null;
  isLoading: boolean;
  language: Language;
}
