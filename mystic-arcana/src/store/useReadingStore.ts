import { create } from "zustand";
import type {
  Language,
  ReadingCategory,
  Spread,
  DrawnCard,
  ReadingResult,
  JournalEntry,
} from "@/types/tarot";

const JOURNAL_STORAGE_KEY = "mystic-arcana-journal";
const LANGUAGE_STORAGE_KEY = "mystic-arcana-language";
const SOUND_STORAGE_KEY = "mystic-arcana-sound";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "ko";
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "ko") return stored;
  } catch {
    // localStorage not available
  }
  return "ko";
}

function getStoredSound(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const stored = localStorage.getItem(SOUND_STORAGE_KEY);
    if (stored !== null) return stored === "true";
  } catch {
    // localStorage not available
  }
  return true;
}

function getStoredJournal(): JournalEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(JOURNAL_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // localStorage not available or corrupted
  }
  return [];
}

function saveJournal(entries: JournalEntry[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // localStorage full or not available
  }
}

interface ReadingStore {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;

  // Reading flow
  step:
    | "category"
    | "spread"
    | "question"
    | "shuffle"
    | "select"
    | "reveal"
    | "reading"
    | "result";
  setStep: (step: ReadingStore["step"]) => void;

  // Selections
  selectedCategory: ReadingCategory | null;
  setSelectedCategory: (cat: ReadingCategory) => void;
  selectedSpread: Spread | null;
  setSelectedSpread: (spread: Spread) => void;
  question: string;
  setQuestion: (q: string) => void;

  // Cards
  drawnCards: DrawnCard[];
  setDrawnCards: (cards: DrawnCard[]) => void;
  revealedCards: number[];
  revealCard: (index: number) => void;

  // Result
  readingResult: ReadingResult | null;
  setReadingResult: (result: ReadingResult) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Journal
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: JournalEntry) => void;
  removeJournalEntry: (id: string) => void;
  toggleFavorite: (id: string) => void;
  loadJournal: () => void;

  // Sound
  soundEnabled: boolean;
  toggleSound: () => void;

  // Reset
  resetReading: () => void;
}

const initialReadingState = {
  step: "category" as const,
  selectedCategory: null as ReadingCategory | null,
  selectedSpread: null as Spread | null,
  question: "",
  drawnCards: [] as DrawnCard[],
  revealedCards: [] as number[],
  readingResult: null as ReadingResult | null,
  isLoading: false,
};

const useReadingStore = create<ReadingStore>((set, get) => ({
  // Initial state
  ...initialReadingState,
  language: getStoredLanguage(),
  soundEnabled: getStoredSound(),
  journalEntries: getStoredJournal(),

  // Language
  setLanguage: (lang) => {
    set({ language: lang });
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  },

  // Reading flow
  setStep: (step) => set({ step }),

  // Selections
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
  setSelectedSpread: (spread) => set({ selectedSpread: spread }),
  setQuestion: (q) => set({ question: q }),

  // Cards
  setDrawnCards: (cards) => set({ drawnCards: cards }),
  revealCard: (index) =>
    set((state) => {
      if (state.revealedCards.includes(index)) return state;
      return { revealedCards: [...state.revealedCards, index] };
    }),

  // Result
  setReadingResult: (result) => set({ readingResult: result }),
  setIsLoading: (loading) => set({ isLoading: loading }),

  // Journal
  addJournalEntry: (entry) => {
    const updated = [entry, ...get().journalEntries];
    set({ journalEntries: updated });
    saveJournal(updated);
  },

  removeJournalEntry: (id) => {
    const updated = get().journalEntries.filter((e) => e.id !== id);
    set({ journalEntries: updated });
    saveJournal(updated);
  },

  toggleFavorite: (id) => {
    const updated = get().journalEntries.map((e) =>
      e.id === id ? { ...e, isFavorite: !e.isFavorite } : e,
    );
    set({ journalEntries: updated });
    saveJournal(updated);
  },

  loadJournal: () => {
    set({ journalEntries: getStoredJournal() });
  },

  // Sound
  toggleSound: () => {
    const newValue = !get().soundEnabled;
    set({ soundEnabled: newValue });
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, String(newValue));
    } catch {
      // ignore
    }
  },

  // Reset
  resetReading: () => set(initialReadingState),
}));

export default useReadingStore;
