import { DrawnCard, Spread, Language } from "@/types/tarot";

export function buildReadingPrompt(
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
