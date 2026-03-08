interface Env {
  GEMINI_API_KEY: string;
  DB: D1Database;
}

interface DrawnCard {
  card: {
    id: number;
    name: string;
    nameKo: string;
    arcana: "major" | "minor";
    suit?: string;
    number: number;
    element: string;
    elementKo: string;
    zodiac: string;
    zodiacKo: string;
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
    yesOrNo: string;
    numerology: string;
    numerologyKo: string;
    affirmation: string;
    affirmationKo: string;
  };
  isReversed: boolean;
}

interface SpreadPosition {
  id: number;
  name: string;
  nameKo: string;
}

interface Spread {
  id: string;
  name: string;
  nameKo: string;
  positions: SpreadPosition[];
}

type Language = "ko" | "en";

interface ReadingRequest {
  cards: DrawnCard[];
  spread: Spread;
  question: string;
  category: string;
  language: Language;
}

interface ReadingResult {
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

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
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

type CategoryKey =
  | "general"
  | "love"
  | "career"
  | "finance"
  | "health"
  | "spirituality";
type CategoryKoKey =
  | "generalKo"
  | "loveKo"
  | "careerKo"
  | "financeKo"
  | "healthKo"
  | "spiritualityKo";

function getCategoryKeys(category: string): {
  en: CategoryKey;
  ko: CategoryKoKey;
} {
  const map: Record<string, { en: CategoryKey; ko: CategoryKoKey }> = {
    love: { en: "love", ko: "loveKo" },
    career: { en: "career", ko: "careerKo" },
    finance: { en: "finance", ko: "financeKo" },
    health: { en: "health", ko: "healthKo" },
    spirituality: { en: "spirituality", ko: "spiritualityKo" },
  };
  return map[category] ?? { en: "general", ko: "generalKo" };
}

function buildReadingPrompt(
  cards: DrawnCard[],
  spread: Spread,
  question: string,
  category: string,
  language: Language,
): { systemPrompt: string; userMessage: string } {
  const isKo = language === "ko";
  const catKeys = getCategoryKeys(category);

  const systemPrompt = isKo
    ? `당신은 30년 이상의 경력을 가진 세계 최고의 타로 마스터입니다. 당신은 카드의 상징, 수비학, 원소적 연결, 점성술에 대한 깊은 지식을 가지고 있습니다.

## 해석 지침
- 각 카드에 대해 제공된 **상징(Symbolism)**, **수비학(Numerology)**, **원소(Element)**, **황도대(Zodiac)** 정보를 반드시 참조하여 해석하세요.
- 각 카드의 고유한 상징과 이미지를 구체적으로 언급하세요.
- 질문자의 구체적인 질문에 카드 의미를 연결하세요.
- 카드 간의 **원소적 상호작용**(불/물/공기/흙)을 분석하세요 (예: 불+공기=에너지 증폭, 물+흙=안정적 성장).
- **수비학적 패턴**을 고려하세요 (반복되는 숫자, 숫자의 합 등).
- 카테고리별(연애/직업/재정/건강/영성) 맞춤 인사이트를 제공하세요.
- 일반적인 해석이 아닌, **깊이 있고 개인화된** 해석을 제공하세요.
- 각 카드 해석은 최소 **5-8문장** 이상이어야 합니다.
- 전체 리딩은 전문 타로 리더의 **30분 세션**처럼 풍부하고 상세해야 합니다.
- 제공된 카드 데이터의 키워드, 의미, 조언을 적극 활용하되, 단순 나열이 아닌 스토리텔링으로 엮어주세요.

반드시 아래의 JSON 형식으로만 응답하세요. JSON 외의 텍스트는 포함하지 마세요.

{
  "opening": "리딩을 시작하는 따뜻하고 신비로운 인사말 (2-3문장)",
  "cardInterpretations": [
    {
      "position": "카드 위치 이름",
      "cardName": "카드 이름",
      "isReversed": true/false,
      "interpretation": "이 위치에서 이 카드의 깊은 해석 (5-8문장, 상징/원소/수비학 포함)",
      "advice": "이 카드에서 얻을 수 있는 구체적인 조언 (2-3문장)"
    }
  ],
  "cardInteractions": "카드들 사이의 원소적 상호작용, 수비학적 패턴, 전체적 흐름 분석 (5-7문장)",
  "overallMessage": "전체적인 리딩 메시지와 핵심 인사이트 (5-7문장)",
  "actionableAdvice": "질문자가 취할 수 있는 구체적이고 실행 가능한 조언 (3-4문장)",
  "affirmation": "오늘의 확언/긍정 문구 (1문장)",
  "luckyElements": {
    "color": "행운의 색상",
    "number": "행운의 숫자",
    "day": "행운의 요일"
  }
}`
    : `You are the world's best tarot master with over 30 years of experience. You possess deep knowledge of card symbolism, numerology, elemental connections, and astrology.

## Interpretation Guidelines
- You MUST reference the **Symbolism**, **Numerology**, **Element**, and **Zodiac** data provided for each card.
- Specifically mention each card's unique symbolism and imagery.
- Connect card meanings to the querent's specific question.
- Analyze **elemental interactions** between cards (fire/water/air/earth). For example: fire+air = amplified energy, water+earth = stable growth.
- Consider **numerological patterns** (repeating numbers, sum of numbers, etc.).
- Provide category-specific insights (love/career/finance/health/spirituality).
- Give deeply **personalized interpretations**, not generic ones.
- Each card interpretation should be **5-8 sentences minimum**.
- The overall reading should feel like a professional **30-minute tarot session** — rich and detailed.
- Actively use the provided card data (keywords, meanings, advice) but weave them into a narrative, not a list.

You MUST respond ONLY in the following JSON format. Do not include any text outside of the JSON.

{
  "opening": "A warm and mystical greeting to begin the reading (2-3 sentences)",
  "cardInterpretations": [
    {
      "position": "Card position name",
      "cardName": "Card name",
      "isReversed": true/false,
      "interpretation": "Deep interpretation of this card in this position (5-8 sentences, including symbolism/elements/numerology)",
      "advice": "Specific advice from this card (2-3 sentences)"
    }
  ],
  "cardInteractions": "Analysis of elemental interactions, numerological patterns, and overall flow between cards (5-7 sentences)",
  "overallMessage": "The overall reading message and key insights (5-7 sentences)",
  "actionableAdvice": "Specific, actionable advice the querent can take (3-4 sentences)",
  "affirmation": "An affirmation or positive statement for today (1 sentence)",
  "luckyElements": {
    "color": "Lucky color",
    "number": "Lucky number",
    "day": "Lucky day of the week"
  }
}`;

  const cardDescriptions = cards
    .map((drawnCard, index) => {
      const position = spread.positions[index];
      const positionName = isKo
        ? (position?.nameKo ?? position?.name)
        : position?.name;
      const cardName = isKo ? drawnCard.card.nameKo : drawnCard.card.name;
      const orientation = drawnCard.isReversed
        ? isKo
          ? "역방향"
          : "Reversed"
        : isKo
          ? "정방향"
          : "Upright";
      const meaningKey = drawnCard.isReversed ? "reversed" : "upright";

      // All keywords (both upright and reversed for context)
      const activeKeywords = drawnCard.isReversed
        ? isKo
          ? drawnCard.card.keywords.reversedKo.join(", ")
          : drawnCard.card.keywords.reversed.join(", ")
        : isKo
          ? drawnCard.card.keywords.uprightKo.join(", ")
          : drawnCard.card.keywords.upright.join(", ");

      // General meaning
      const generalMeaning = isKo
        ? drawnCard.card.meaning[meaningKey].generalKo
        : drawnCard.card.meaning[meaningKey].general;

      // Category-specific meaning
      const categoryMeaning = isKo
        ? drawnCard.card.meaning[meaningKey][catKeys.ko]
        : drawnCard.card.meaning[meaningKey][catKeys.en];

      // Symbolism
      const symbolism = isKo
        ? drawnCard.card.symbolismKo
        : drawnCard.card.symbolism;

      // Numerology
      const numerology = isKo
        ? drawnCard.card.numerologyKo
        : drawnCard.card.numerology;

      // Element & Zodiac
      const element = isKo ? drawnCard.card.elementKo : drawnCard.card.element;
      const zodiac = isKo ? drawnCard.card.zodiacKo : drawnCard.card.zodiac;

      // Advice
      const advice = isKo ? drawnCard.card.adviceKo : drawnCard.card.advice;

      // Affirmation
      const affirmation = isKo
        ? drawnCard.card.affirmationKo
        : drawnCard.card.affirmation;

      if (isKo) {
        return `--- 카드 ${index + 1} ---
위치: ${positionName}
카드: ${cardName}
방향: ${orientation}
아르카나: ${drawnCard.card.arcana === "major" ? "메이저" : "마이너"}${drawnCard.card.suit ? ` (${drawnCard.card.suit})` : ""}
번호: ${drawnCard.card.number}
원소: ${element}
황도대: ${zodiac}
키워드: ${activeKeywords}
일반 의미: ${generalMeaning}
카테고리별 의미 (${category}): ${categoryMeaning}
상징: ${symbolism}
수비학: ${numerology}
조언: ${advice}
확언: ${affirmation}
예/아니오: ${drawnCard.card.yesOrNo}`;
      } else {
        return `--- Card ${index + 1} ---
Position: ${positionName}
Card: ${cardName}
Orientation: ${orientation}
Arcana: ${drawnCard.card.arcana}${drawnCard.card.suit ? ` (${drawnCard.card.suit})` : ""}
Number: ${drawnCard.card.number}
Element: ${element}
Zodiac: ${zodiac}
Keywords: ${activeKeywords}
General Meaning: ${generalMeaning}
Category Meaning (${category}): ${categoryMeaning}
Symbolism: ${symbolism}
Numerology: ${numerology}
Advice: ${advice}
Affirmation: ${affirmation}
Yes/No: ${drawnCard.card.yesOrNo}`;
      }
    })
    .join("\n\n");

  const spreadName = isKo ? spread.nameKo : spread.name;

  const userMessage = isKo
    ? `스프레드: ${spreadName}
카테고리: ${category}
질문: ${question || "(질문 없음 - 카드가 전하는 일반적인 메시지를 읽어주세요)"}

뽑힌 카드:
${cardDescriptions}

위 카드들의 모든 정보(상징, 원소, 수비학, 카테고리별 의미)를 활용하여 깊이 있는 타로 리딩을 제공해주세요. 카드 간의 원소적 상호작용과 수비학적 패턴도 분석해주세요. 반드시 지정된 JSON 형식으로 응답하세요.`
    : `Spread: ${spreadName}
Category: ${category}
Question: ${question || "(No question asked - please provide a general message from the cards)"}

Drawn Cards:
${cardDescriptions}

Please analyze all the provided card data (symbolism, elements, numerology, category-specific meanings) to provide a deeply insightful tarot reading. Analyze elemental interactions and numerological patterns between the cards. You MUST respond in the specified JSON format.`;

  return { systemPrompt, userMessage };
}

function buildFallbackResult(
  cards: DrawnCard[],
  spread: Spread,
  category: string,
  language: Language,
): ReadingResult {
  const isKo = language === "ko";
  const catKeys = getCategoryKeys(category);

  return {
    opening: isKo
      ? "카드가 당신에게 메시지를 전하고 있습니다. 지금 이 순간, 우주의 에너지가 당신을 안내하고 있습니다."
      : "The cards are speaking to you. In this moment, the energy of the universe is guiding you.",
    cardInterpretations: cards.map((drawnCard, index) => {
      const position = spread.positions[index];
      const positionName = isKo
        ? (position?.nameKo ?? position?.name ?? `Position ${index + 1}`)
        : (position?.name ?? `Position ${index + 1}`);
      const cardName = isKo ? drawnCard.card.nameKo : drawnCard.card.name;
      const meaningKey = drawnCard.isReversed ? "reversed" : "upright";

      // Use category-specific meaning if available, fallback to general
      const categoryMeaning = isKo
        ? drawnCard.card.meaning[meaningKey][catKeys.ko]
        : drawnCard.card.meaning[meaningKey][catKeys.en];
      const generalMeaning = isKo
        ? drawnCard.card.meaning[meaningKey].generalKo
        : drawnCard.card.meaning[meaningKey].general;
      const interpretation = categoryMeaning || generalMeaning;

      const advice = isKo ? drawnCard.card.adviceKo : drawnCard.card.advice;

      return {
        position: positionName,
        cardName,
        isReversed: drawnCard.isReversed,
        interpretation,
        advice,
      };
    }),
    cardInteractions: isKo
      ? "카드들이 서로 조화를 이루며 하나의 메시지를 전하고 있습니다. 각 카드의 에너지가 연결되어 있으니, 전체적인 그림을 살펴보세요."
      : "The cards are in harmony, conveying a unified message. The energy of each card is connected, so look at the bigger picture.",
    overallMessage: isKo
      ? "지금은 내면의 목소리에 귀를 기울일 때입니다. 카드가 보여주는 길을 따라가되, 최종 결정은 항상 당신의 것입니다."
      : "Now is the time to listen to your inner voice. Follow the path the cards show you, but remember that the final decision is always yours.",
    actionableAdvice: isKo
      ? "오늘 하루 잠시 멈추어 자신을 돌아보는 시간을 가져보세요. 작은 변화가 큰 전환점이 될 수 있습니다."
      : "Take a moment today to pause and reflect on yourself. Small changes can become major turning points.",
    affirmation: isKo
      ? "나는 우주의 흐름을 신뢰하며, 내 안의 지혜를 믿습니다."
      : "I trust the flow of the universe and believe in the wisdom within me.",
    luckyElements: {
      color: isKo ? "보라색" : "Purple",
      number: "7",
      day: isKo ? "수요일" : "Wednesday",
    },
  };
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as ReadingRequest;
    const { cards, spread, question, category, language } = body;

    if (!cards || !spread || !category || !language) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("GEMINI_API_KEY not configured, using fallback result");
      const fallback = buildFallbackResult(cards, spread, category, language);
      return jsonResponse(fallback);
    }

    const { systemPrompt, userMessage } = buildReadingPrompt(
      cards,
      spread,
      question,
      category,
      language,
    );

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 8192,
        },
      }),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("Gemini API error:", geminiResponse.status, errorText);
      const fallback = buildFallbackResult(cards, spread, category, language);
      return jsonResponse(fallback);
    }

    const data = (await geminiResponse.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
    };
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      console.error("No text in Gemini response:", JSON.stringify(data));
      const fallback = buildFallbackResult(cards, spread, category, language);
      return jsonResponse(fallback);
    }

    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = rawText.trim();
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    try {
      const result: ReadingResult = JSON.parse(jsonStr);

      if (
        !result.opening ||
        !result.cardInterpretations ||
        !result.overallMessage
      ) {
        throw new Error("Missing required fields in parsed result");
      }

      return jsonResponse(result);
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", parseError);
      console.error("Raw text:", rawText);
      const fallback = buildFallbackResult(cards, spread, category, language);
      return jsonResponse(fallback);
    }
  } catch (error) {
    console.error("Reading API error:", error);
    return jsonResponse({ error: "Internal server error" }, 500);
  }
};
