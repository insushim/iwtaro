interface Env {
  GEMINI_API_KEY: string;
  DB: D1Database;
}

interface DrawnCard {
  card: {
    name: string;
    nameKo: string;
    keywords: {
      upright: string[];
      uprightKo: string[];
      reversed: string[];
      reversedKo: string[];
    };
    meaning: {
      upright: { general: string; generalKo: string };
      reversed: { general: string; generalKo: string };
    };
    advice: string;
    adviceKo: string;
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

function buildReadingPrompt(
  cards: DrawnCard[],
  spread: Spread,
  question: string,
  category: string,
  language: Language,
): { systemPrompt: string; userMessage: string } {
  const isKo = language === "ko";

  const systemPrompt = isKo
    ? `당신은 30년 이상의 경력을 가진 세계 최고의 타로 마스터입니다. 당신은 카드의 상징, 수비학, 원소적 연결에 대한 깊은 지식을 가지고 있습니다. 당신의 해석은 통찰력 있고, 공감적이며, 실행 가능한 조언을 제공합니다. 당신은 각 카드의 위치, 정방향/역방향 의미, 그리고 카드 간의 상호작용을 고려하여 총체적인 리딩을 제공합니다.

반드시 아래의 JSON 형식으로만 응답하세요. JSON 외의 텍스트는 포함하지 마세요.

{
  "opening": "리딩을 시작하는 따뜻하고 신비로운 인사말 (2-3문장)",
  "cardInterpretations": [
    {
      "position": "카드 위치 이름",
      "cardName": "카드 이름",
      "isReversed": true/false,
      "interpretation": "이 위치에서 이 카드의 깊은 해석 (3-5문장)",
      "advice": "이 카드에서 얻을 수 있는 구체적인 조언 (1-2문장)"
    }
  ],
  "cardInteractions": "카드들 사이의 상호작용과 패턴 분석 (3-5문장)",
  "overallMessage": "전체적인 리딩 메시지와 핵심 인사이트 (3-5문장)",
  "actionableAdvice": "질문자가 취할 수 있는 구체적이고 실행 가능한 조언 (2-3문장)",
  "affirmation": "오늘의 확언/긍정 문구 (1문장)",
  "luckyElements": {
    "color": "행운의 색상",
    "number": "행운의 숫자",
    "day": "행운의 요일"
  }
}`
    : `You are the world's best tarot master with over 30 years of experience. You possess deep knowledge of card symbolism, numerology, and elemental connections. Your interpretations are insightful, empathetic, and provide actionable guidance. You consider each card's position, upright/reversed meaning, and the interactions between cards to deliver a holistic reading.

You MUST respond ONLY in the following JSON format. Do not include any text outside of the JSON.

{
  "opening": "A warm and mystical greeting to begin the reading (2-3 sentences)",
  "cardInterpretations": [
    {
      "position": "Card position name",
      "cardName": "Card name",
      "isReversed": true/false,
      "interpretation": "Deep interpretation of this card in this position (3-5 sentences)",
      "advice": "Specific advice from this card (1-2 sentences)"
    }
  ],
  "cardInteractions": "Analysis of interactions and patterns between the cards (3-5 sentences)",
  "overallMessage": "The overall reading message and key insights (3-5 sentences)",
  "actionableAdvice": "Specific, actionable advice the querent can take (2-3 sentences)",
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
      const keywords = drawnCard.isReversed
        ? isKo
          ? drawnCard.card.keywords.reversedKo.join(", ")
          : drawnCard.card.keywords.reversed.join(", ")
        : isKo
          ? drawnCard.card.keywords.uprightKo.join(", ")
          : drawnCard.card.keywords.upright.join(", ");

      return isKo
        ? `${index + 1}. 위치: ${positionName} | 카드: ${cardName} | 방향: ${orientation} | 키워드: ${keywords}`
        : `${index + 1}. Position: ${positionName} | Card: ${cardName} | Orientation: ${orientation} | Keywords: ${keywords}`;
    })
    .join("\n");

  const spreadName = isKo ? spread.nameKo : spread.name;

  const userMessage = isKo
    ? `스프레드: ${spreadName}
카테고리: ${category}
질문: ${question}

뽑힌 카드:
${cardDescriptions}

위 카드들을 분석하여 깊이 있는 타로 리딩을 제공해주세요. 반드시 지정된 JSON 형식으로 응답하세요.`
    : `Spread: ${spreadName}
Category: ${category}
Question: ${question}

Drawn Cards:
${cardDescriptions}

Please analyze the cards above and provide an in-depth tarot reading. You MUST respond in the specified JSON format.`;

  return { systemPrompt, userMessage };
}

function buildFallbackResult(
  cards: DrawnCard[],
  spread: Spread,
  language: Language,
): ReadingResult {
  const isKo = language === "ko";

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
      const interpretation = isKo
        ? drawnCard.card.meaning[meaningKey].generalKo
        : drawnCard.card.meaning[meaningKey].general;
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

    if (!cards || !spread || !question || !category || !language) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("GEMINI_API_KEY not configured, using fallback result");
      const fallback = buildFallbackResult(cards, spread, language);
      return jsonResponse(fallback);
    }

    const { systemPrompt, userMessage } = buildReadingPrompt(
      cards,
      spread,
      question,
      category,
      language,
    );

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

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
          maxOutputTokens: 4096,
        },
      }),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("Gemini API error:", geminiResponse.status, errorText);
      const fallback = buildFallbackResult(cards, spread, language);
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
      const fallback = buildFallbackResult(cards, spread, language);
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
      const fallback = buildFallbackResult(cards, spread, language);
      return jsonResponse(fallback);
    }
  } catch (error) {
    console.error("Reading API error:", error);
    return jsonResponse({ error: "Internal server error" }, 500);
  }
};
