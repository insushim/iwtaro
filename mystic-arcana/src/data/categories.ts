import { ReadingCategory } from "@/types/tarot";

export const categories: ReadingCategory[] = [
  {
    id: "love",
    name: "Love & Relationships",
    nameKo: "연애/관계",
    icon: "💕",
    description:
      "Explore matters of the heart, romantic connections, and relationship dynamics.",
    descriptionKo: "마음의 문제, 로맨틱한 연결, 관계 역학을 탐구합니다.",
    sampleQuestions: [
      "What does my love life look like in the near future?",
      "How can I improve my current relationship?",
      "What should I know about this new person in my life?",
      "Am I ready to open my heart to love again?",
    ],
    sampleQuestionsKo: [
      "가까운 미래에 내 연애 운은 어떨까요?",
      "현재 관계를 어떻게 개선할 수 있을까요?",
      "내 인생에 새로 나타난 이 사람에 대해 무엇을 알아야 할까요?",
      "다시 사랑에 마음을 열 준비가 되었을까요?",
    ],
  },
  {
    id: "career",
    name: "Career & Work",
    nameKo: "직업/경력",
    icon: "💼",
    description:
      "Gain clarity on your professional path, job decisions, and workplace dynamics.",
    descriptionKo:
      "직업 경로, 업무 결정, 직장 내 역학에 대한 명확성을 얻습니다.",
    sampleQuestions: [
      "Should I take this new job opportunity?",
      "What is blocking my career advancement?",
      "How can I find more fulfillment in my work?",
      "Is it the right time to start my own business?",
    ],
    sampleQuestionsKo: [
      "이 새로운 직업 기회를 잡아야 할까요?",
      "내 경력 발전을 막고 있는 것은 무엇인가요?",
      "일에서 더 큰 성취감을 어떻게 찾을 수 있을까요?",
      "지금이 사업을 시작하기에 적절한 시기인가요?",
    ],
  },
  {
    id: "finance",
    name: "Finance & Money",
    nameKo: "재정/돈",
    icon: "💰",
    description:
      "Understand your financial energy, abundance blocks, and money mindset.",
    descriptionKo:
      "재정 에너지, 풍요의 장애물, 돈에 대한 마인드셋을 이해합니다.",
    sampleQuestions: [
      "What is my financial outlook for the coming months?",
      "How can I attract more abundance into my life?",
      "Should I make this major purchase or investment?",
    ],
    sampleQuestionsKo: [
      "앞으로 몇 달간의 재정 전망은 어떤가요?",
      "내 삶에 더 많은 풍요를 어떻게 끌어당길 수 있을까요?",
      "이 큰 구매나 투자를 해야 할까요?",
    ],
  },
  {
    id: "health",
    name: "Health & Wellness",
    nameKo: "건강",
    icon: "🏥",
    description:
      "Gain insight into your physical, mental, and emotional well-being.",
    descriptionKo: "신체적, 정신적, 감정적 웰빙에 대한 통찰을 얻습니다.",
    sampleQuestions: [
      "What should I focus on for my overall health?",
      "How can I improve my mental well-being?",
      "What energy is surrounding my healing journey?",
    ],
    sampleQuestionsKo: [
      "전반적인 건강을 위해 무엇에 집중해야 할까요?",
      "정신 건강을 어떻게 개선할 수 있을까요?",
      "내 치유 여정을 둘러싼 에너지는 어떤가요?",
    ],
  },
  {
    id: "spirituality",
    name: "Spiritual Growth",
    nameKo: "영적 성장",
    icon: "🧘",
    description:
      "Deepen your spiritual practice, explore your inner wisdom, and align with your higher self.",
    descriptionKo:
      "영적 수행을 심화하고, 내면의 지혜를 탐구하며, 더 높은 자아와 조화를 이룹니다.",
    sampleQuestions: [
      "What spiritual lesson am I currently learning?",
      "How can I deepen my connection to my intuition?",
      "What message does the universe have for me right now?",
      "What past life energy is influencing me today?",
    ],
    sampleQuestionsKo: [
      "현재 배우고 있는 영적 교훈은 무엇인가요?",
      "직관과의 연결을 어떻게 깊게 할 수 있을까요?",
      "지금 우주가 나에게 전하는 메시지는 무엇인가요?",
      "오늘 나에게 영향을 미치는 전생의 에너지는 무엇인가요?",
    ],
  },
  {
    id: "general",
    name: "General Reading",
    nameKo: "일반 운세",
    icon: "🌟",
    description:
      "Get a broad overview of your current energy and what the universe wants you to know.",
    descriptionKo:
      "현재 에너지와 우주가 알려주고자 하는 것에 대한 전반적인 개요를 얻습니다.",
    sampleQuestions: [
      "What do I need to know about my life right now?",
      "What energy is surrounding me this week?",
      "What should I focus on for personal growth?",
      "What message does the universe have for me today?",
    ],
    sampleQuestionsKo: [
      "지금 내 인생에 대해 알아야 할 것은 무엇인가요?",
      "이번 주 나를 둘러싼 에너지는 어떤가요?",
      "개인 성장을 위해 무엇에 집중해야 할까요?",
      "오늘 우주가 나에게 전하는 메시지는 무엇인가요?",
    ],
  },
];

export function getCategoryById(id: string): ReadingCategory | undefined {
  return categories.find((category) => category.id === id);
}
