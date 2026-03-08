import { TarotCard, DrawnCard } from "@/types/tarot";
import { fullDeck } from "@/data/tarotDatabase";

export class TarotEngine {
  static shuffle(deck: TarotCard[]): TarotCard[] {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  static determineReversals(cards: TarotCard[]): DrawnCard[] {
    return cards.map((card) => ({
      card,
      isReversed: Math.random() > 0.5,
    }));
  }

  static drawCards(count: number): DrawnCard[] {
    const shuffled = this.shuffle(fullDeck);
    const drawn = shuffled.slice(0, count);
    return this.determineReversals(drawn);
  }

  static getDailyCard(dateStr: string): DrawnCard {
    // Deterministic based on date string
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash) % fullDeck.length;
    const isReversed = Math.abs(hash) % 3 === 0; // ~33% chance
    return { card: fullDeck[index], isReversed };
  }
}
