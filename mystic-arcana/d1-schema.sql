CREATE TABLE IF NOT EXISTS journal_entries (
  id TEXT PRIMARY KEY,
  date TEXT NOT NULL,
  spread_data TEXT NOT NULL,
  cards_data TEXT NOT NULL,
  question TEXT DEFAULT '',
  category TEXT DEFAULT 'general',
  reading_data TEXT NOT NULL,
  is_favorite INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_journal_date ON journal_entries(date);
