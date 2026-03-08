import { TarotCard } from "@/types/tarot";
import { majorArcana1 } from "./majorArcana1";
import { majorArcana2 } from "./majorArcana2";
import { wandsCards } from "./wands";
import { cupsCards } from "./cups";
import { swordsCards } from "./swords";
import { pentaclesCards } from "./pentacles";

export const majorArcana: TarotCard[] = [...majorArcana1, ...majorArcana2];

export const fullDeck: TarotCard[] = [
  ...majorArcana,
  ...wandsCards,
  ...cupsCards,
  ...swordsCards,
  ...pentaclesCards,
];

export { wandsCards, cupsCards, swordsCards, pentaclesCards };

export const getCardById = (id: number): TarotCard | undefined =>
  fullDeck.find((card) => card.id === id);

export const getCardsByArcana = (arcana: "major" | "minor"): TarotCard[] =>
  fullDeck.filter((card) => card.arcana === arcana);

export const getCardsBySuit = (
  suit: "wands" | "cups" | "swords" | "pentacles",
): TarotCard[] => fullDeck.filter((card) => card.suit === suit);
