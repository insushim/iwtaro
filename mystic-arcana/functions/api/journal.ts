interface Env {
  GEMINI_API_KEY: string;
  DB: D1Database;
}

interface JournalRow {
  id: string;
  date: string;
  spread_data: string;
  cards_data: string;
  question: string;
  category: string;
  reading_data: string;
  is_favorite: number;
  created_at: string;
}

interface JournalEntry {
  id: string;
  date: string;
  spread: unknown;
  cards: unknown;
  question: string;
  category: string;
  reading: unknown;
  isFavorite: boolean;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

function rowToEntry(row: JournalRow): JournalEntry {
  return {
    id: row.id,
    date: row.date,
    spread: JSON.parse(row.spread_data),
    cards: JSON.parse(row.cards_data),
    question: row.question,
    category: row.category,
    reading: JSON.parse(row.reading_data),
    isFavorite: row.is_favorite === 1,
  };
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const limit = parseInt(url.searchParams.get("limit") || "50", 10);
    const offset = parseInt(url.searchParams.get("offset") || "0", 10);
    const favoritesOnly = url.searchParams.get("favorites") === "true";

    let query = "SELECT * FROM journal_entries";
    const params: unknown[] = [];

    if (favoritesOnly) {
      query += " WHERE is_favorite = 1";
    }

    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const result = await context.env.DB.prepare(query)
      .bind(...params)
      .all<JournalRow>();

    const entries = (result.results || []).map(rowToEntry);

    // Get total count
    let countQuery = "SELECT COUNT(*) as total FROM journal_entries";
    if (favoritesOnly) {
      countQuery += " WHERE is_favorite = 1";
    }
    const countResult = await context.env.DB.prepare(countQuery).first<{
      total: number;
    }>();
    const total = countResult?.total ?? 0;

    return jsonResponse({ entries, total, limit, offset });
  } catch (error) {
    console.error("Journal GET error:", error);
    return jsonResponse({ error: "Failed to fetch journal entries" }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as {
      id?: string;
      date: string;
      spread: unknown;
      cards: unknown;
      question?: string;
      category?: string;
      reading: unknown;
      isFavorite?: boolean;
    };

    const id = body.id || crypto.randomUUID();
    const date = body.date || new Date().toISOString();
    const spreadData = JSON.stringify(body.spread);
    const cardsData = JSON.stringify(body.cards);
    const question = body.question || "";
    const category = body.category || "general";
    const readingData = JSON.stringify(body.reading);
    const isFavorite = body.isFavorite ? 1 : 0;

    await context.env.DB.prepare(
      `INSERT INTO journal_entries (id, date, spread_data, cards_data, question, category, reading_data, is_favorite)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         spread_data = excluded.spread_data,
         cards_data = excluded.cards_data,
         question = excluded.question,
         category = excluded.category,
         reading_data = excluded.reading_data,
         is_favorite = excluded.is_favorite`,
    )
      .bind(
        id,
        date,
        spreadData,
        cardsData,
        question,
        category,
        readingData,
        isFavorite,
      )
      .run();

    return jsonResponse({ success: true, id });
  } catch (error) {
    console.error("Journal POST error:", error);
    return jsonResponse({ error: "Failed to save journal entry" }, 500);
  }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return jsonResponse({ error: "Missing id parameter" }, 400);
    }

    const result = await context.env.DB.prepare(
      "DELETE FROM journal_entries WHERE id = ?",
    )
      .bind(id)
      .run();

    if (result.meta.changes === 0) {
      return jsonResponse({ error: "Entry not found" }, 404);
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Journal DELETE error:", error);
    return jsonResponse({ error: "Failed to delete journal entry" }, 500);
  }
};

export const onRequestPut: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as {
      id: string;
      isFavorite?: boolean;
    };

    if (!body.id) {
      return jsonResponse({ error: "Missing id" }, 400);
    }

    if (typeof body.isFavorite === "boolean") {
      await context.env.DB.prepare(
        "UPDATE journal_entries SET is_favorite = ? WHERE id = ?",
      )
        .bind(body.isFavorite ? 1 : 0, body.id)
        .run();
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Journal PUT error:", error);
    return jsonResponse({ error: "Failed to update journal entry" }, 500);
  }
};
