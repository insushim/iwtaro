import { TarotCard } from "@/types/tarot";

export const pentaclesCards: TarotCard[] = [
  {
    id: 64,
    name: "Ace of Pentacles",
    nameKo: "펜타클의 에이스",
    arcana: "minor",
    suit: "pentacles",
    number: 1,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus, Virgo, Capricorn",
    zodiacKo: "황소자리, 처녀자리, 염소자리",
    keywords: {
      upright: [
        "new opportunity",
        "prosperity",
        "abundance",
        "manifestation",
        "security",
      ],
      uprightKo: ["새로운 기회", "번영", "풍요", "실현", "안정"],
      reversed: [
        "missed opportunity",
        "scarcity",
        "instability",
        "poor planning",
        "greed",
      ],
      reversedKo: ["놓친 기회", "부족", "불안정", "부실한 계획", "탐욕"],
    },
    meaning: {
      upright: {
        general:
          "The Ace of Pentacles heralds a new beginning in the material world — a fresh opportunity for financial gain, career advancement, or a tangible new venture. This is the seed of prosperity; plant it wisely and it will grow into lasting abundance.",
        generalKo:
          "펜타클의 에이스는 물질 세계의 새로운 시작을 알립니다. 재정적 이득, 커리어 발전, 또는 실질적인 새 사업의 기회가 찾아옵니다. 이것은 번영의 씨앗이며, 현명하게 심으면 지속적인 풍요로 자라날 것입니다.",
        love: "A promising new relationship grounded in stability and mutual respect may be on the horizon. If you are in a partnership, this card signals a deeper commitment such as moving in together or building something tangible as a couple.",
        loveKo:
          "안정과 상호 존중에 기반한 유망한 새 관계가 다가올 수 있습니다. 이미 파트너가 있다면 동거나 함께 무언가를 만들어가는 등 더 깊은 헌신을 의미합니다.",
        career:
          "A new job offer, promotion, or business venture is presenting itself. This is an excellent time to invest in your professional development and seize opportunities that offer long-term growth.",
        careerKo:
          "새로운 일자리 제안, 승진, 또는 사업 기회가 나타나고 있습니다. 전문적 발전에 투자하고 장기적 성장을 제공하는 기회를 잡기에 훌륭한 시기입니다.",
        finance:
          "Financial windfalls or new income streams are likely. This could manifest as a raise, an inheritance, a smart investment opportunity, or the start of a profitable side project.",
        financeKo:
          "재정적 횡재나 새로운 수입원이 생길 가능성이 높습니다. 급여 인상, 상속, 현명한 투자 기회, 또는 수익성 있는 부업의 시작으로 나타날 수 있습니다.",
        health:
          "A renewed focus on physical well-being brings positive results. Starting a new health regimen, diet, or exercise routine will yield tangible benefits if you stay committed.",
        healthKo:
          "신체적 건강에 대한 새로운 관심이 긍정적 결과를 가져옵니다. 새로운 건강 루틴, 식단, 또는 운동을 시작하면 꾸준히 실천할 경우 실질적인 효과를 얻을 수 있습니다.",
        spirituality:
          "Ground your spiritual practice in the physical world. Meditation, nature walks, or earth-based rituals will help you connect to a deeper sense of abundance and gratitude.",
        spiritualityKo:
          "영적 수련을 물질 세계에 기반을 두세요. 명상, 자연 산책, 또는 대지 기반 의식이 더 깊은 풍요와 감사의 감각과 연결하는 데 도움이 됩니다.",
      },
      reversed: {
        general:
          "The reversed Ace of Pentacles warns of a missed opportunity or a venture that fails to materialize. Poor planning or a lack of follow-through may be blocking abundance from entering your life.",
        generalKo:
          "역방향 펜타클의 에이스는 놓친 기회나 실현되지 않는 사업에 대해 경고합니다. 부실한 계획이나 실행력 부족이 풍요가 삶에 들어오는 것을 막고 있을 수 있습니다.",
        love: "A relationship may struggle to get off the ground due to practical concerns — financial stress, distance, or differing life goals. Ensure both partners are equally invested in building a stable foundation.",
        loveKo:
          "현실적인 문제 — 재정적 스트레스, 거리, 또는 다른 인생 목표 — 로 인해 관계가 시작되기 어려울 수 있습니다. 두 파트너 모두 안정적인 기반을 구축하는 데 동등하게 투자하고 있는지 확인하세요.",
        career:
          "A promising job or project may fall through, or you might be hesitating too long on an opportunity. Be wary of get-rich-quick schemes and focus on building genuine skills and value.",
        careerKo:
          "유망한 직업이나 프로젝트가 무산될 수 있거나, 기회를 너무 오래 망설이고 있을 수 있습니다. 일확천금 계획을 경계하고 진정한 실력과 가치를 쌓는 데 집중하세요.",
        finance:
          "Financial losses, poor investments, or unexpected expenses may arise. This is not the time for risky financial decisions. Review your budget and shore up your savings before making big moves.",
        financeKo:
          "재정적 손실, 잘못된 투자, 또는 예상치 못한 지출이 발생할 수 있습니다. 위험한 재정 결정을 내릴 때가 아닙니다. 큰 움직임을 취하기 전에 예산을 검토하고 저축을 강화하세요.",
        health:
          "You may be neglecting your physical health or failing to follow through on wellness goals. Reassess your approach and start with small, sustainable changes rather than drastic overhauls.",
        healthKo:
          "신체적 건강을 소홀히 하거나 건강 목표를 끝까지 실천하지 못하고 있을 수 있습니다. 접근 방식을 재평가하고 급격한 변화보다 작고 지속 가능한 변화부터 시작하세요.",
        spirituality:
          "Materialism may be overshadowing your spiritual growth. Reconnect with what truly matters beyond possessions and status. Gratitude practices can help shift your perspective.",
        spiritualityKo:
          "물질주의가 영적 성장을 가리고 있을 수 있습니다. 소유와 지위 너머에 진정으로 중요한 것과 다시 연결하세요. 감사 수련이 관점을 전환하는 데 도움이 됩니다.",
      },
    },
    symbolism:
      "A divine hand emerges from a cloud, offering a single golden pentacle above a lush garden with an archway of flowers leading to distant mountains. The garden represents earthly abundance, while the mountains symbolize the long journey of sustained effort.",
    symbolismKo:
      "구름에서 신성한 손이 나타나 울창한 정원 위에 금색 펜타클 하나를 내밀고 있으며, 꽃으로 이루어진 아치가 먼 산으로 이어집니다. 정원은 현세의 풍요를, 산은 지속적인 노력의 긴 여정을 상징합니다.",
    advice:
      "Seize this new opportunity with both hands. Lay a solid foundation now, and your efforts will bear fruit for years to come.",
    adviceKo:
      "이 새로운 기회를 두 손으로 잡으세요. 지금 견고한 기반을 다지면 당신의 노력은 앞으로 수년간 결실을 맺을 것입니다.",
    yesOrNo: "yes",
    numerology:
      "One (1) — The number of beginnings, potential, and the spark of creation in the material realm.",
    numerologyKo:
      "1 — 시작, 잠재력, 물질 세계에서의 창조의 불꽃을 나타내는 숫자입니다.",
    affirmation: "I am open to receiving abundance in all its forms.",
    affirmationKo: "나는 모든 형태의 풍요를 받아들일 준비가 되어 있습니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A golden hand from the clouds offers a gleaming pentacle over a flourishing garden with a flower-covered archway.",
  },
  {
    id: 65,
    name: "Two of Pentacles",
    nameKo: "펜타클의 2",
    arcana: "minor",
    suit: "pentacles",
    number: 2,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Capricorn",
    zodiacKo: "염소자리",
    keywords: {
      upright: [
        "balance",
        "adaptability",
        "juggling",
        "flexibility",
        "time management",
      ],
      uprightKo: ["균형", "적응력", "저글링", "유연성", "시간 관리"],
      reversed: [
        "imbalance",
        "overwhelm",
        "disorganization",
        "overcommitment",
        "financial stress",
      ],
      reversedKo: [
        "불균형",
        "압도감",
        "비체계적",
        "과도한 약속",
        "재정적 스트레스",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Two of Pentacles shows you successfully juggling multiple responsibilities and adapting to life's changing tides. You are resourceful and flexible, managing to keep everything in balance even when circumstances shift.",
        generalKo:
          "펜타클의 2는 여러 책임을 성공적으로 저글링하며 삶의 변화하는 흐름에 적응하고 있음을 보여줍니다. 당신은 상황이 변해도 모든 것을 균형 있게 유지하는 지략과 유연성을 갖추고 있습니다.",
        love: "You may be balancing romance with other life demands. Communication and flexibility are key — make time for your partner even amidst a busy schedule to keep the relationship healthy.",
        loveKo:
          "로맨스와 다른 삶의 요구 사이에서 균형을 잡고 있을 수 있습니다. 소통과 유연성이 핵심입니다 — 바쁜 일정 속에서도 파트너를 위한 시간을 만들어 관계를 건강하게 유지하세요.",
        career:
          "You are managing multiple projects or considering a career change while maintaining your current role. Your ability to multitask and adapt is your greatest strength right now.",
        careerKo:
          "여러 프로젝트를 관리하거나 현재 역할을 유지하면서 커리어 전환을 고려하고 있습니다. 멀티태스킹과 적응 능력이 지금 당신의 가장 큰 강점입니다.",
        finance:
          "Money is flowing in and out and you need to manage it carefully. Budgeting and prioritizing expenses will help you stay afloat. This is a time for financial flexibility rather than major investments.",
        financeKo:
          "돈이 들어오고 나가고 있으며 신중하게 관리할 필요가 있습니다. 예산을 세우고 지출의 우선순위를 정하면 버틸 수 있습니다. 큰 투자보다는 재정적 유연성을 유지할 때입니다.",
        health:
          "Finding balance between work and personal health is crucial. You may need to juggle fitness routines around a busy schedule, but even small consistent efforts will pay off.",
        healthKo:
          "일과 개인 건강 사이의 균형을 찾는 것이 중요합니다. 바쁜 일정 속에서 운동 루틴을 조율해야 할 수 있지만, 작고 꾸준한 노력도 성과를 냅니다.",
        spirituality:
          "Balance your spiritual practice with everyday life. Even brief moments of mindfulness throughout a hectic day can maintain your spiritual connection and inner peace.",
        spiritualityKo:
          "영적 수련과 일상생활의 균형을 맞추세요. 바쁜 하루 중에도 짧은 마음챙김의 순간이 영적 연결과 내면의 평화를 유지할 수 있습니다.",
      },
      reversed: {
        general:
          "The reversed Two of Pentacles indicates you are overwhelmed by too many commitments. The balls you have been juggling are starting to drop, and you need to reprioritize before things spiral out of control.",
        generalKo:
          "역방향 펜타클의 2는 너무 많은 약속에 압도당하고 있음을 나타냅니다. 저글링하던 공들이 떨어지기 시작하고 있으며, 상황이 통제 불능이 되기 전에 우선순위를 재조정해야 합니다.",
        love: "Neglecting your relationship due to other priorities is causing strain. One or both partners feel like they are not getting enough attention. It is time to reassess your priorities and make love a conscious choice.",
        loveKo:
          "다른 우선사항 때문에 관계를 소홀히 하여 긴장이 생기고 있습니다. 한쪽 또는 양쪽 파트너가 충분한 관심을 받지 못하고 있다고 느낍니다. 우선순위를 재평가하고 사랑을 의식적으로 선택할 때입니다.",
        career:
          "You are stretched too thin at work, leading to mistakes and burnout. Learn to delegate and say no to tasks that do not align with your core responsibilities or goals.",
        careerKo:
          "직장에서 너무 많은 일에 분산되어 실수와 번아웃으로 이어지고 있습니다. 핵심 책임이나 목표와 맞지 않는 일에 위임하고 거절하는 법을 배우세요.",
        finance:
          "Financial chaos may be taking over — debts piling up, disorganized bookkeeping, or living beyond your means. Take immediate steps to create a realistic budget and regain control.",
        financeKo:
          "재정적 혼란이 들이닥치고 있을 수 있습니다 — 빚이 쌓이거나, 장부가 엉망이거나, 수입 이상으로 생활하고 있습니다. 현실적인 예산을 세우고 통제를 되찾기 위한 즉각적인 조치를 취하세요.",
        health:
          "Stress from overcommitment is taking a physical toll. Your body is signaling that you need to slow down. Prioritize rest and cut back on non-essential obligations.",
        healthKo:
          "과도한 약속에서 오는 스트레스가 신체적 타격을 주고 있습니다. 몸이 속도를 늦춰야 한다는 신호를 보내고 있습니다. 휴식을 우선시하고 비필수적인 의무를 줄이세요.",
        spirituality:
          "Your spiritual life has become just another item on your to-do list. Slow down and reconnect with your practice on a deeper level rather than going through the motions.",
        spiritualityKo:
          "영적 생활이 할 일 목록의 또 다른 항목이 되어버렸습니다. 속도를 늦추고 형식적으로 하기보다 더 깊은 차원에서 수련과 다시 연결하세요.",
      },
    },
    symbolism:
      "A young man dances on the shore, juggling two pentacles connected by an infinity symbol, while ships ride the rolling waves behind him. The infinity loop represents the endless cycle of change, and the turbulent sea mirrors the ups and downs of life.",
    symbolismKo:
      "젊은 남자가 해안에서 춤추며 무한대 기호로 연결된 두 개의 펜타클을 저글링하고, 뒤에서는 배들이 출렁이는 파도를 타고 있습니다. 무한의 고리는 끝없는 변화의 순환을, 거친 바다는 인생의 오르내림을 반영합니다.",
    advice:
      "Stay flexible and prioritize wisely. You cannot do everything at once — focus on what truly matters and let the rest wait.",
    adviceKo:
      "유연하게 머물고 현명하게 우선순위를 정하세요. 모든 것을 한꺼번에 할 수는 없습니다 — 정말 중요한 것에 집중하고 나머지는 기다리게 하세요.",
    yesOrNo: "maybe",
    numerology:
      "Two (2) — The number of duality, balance, and partnership, reflecting the need to harmonize opposing forces.",
    numerologyKo:
      "2 — 이중성, 균형, 파트너십의 숫자로 상반되는 힘을 조화시킬 필요성을 반영합니다.",
    affirmation: "I gracefully balance all areas of my life with ease and joy.",
    affirmationKo: "나는 삶의 모든 영역을 쉽고 기쁘게 우아하게 균형 잡습니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A man juggles two pentacles linked by an infinity symbol on a seashore with rolling waves and distant ships.",
  },
  {
    id: 66,
    name: "Three of Pentacles",
    nameKo: "펜타클의 3",
    arcana: "minor",
    suit: "pentacles",
    number: 3,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Capricorn",
    zodiacKo: "염소자리",
    keywords: {
      upright: [
        "teamwork",
        "collaboration",
        "craftsmanship",
        "learning",
        "skill-building",
      ],
      uprightKo: ["팀워크", "협업", "장인정신", "학습", "기술 향상"],
      reversed: [
        "conflict",
        "lack of teamwork",
        "mediocrity",
        "misalignment",
        "poor workmanship",
      ],
      reversedKo: [
        "갈등",
        "팀워크 부족",
        "평범함",
        "목표 불일치",
        "부실한 작업",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Three of Pentacles celebrates collaboration, skilled work, and the early stages of mastering a craft. Your talents are being recognized, and working with others amplifies what you can achieve alone.",
        generalKo:
          "펜타클의 3은 협업, 숙련된 작업, 그리고 기술을 마스터하는 초기 단계를 축하합니다. 당신의 재능이 인정받고 있으며, 다른 사람들과 함께 일하면 혼자서 달성할 수 있는 것을 확대합니다.",
        love: "Building a relationship takes teamwork. You and your partner are laying a strong foundation together through open communication and shared goals. Singles may meet someone through work or collaborative projects.",
        loveKo:
          "관계를 쌓는 것은 팀워크가 필요합니다. 당신과 파트너는 열린 소통과 공유된 목표를 통해 함께 강한 기반을 다지고 있습니다. 싱글은 직장이나 협업 프로젝트를 통해 누군가를 만날 수 있습니다.",
        career:
          "Your expertise is valued by your team and superiors. This is an excellent time for collaborative projects, mentorship opportunities, and demonstrating your professional skills.",
        careerKo:
          "당신의 전문성이 팀과 상사에게 인정받고 있습니다. 협업 프로젝트, 멘토링 기회, 그리고 전문 기술을 보여주기에 훌륭한 시기입니다.",
        finance:
          "Financial rewards come through skilled work and collaboration. Joint ventures or pooling resources with trusted partners can lead to profitable outcomes.",
        financeKo:
          "숙련된 작업과 협업을 통해 재정적 보상이 옵니다. 합작 사업이나 신뢰할 수 있는 파트너와 자원을 합치면 수익성 있는 결과로 이어질 수 있습니다.",
        health:
          "Working with health professionals — a trainer, nutritionist, or therapist — will accelerate your progress. Do not try to figure everything out alone when expert guidance is available.",
        healthKo:
          "건강 전문가 — 트레이너, 영양사, 또는 치료사 — 와 함께 일하면 진전을 가속할 수 있습니다. 전문 지도가 가능할 때 혼자서 모든 것을 해결하려 하지 마세요.",
        spirituality:
          "Seek out spiritual teachers, study groups, or communities that can deepen your practice. Shared spiritual exploration enriches understanding beyond solitary study.",
        spiritualityKo:
          "수련을 심화할 수 있는 영적 스승, 스터디 그룹, 또는 커뮤니티를 찾으세요. 함께하는 영적 탐구는 혼자 공부하는 것 이상으로 이해를 풍요롭게 합니다.",
      },
      reversed: {
        general:
          "The reversed Three of Pentacles points to a breakdown in teamwork or a lack of effort in your work. Conflicts with colleagues, sloppy execution, or a refusal to learn from others may be undermining your progress.",
        generalKo:
          "역방향 펜타클의 3은 팀워크의 붕괴나 작업에 대한 노력 부족을 가리킵니다. 동료와의 갈등, 부실한 실행, 또는 다른 사람에게 배우기를 거부하는 것이 진전을 약화시키고 있을 수 있습니다.",
        love: "You and your partner may not be on the same page. Misaligned goals, poor communication, or one person doing all the work in the relationship can lead to resentment and disconnection.",
        loveKo:
          "당신과 파트너가 같은 생각을 하고 있지 않을 수 있습니다. 목표 불일치, 소통 부족, 또는 한 사람이 관계에서 모든 일을 하는 것이 원망과 단절로 이어질 수 있습니다.",
        career:
          "Workplace conflicts or a toxic team dynamic are holding you back. Your skills may not be appreciated, or the quality of work being produced is below standard. Address issues directly.",
        careerKo:
          "직장 내 갈등이나 독성적인 팀 역학이 당신을 저해하고 있습니다. 당신의 실력이 인정받지 못하거나 생산되는 작업의 질이 기준 이하일 수 있습니다. 문제를 직접 해결하세요.",
        finance:
          "Joint financial ventures may go sour due to poor communication or unequal effort. Be cautious about partnerships and ensure all financial agreements are clear and documented.",
        financeKo:
          "합작 재정 사업이 소통 부족이나 불균등한 노력으로 인해 나빠질 수 있습니다. 파트너십에 신중하고 모든 재정 합의가 명확하고 문서화되어 있는지 확인하세요.",
        health:
          "You may be ignoring professional health advice or trying to go it alone when you need support. Stubbornness about seeking help can delay healing.",
        healthKo:
          "전문적인 건강 조언을 무시하거나 지원이 필요할 때 혼자서 하려 할 수 있습니다. 도움을 구하는 데 대한 고집이 치유를 지연시킬 수 있습니다.",
        spirituality:
          "Ego may be interfering with your spiritual growth. Be open to learning from others and recognize that no one has all the answers alone.",
        spiritualityKo:
          "자아가 영적 성장을 방해하고 있을 수 있습니다. 다른 사람에게 배우는 것에 열린 마음을 가지고 혼자서 모든 답을 가지고 있는 사람은 없다는 것을 인식하세요.",
      },
    },
    symbolism:
      "A stonemason works on a cathedral pillar while a monk and an architect consult blueprints nearby. The three figures represent different roles — craftsman, planner, and spiritual guide — united in creating something greater than any one of them could build alone.",
    symbolismKo:
      "석공이 성당 기둥을 작업하는 동안 수도사와 건축가가 근처에서 청사진을 의논합니다. 세 인물은 각기 다른 역할 — 장인, 기획자, 영적 안내자 — 을 나타내며, 어느 한 사람만으로는 만들 수 없는 위대한 것을 함께 만들고 있습니다.",
    advice:
      "Embrace collaboration and be open to feedback. The best results come from combining diverse skills and perspectives.",
    adviceKo:
      "협업을 받아들이고 피드백에 열린 마음을 가지세요. 최고의 결과는 다양한 기술과 관점을 결합할 때 나옵니다.",
    yesOrNo: "yes",
    numerology:
      "Three (3) — The number of creation, growth, and the first fruits of collaborative effort.",
    numerologyKo:
      "3 — 창조, 성장, 그리고 협업 노력의 첫 번째 결실의 숫자입니다.",
    affirmation:
      "I value teamwork and honor the unique contributions of others.",
    affirmationKo:
      "나는 팀워크를 소중히 여기고 다른 사람들의 고유한 기여를 존중합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A stonemason carves a cathedral pillar while a monk and architect review plans together beneath Gothic arches.",
  },
  {
    id: 67,
    name: "Four of Pentacles",
    nameKo: "펜타클의 4",
    arcana: "minor",
    suit: "pentacles",
    number: 4,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Capricorn",
    zodiacKo: "염소자리",
    keywords: {
      upright: [
        "security",
        "conservation",
        "control",
        "stability",
        "possessiveness",
      ],
      uprightKo: ["안전", "보존", "통제", "안정", "소유욕"],
      reversed: [
        "generosity",
        "release",
        "overspending",
        "insecurity",
        "letting go",
      ],
      reversedKo: ["관대함", "해방", "과소비", "불안", "내려놓기"],
    },
    meaning: {
      upright: {
        general:
          "The Four of Pentacles represents a firm grip on your material resources and a desire for financial security. While saving and protecting what you have is wise, be mindful that holding on too tightly can become restrictive and isolating.",
        generalKo:
          "펜타클의 4는 물질적 자원에 대한 단단한 통제와 재정적 안정에 대한 욕구를 나타냅니다. 가진 것을 절약하고 보호하는 것은 현명하지만, 너무 꽉 잡으면 제한적이고 고립될 수 있음을 유념하세요.",
        love: "You or your partner may be emotionally guarded, holding back feelings for fear of vulnerability. True intimacy requires openness — loosen your grip and allow love to flow naturally.",
        loveKo:
          "당신 또는 파트너가 감정적으로 경계하고 있으며, 취약함에 대한 두려움으로 감정을 억제하고 있을 수 있습니다. 진정한 친밀감은 개방성을 요구합니다 — 움켜쥔 것을 풀고 사랑이 자연스럽게 흐르게 하세요.",
        career:
          "You have built a stable position and are focused on maintaining it. While this provides security, be careful not to resist necessary changes or new opportunities out of fear of losing what you have.",
        careerKo:
          "안정적인 위치를 구축했고 그것을 유지하는 데 집중하고 있습니다. 이것이 안전을 제공하지만, 가진 것을 잃을까 두려워 필요한 변화나 새로운 기회를 거부하지 않도록 주의하세요.",
        finance:
          "You are in a strong financial position through careful saving and conservative spending. This disciplined approach serves you well, but ensure you are not being miserly at the expense of enjoying life.",
        financeKo:
          "신중한 저축과 보수적인 지출을 통해 강한 재정적 위치에 있습니다. 이 절제된 접근이 도움이 되지만, 삶을 즐기는 것을 희생하면서 인색해지지 않는지 확인하세요.",
        health:
          "A rigid approach to health may be causing more stress than benefit. While discipline is important, allow yourself flexibility and the occasional indulgence without guilt.",
        healthKo:
          "건강에 대한 경직된 접근이 이득보다 스트레스를 더 유발할 수 있습니다. 규율이 중요하지만, 죄책감 없이 유연성과 가끔의 여유를 허용하세요.",
        spirituality:
          "Attachment to material security may be blocking spiritual growth. Practice generosity and trust that the universe provides. Letting go of control opens space for spiritual abundance.",
        spiritualityKo:
          "물질적 안전에 대한 집착이 영적 성장을 막고 있을 수 있습니다. 관대함을 실천하고 우주가 제공한다는 것을 신뢰하세요. 통제를 내려놓으면 영적 풍요를 위한 공간이 열립니다.",
      },
      reversed: {
        general:
          "The reversed Four of Pentacles can indicate either a positive release of material attachment or, conversely, reckless overspending and financial insecurity. Examine which side of this spectrum you fall on.",
        generalKo:
          "역방향 펜타클의 4는 물질적 집착의 긍정적인 해방 또는 반대로 무모한 과소비와 재정적 불안을 나타낼 수 있습니다. 이 스펙트럼의 어느 쪽에 해당하는지 검토하세요.",
        love: "Emotional walls are coming down, allowing deeper connection. Alternatively, letting go may mean the end of a relationship that was held together only by fear of being alone.",
        loveKo:
          "감정적 벽이 무너지며 더 깊은 연결을 허용합니다. 또는 내려놓기가 혼자 되는 것에 대한 두려움으로만 유지되던 관계의 끝을 의미할 수도 있습니다.",
        career:
          "You may be letting go of a secure but unfulfilling job, or spending recklessly on a business venture without proper planning. Ensure your leap of faith is backed by a solid plan.",
        careerKo:
          "안전하지만 만족스럽지 않은 직업을 떠나거나, 적절한 계획 없이 사업에 무모하게 지출하고 있을 수 있습니다. 믿음의 도약이 탄탄한 계획에 의해 뒷받침되는지 확인하세요.",
        finance:
          "You may be spending money too freely after a period of restriction, or conversely, finally learning to enjoy your wealth without guilt. Find a healthy middle ground between saving and spending.",
        financeKo:
          "제한 기간 후 돈을 너무 자유롭게 쓰고 있거나, 반대로 마침내 죄책감 없이 부를 즐기는 법을 배우고 있을 수 있습니다. 저축과 지출 사이의 건강한 중간 지점을 찾으세요.",
        health:
          "Releasing rigid health routines in favor of a more balanced and enjoyable approach to wellness. Listen to what your body truly needs rather than following strict rules.",
        healthKo:
          "경직된 건강 루틴을 풀고 더 균형 잡히고 즐거운 건강 접근 방식을 택하세요. 엄격한 규칙을 따르기보다 몸이 진정으로 필요로 하는 것에 귀 기울이세요.",
        spirituality:
          "A beautiful moment of release — letting go of material concerns to embrace a more spiritually fulfilling path. Trust that true wealth is found within.",
        spiritualityKo:
          "아름다운 해방의 순간 — 물질적 걱정을 내려놓고 더 영적으로 충만한 길을 받아들입니다. 진정한 부는 내면에서 발견된다는 것을 신뢰하세요.",
      },
    },
    symbolism:
      "A man sits on a stone bench, clutching a pentacle to his chest while two more rest beneath his feet and one balances on his head. His closed posture and tight grip symbolize the desire to control and possess, while the city behind him represents the community he has withdrawn from.",
    symbolismKo:
      "남자가 돌 벤치에 앉아 펜타클 하나를 가슴에 꽉 안고 있으며, 두 개는 발 아래에, 하나는 머리 위에 균형을 잡고 있습니다. 닫힌 자세와 꽉 쥔 손은 통제와 소유의 욕구를, 뒤의 도시는 그가 물러난 공동체를 상징합니다.",
    advice:
      "Security is important, but do not let fear of loss prevent you from living fully. Practice finding the balance between prudence and generosity.",
    adviceKo:
      "안전은 중요하지만, 상실에 대한 두려움이 충분히 사는 것을 방해하지 않게 하세요. 신중함과 관대함 사이의 균형을 찾는 연습을 하세요.",
    yesOrNo: "maybe",
    numerology:
      "Four (4) — The number of stability, structure, and foundation, but also rigidity when taken to excess.",
    numerologyKo:
      "4 — 안정, 구조, 기반의 숫자이지만, 과도할 때는 경직성을 의미하기도 합니다.",
    affirmation:
      "I hold my resources wisely and share generously from a place of abundance.",
    affirmationKo:
      "나는 자원을 현명하게 관리하고 풍요의 자리에서 관대하게 나눕니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A man clutches a pentacle tightly to his chest, with one on his head and two under his feet, seated before a distant city.",
  },
  {
    id: 68,
    name: "Five of Pentacles",
    nameKo: "펜타클의 5",
    arcana: "minor",
    suit: "pentacles",
    number: 5,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus",
    zodiacKo: "황소자리",
    keywords: {
      upright: ["hardship", "poverty", "isolation", "loss", "worry"],
      uprightKo: ["고난", "빈곤", "고립", "상실", "걱정"],
      reversed: [
        "recovery",
        "improvement",
        "turning a corner",
        "acceptance of help",
        "spiritual wealth",
      ],
      reversedKo: ["회복", "개선", "전환점", "도움의 수용", "영적 풍요"],
    },
    meaning: {
      upright: {
        general:
          "The Five of Pentacles speaks of material hardship, financial loss, or feeling left out in the cold. While the situation is difficult, help is available if you are willing to look for it and accept it.",
        generalKo:
          "펜타클의 5는 물질적 고난, 재정적 손실, 또는 소외감을 이야기합니다. 상황이 어렵지만, 기꺼이 찾고 받아들인다면 도움은 있습니다.",
        love: "You may feel isolated or disconnected in your relationship, as if you are enduring hardship alone. Reaching out to your partner and sharing your vulnerabilities can bridge the gap between you.",
        loveKo:
          "관계에서 고립되거나 단절된 느낌을 받을 수 있으며, 마치 혼자 고난을 견디는 것 같습니다. 파트너에게 손을 내밀고 취약함을 공유하면 두 사람 사이의 간격을 좁힐 수 있습니다.",
        career:
          "Job loss, demotion, or a period of professional struggle is indicated. While this feels devastating, it can be the catalyst for finding work that better aligns with your true skills and values.",
        careerKo:
          "실직, 강등, 또는 전문적 어려움의 시기를 나타냅니다. 이것이 파괴적으로 느껴지지만, 진정한 기술과 가치에 더 맞는 일을 찾는 촉매가 될 수 있습니다.",
        finance:
          "Financial hardship is real and pressing. It is crucial to seek practical help — financial counseling, community resources, or support from trusted friends and family. Do not let pride prevent you from getting assistance.",
        financeKo:
          "재정적 어려움이 실질적이고 급박합니다. 실질적인 도움 — 재정 상담, 지역사회 자원, 또는 신뢰할 수 있는 친구와 가족의 지원 — 을 구하는 것이 중요합니다. 자존심이 도움 받는 것을 방해하지 않게 하세요.",
        health:
          "Health concerns may be compounding financial stress. Do not neglect medical care due to cost worries — seek out affordable healthcare options and prioritize your physical well-being.",
        healthKo:
          "건강 문제가 재정적 스트레스를 가중시킬 수 있습니다. 비용 걱정 때문에 의료를 소홀히 하지 마세요 — 저렴한 의료 옵션을 찾고 신체적 건강을 우선시하세요.",
        spirituality:
          "This is a dark night of the soul, but it is also an invitation to discover inner resilience and spiritual wealth that transcends material circumstances. Faith can be your anchor.",
        spiritualityKo:
          "이것은 영혼의 어두운 밤이지만, 물질적 상황을 초월하는 내면의 회복력과 영적 풍요를 발견하라는 초대이기도 합니다. 신앙이 당신의 닻이 될 수 있습니다.",
      },
      reversed: {
        general:
          "The reversed Five of Pentacles signals recovery and the end of a difficult period. You are beginning to see light at the end of the tunnel, and help or resources are becoming available to you.",
        generalKo:
          "역방향 펜타클의 5는 회복과 어려운 시기의 끝을 알립니다. 터널 끝에 빛이 보이기 시작하며, 도움이나 자원이 당신에게 가용해지고 있습니다.",
        love: "Healing begins in your relationship as partners reconnect and support each other through adversity. If single, you are recovering from heartbreak and opening yourself to love again.",
        loveKo:
          "파트너들이 역경 속에서 다시 연결하고 서로를 지지하면서 관계에 치유가 시작됩니다. 싱글이라면 실연에서 회복하고 다시 사랑에 마음을 열고 있습니다.",
        career:
          "A new job opportunity, improved work conditions, or professional recovery is on the way. The worst is behind you, and your persistence is about to pay off.",
        careerKo:
          "새로운 취업 기회, 개선된 근무 조건, 또는 직업적 회복이 다가오고 있습니다. 최악은 지나갔으며, 당신의 끈기가 곧 보상받을 것입니다.",
        finance:
          "Financial recovery is underway. Debts may be getting paid down, new income is coming in, or you have found resources to help stabilize your situation.",
        financeKo:
          "재정적 회복이 진행 중입니다. 빚이 줄어들거나, 새로운 수입이 들어오거나, 상황을 안정시킬 자원을 찾았을 수 있습니다.",
        health:
          "Health is improving after a challenging period. Treatment is showing results, and your determination to heal is paying off. Continue with your care regimen.",
        healthKo:
          "도전적인 시기 후 건강이 개선되고 있습니다. 치료가 결과를 보이고 있으며, 치유하려는 의지가 성과를 내고 있습니다. 케어 요법을 계속하세요.",
        spirituality:
          "Emerging from spiritual darkness with renewed faith and deeper understanding. The hardship you endured has strengthened your connection to something greater than yourself.",
        spiritualityKo:
          "새로운 신앙과 더 깊은 이해로 영적 어둠에서 나오고 있습니다. 견딘 고난이 자신보다 더 큰 것과의 연결을 강화했습니다.",
      },
    },
    symbolism:
      "Two impoverished figures trudge through snow past a brightly lit stained-glass window of a church. The five pentacles glow in the window above, representing spiritual and material help that is available but unnoticed by the suffering pair below.",
    symbolismKo:
      "두 명의 가난한 인물이 밝게 빛나는 교회 스테인드글라스 창문을 지나 눈 속을 걸어갑니다. 다섯 개의 펜타클이 위의 창문에서 빛나며, 고통받는 두 사람이 알아차리지 못하는 영적·물질적 도움을 나타냅니다.",
    advice:
      "Even in your darkest hour, help is closer than you think. Reach out, accept support, and know that this too shall pass.",
    adviceKo:
      "가장 어두운 시간에도 도움은 생각보다 가까이에 있습니다. 손을 내밀고 지원을 받아들이며, 이 또한 지나가리라는 것을 아세요.",
    yesOrNo: "no",
    numerology:
      "Five (5) — The number of challenge, disruption, and the lessons that come through adversity.",
    numerologyKo: "5 — 도전, 혼란, 그리고 역경을 통해 오는 교훈의 숫자입니다.",
    affirmation:
      "I accept help with grace and trust that abundance is returning to me.",
    affirmationKo:
      "나는 은혜로 도움을 받아들이고 풍요가 내게 돌아오고 있음을 신뢰합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "Two ragged figures walk through snow past a glowing church window displaying five golden pentacles.",
  },
  {
    id: 69,
    name: "Six of Pentacles",
    nameKo: "펜타클의 6",
    arcana: "minor",
    suit: "pentacles",
    number: 6,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus",
    zodiacKo: "황소자리",
    keywords: {
      upright: [
        "generosity",
        "charity",
        "giving",
        "sharing wealth",
        "fairness",
      ],
      uprightKo: ["관대함", "자선", "베풂", "부의 공유", "공정함"],
      reversed: [
        "strings attached",
        "debt",
        "selfishness",
        "power imbalance",
        "inequality",
      ],
      reversedKo: ["조건부 도움", "빚", "이기심", "권력 불균형", "불평등"],
    },
    meaning: {
      upright: {
        general:
          "The Six of Pentacles represents generosity, the flow of giving and receiving, and fairness in distributing resources. You may be in a position to help others, or gratefully receiving support from someone who has more to give.",
        generalKo:
          "펜타클의 6은 관대함, 주고받는 흐름, 그리고 자원 분배의 공정함을 나타냅니다. 다른 사람을 도울 수 있는 위치에 있거나, 더 많이 가진 누군가로부터 감사히 지원을 받고 있을 수 있습니다.",
        love: "A relationship characterized by balanced give and take. Both partners feel valued and supported. If there has been an imbalance, this card encourages restoring equilibrium through open-hearted generosity.",
        loveKo:
          "균형 잡힌 주고받기로 특징지어지는 관계입니다. 두 파트너 모두 가치 있고 지지받는다고 느낍니다. 불균형이 있었다면, 이 카드는 열린 마음의 관대함을 통해 균형을 회복하라고 격려합니다.",
        career:
          "You may receive a raise, bonus, or recognition for your work. Alternatively, you might be in a position to mentor or support colleagues. Sharing knowledge and resources builds goodwill and strengthens your professional network.",
        careerKo:
          "급여 인상, 보너스, 또는 업무에 대한 인정을 받을 수 있습니다. 또는 동료를 멘토링하거나 지원하는 위치에 있을 수 있습니다. 지식과 자원을 공유하면 선의를 쌓고 전문 네트워크를 강화합니다.",
        finance:
          "Financial generosity flows both ways. You are able to share your resources with those in need, and this giving will return to you in unexpected ways. Charitable giving is especially favored now.",
        financeKo:
          "재정적 관대함이 양방향으로 흐릅니다. 필요한 사람들과 자원을 나눌 수 있으며, 이 베풂은 예상치 못한 방식으로 돌아올 것입니다. 지금은 특히 자선 기부가 좋습니다.",
        health:
          "Sharing your health journey with others — whether through support groups or encouraging friends — enhances your own healing. Helping others can be therapeutic for you as well.",
        healthKo:
          "건강 여정을 다른 사람들과 나누는 것 — 지원 그룹이든 친구를 격려하든 — 이 자신의 치유를 강화합니다. 다른 사람을 돕는 것이 당신에게도 치유적일 수 있습니다.",
        spirituality:
          "True spiritual wealth comes through giving without expectation. Practice generosity as a spiritual discipline and notice how it transforms both you and those around you.",
        spiritualityKo:
          "진정한 영적 부는 기대 없는 베풂을 통해 옵니다. 관대함을 영적 수련으로 실천하고 그것이 당신과 주변 사람 모두를 어떻게 변화시키는지 관찰하세요.",
      },
      reversed: {
        general:
          "The reversed Six of Pentacles warns of generosity with strings attached, power imbalances in giving relationships, or selfishness disguised as charity. Examine the true motives behind any gifts being offered or received.",
        generalKo:
          "역방향 펜타클의 6은 조건부 관대함, 주는 관계에서의 권력 불균형, 또는 자선으로 위장한 이기심을 경고합니다. 제공하거나 받는 선물 뒤의 진정한 동기를 살펴보세요.",
        love: "One partner may be using financial or emotional generosity as a means of control. A healthy relationship is based on equal partnership, not debt or obligation.",
        loveKo:
          "한 파트너가 재정적 또는 감정적 관대함을 통제 수단으로 사용하고 있을 수 있습니다. 건강한 관계는 빚이나 의무가 아닌 동등한 파트너십에 기반합니다.",
        career:
          "You may be working hard but not receiving fair compensation, or a colleague might be taking credit for your contributions. Stand up for what you deserve and address any inequities directly.",
        careerKo:
          "열심히 일하지만 공정한 보상을 받지 못하거나, 동료가 당신의 기여를 자기 것으로 가져가고 있을 수 있습니다. 당신이 마땅히 받아야 할 것을 위해 나서고 불평등을 직접 해결하세요.",
        finance:
          "Be cautious of loans with unfavorable terms or financial help that creates dependency. If lending money, understand you may not get it back. Set clear boundaries around financial assistance.",
        financeKo:
          "불리한 조건의 대출이나 의존성을 만드는 재정 도움에 주의하세요. 돈을 빌려준다면 돌려받지 못할 수 있음을 이해하세요. 재정 지원에 대한 명확한 경계를 설정하세요.",
        health:
          "You may be giving too much of yourself to others at the expense of your own health. Remember that you cannot pour from an empty cup — take care of yourself first.",
        healthKo:
          "자신의 건강을 희생하면서 다른 사람에게 너무 많이 주고 있을 수 있습니다. 빈 컵에서 부을 수 없다는 것을 기억하세요 — 먼저 자신을 돌보세요.",
        spirituality:
          "Spiritual bypassing — using generosity to avoid dealing with deeper personal issues. True giving comes from wholeness, not from a desire to feel superior or avoid self-work.",
        spiritualityKo:
          "영적 회피 — 더 깊은 개인적 문제를 다루는 것을 피하기 위해 관대함을 사용합니다. 진정한 베풂은 우월감이나 자기 성찰 회피가 아닌 온전함에서 옵니다.",
      },
    },
    symbolism:
      "A wealthy merchant holds balanced scales in one hand while distributing coins to two kneeling beggars with the other. The scales represent fairness and measured giving, while the power dynamic between standing giver and kneeling receivers raises questions about equality.",
    symbolismKo:
      "부유한 상인이 한 손에 균형 잡힌 저울을 들고 다른 손으로 무릎 꿇은 두 거지에게 동전을 나누어 줍니다. 저울은 공정함과 절제된 베풂을, 서 있는 주는 자와 무릎 꿇은 받는 자 사이의 권력 역학은 평등에 대한 질문을 제기합니다.",
    advice:
      "Give generously but wisely, and receive graciously without shame. True abundance grows through the balanced circulation of resources.",
    adviceKo:
      "관대하되 현명하게 주고, 수치심 없이 품위 있게 받으세요. 진정한 풍요는 자원의 균형 잡힌 순환을 통해 성장합니다.",
    yesOrNo: "yes",
    numerology:
      "Six (6) — The number of harmony, balance, and reciprocity in the material world.",
    numerologyKo: "6 — 물질 세계에서의 조화, 균형, 호혜의 숫자입니다.",
    affirmation:
      "I give and receive freely, trusting in the natural flow of abundance.",
    affirmationKo:
      "나는 자유롭게 주고받으며, 풍요의 자연스러운 흐름을 신뢰합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A prosperous merchant with balanced scales distributes coins to two kneeling figures in a town square.",
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    nameKo: "펜타클의 7",
    arcana: "minor",
    suit: "pentacles",
    number: 7,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus",
    zodiacKo: "황소자리",
    keywords: {
      upright: [
        "patience",
        "long-term investment",
        "perseverance",
        "assessment",
        "reward",
      ],
      uprightKo: ["인내", "장기 투자", "인내심", "평가", "보상"],
      reversed: [
        "impatience",
        "wasted effort",
        "lack of progress",
        "frustration",
        "poor return",
      ],
      reversedKo: ["조급함", "헛된 노력", "진전 부족", "좌절", "저조한 수익"],
    },
    meaning: {
      upright: {
        general:
          "The Seven of Pentacles is a card of patience and long-term vision. You have been putting in consistent effort and are now pausing to assess your progress. The harvest is coming — trust the process and continue tending your garden.",
        generalKo:
          "펜타클의 7은 인내와 장기적 비전의 카드입니다. 꾸준한 노력을 기울여왔고 이제 진행 상황을 평가하기 위해 잠시 멈추고 있습니다. 수확이 다가오고 있습니다 — 과정을 믿고 정원을 계속 가꾸세요.",
        love: "A relationship is growing steadily through invested time and effort. While progress may feel slow, the deep roots you are planting together will create lasting love. Patience with your partner is essential.",
        loveKo:
          "관계가 투자한 시간과 노력으로 꾸준히 성장하고 있습니다. 진전이 느리게 느껴질 수 있지만, 함께 심고 있는 깊은 뿌리가 지속적인 사랑을 만들 것입니다. 파트너에 대한 인내가 필수적입니다.",
        career:
          "Your hard work is starting to show results, even if the payoff has not fully arrived yet. Continue developing your skills and maintaining quality — the professional recognition you deserve is on its way.",
        careerKo:
          "노력이 결과를 보이기 시작하고 있지만, 보상이 아직 완전히 도착하지 않았을 수 있습니다. 기술을 계속 개발하고 품질을 유지하세요 — 당신이 마땅히 받을 전문적 인정이 오고 있습니다.",
        finance:
          "Long-term investments and savings plans are growing. This is not the time for quick profits but for steady wealth building. Review your financial portfolio and ensure your money is working wisely for you.",
        financeKo:
          "장기 투자와 저축 계획이 성장하고 있습니다. 빠른 수익이 아닌 꾸준한 부 축적의 시기입니다. 재정 포트폴리오를 검토하고 돈이 현명하게 일하고 있는지 확인하세요.",
        health:
          "Healthy habits you have been cultivating are beginning to show results. Continue with your wellness routine even when progress seems slow — your body is responding to your consistent care.",
        healthKo:
          "가꿔온 건강한 습관이 결과를 보이기 시작하고 있습니다. 진전이 느려 보일 때도 건강 루틴을 계속하세요 — 당신의 몸은 꾸준한 관리에 반응하고 있습니다.",
        spirituality:
          "Spiritual growth is a lifelong journey, not a destination. Reflect on how far you have come and appreciate the wisdom you have gained through sustained practice and contemplation.",
        spiritualityKo:
          "영적 성장은 목적지가 아닌 평생의 여정입니다. 얼마나 멀리 왔는지 돌아보고 지속적인 수련과 명상을 통해 얻은 지혜를 감사히 여기세요.",
      },
      reversed: {
        general:
          "The reversed Seven of Pentacles reflects impatience and frustration with the pace of progress. You may feel that your efforts have been wasted or that the rewards are not worth the investment. It may be time to reassess your strategy.",
        generalKo:
          "역방향 펜타클의 7은 진전 속도에 대한 조급함과 좌절을 반영합니다. 노력이 낭비되었거나 보상이 투자할 가치가 없다고 느낄 수 있습니다. 전략을 재평가할 때일 수 있습니다.",
        love: "You may feel that the effort you put into the relationship is not being reciprocated. Before giving up, have an honest conversation about each other's needs and expectations.",
        loveKo:
          "관계에 쏟는 노력이 보답받지 못한다고 느낄 수 있습니다. 포기하기 전에 서로의 필요와 기대에 대해 솔직한 대화를 나누세요.",
        career:
          "You may be stuck in a career rut, feeling like your hard work goes unnoticed or unappreciated. Consider whether you need to change your approach or pursue a different path entirely.",
        careerKo:
          "커리어의 수렁에 빠져 노력이 주목받지 못하거나 인정받지 못한다고 느낄 수 있습니다. 접근 방식을 바꾸거나 완전히 다른 길을 추구해야 하는지 고려하세요.",
        finance:
          "Investments may be underperforming or financial goals seem unreachable. Reevaluate your financial plans and consider whether your current approach is truly serving your long-term interests.",
        financeKo:
          "투자가 기대 이하이거나 재정 목표가 도달할 수 없어 보일 수 있습니다. 재정 계획을 재평가하고 현재 접근 방식이 진정으로 장기적 이익에 도움이 되는지 고려하세요.",
        health:
          "You may be frustrated with the slow pace of recovery or health improvement. Avoid the temptation to try extreme measures — consistency and patience remain your best medicine.",
        healthKo:
          "회복이나 건강 개선의 느린 속도에 좌절할 수 있습니다. 극단적인 수단을 시도하는 유혹을 피하세요 — 꾸준함과 인내가 여전히 최고의 약입니다.",
        spirituality:
          "Spiritual impatience may lead you to jump from practice to practice without giving any one approach enough time to work. Deepen rather than broaden your spiritual exploration.",
        spiritualityKo:
          "영적 조급함이 어떤 접근법에도 충분한 시간을 주지 않고 수련에서 수련으로 옮겨다니게 할 수 있습니다. 영적 탐구를 넓히기보다 깊이 파세요.",
      },
    },
    symbolism:
      "A farmer leans on his hoe, gazing thoughtfully at the vine-covered bush heavy with seven golden pentacles. His paused posture represents reflection and assessment, while the ripe pentacles symbolize the fruits of sustained labor waiting to be harvested.",
    symbolismKo:
      "농부가 괭이에 기대어 일곱 개의 금색 펜타클이 매달린 덩굴 덤불을 사려 깊게 바라봅니다. 멈춘 자세는 성찰과 평가를, 익은 펜타클은 수확을 기다리는 지속적 노동의 열매를 상징합니다.",
    advice:
      "Be patient with your progress. Great things take time to grow. Assess what is working, adjust what is not, and trust that your efforts will bear fruit.",
    adviceKo:
      "진전에 인내심을 가지세요. 위대한 것은 성장에 시간이 걸립니다. 무엇이 효과가 있는지 평가하고, 그렇지 않은 것은 조정하며, 노력이 결실을 맺을 것을 신뢰하세요.",
    yesOrNo: "maybe",
    numerology:
      "Seven (7) — The number of reflection, assessment, and the wisdom gained through patience and perseverance.",
    numerologyKo:
      "7 — 성찰, 평가, 그리고 인내와 끈기를 통해 얻는 지혜의 숫자입니다.",
    affirmation:
      "I trust the process and know that my patience will be rewarded.",
    affirmationKo: "나는 과정을 신뢰하고 인내가 보상받을 것임을 압니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A farmer leans on his hoe, contemplating a lush vine laden with seven ripe golden pentacles.",
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    nameKo: "펜타클의 8",
    arcana: "minor",
    suit: "pentacles",
    number: 8,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Virgo",
    zodiacKo: "처녀자리",
    keywords: {
      upright: [
        "diligence",
        "mastery",
        "skill development",
        "dedication",
        "craftsmanship",
      ],
      uprightKo: ["근면", "숙달", "기술 개발", "헌신", "장인정신"],
      reversed: [
        "perfectionism",
        "lack of motivation",
        "shortcuts",
        "sloppy work",
        "dead-end job",
      ],
      reversedKo: [
        "완벽주의",
        "동기 부족",
        "편법",
        "허술한 작업",
        "막다른 직업",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Eight of Pentacles is the card of the dedicated apprentice, focused on mastering a skill through disciplined, repetitive practice. Your commitment to excellence and continuous improvement will set you apart and lead to lasting success.",
        generalKo:
          "펜타클의 8은 규율 있는 반복 연습을 통해 기술을 마스터하는 데 집중하는 헌신적인 견습생의 카드입니다. 우수성과 지속적인 개선에 대한 당신의 헌신이 당신을 차별화하고 지속적인 성공으로 이끌 것입니다.",
        love: "You are putting real effort into building a healthy, lasting relationship. This dedicated approach to love — learning your partner's love language, improving communication — creates deep and enduring bonds.",
        loveKo:
          "건강하고 지속적인 관계를 구축하기 위해 진정한 노력을 기울이고 있습니다. 파트너의 사랑 언어를 배우고 소통을 개선하는 등 사랑에 대한 이 헌신적인 접근이 깊고 지속적인 유대를 만듭니다.",
        career:
          "This is an excellent time for professional development, training, or education. Your focus on skill-building and quality work will be noticed and rewarded. Mastery comes through dedicated practice.",
        careerKo:
          "전문성 개발, 훈련, 또는 교육에 훌륭한 시기입니다. 기술 향상과 양질의 작업에 대한 집중이 주목받고 보상받을 것입니다. 숙달은 헌신적인 연습을 통해 옵니다.",
        finance:
          "Financial rewards come through skilled, quality work. Investing in your education or training will yield excellent long-term financial returns. Focus on building genuine value.",
        financeKo:
          "숙련된 양질의 작업을 통해 재정적 보상이 옵니다. 교육이나 훈련에 투자하면 훌륭한 장기적 재정 수익을 거둘 것입니다. 진정한 가치를 구축하는 데 집중하세요.",
        health:
          "A disciplined approach to health is yielding steady improvement. Whether it is a new fitness program or consistent wellness habits, your dedicated effort is paying off in measurable ways.",
        healthKo:
          "건강에 대한 규율 있는 접근이 꾸준한 개선을 가져오고 있습니다. 새로운 피트니스 프로그램이든 꾸준한 건강 습관이든, 헌신적인 노력이 측정 가능한 방식으로 성과를 내고 있습니다.",
        spirituality:
          "Treat your spiritual practice like a craft to be refined. Daily meditation, study, and consistent rituals build a deep and rewarding spiritual foundation over time.",
        spiritualityKo:
          "영적 수련을 다듬어야 할 기술처럼 대하세요. 매일의 명상, 공부, 그리고 꾸준한 의식이 시간이 지남에 따라 깊고 보람 있는 영적 기반을 구축합니다.",
      },
      reversed: {
        general:
          "The reversed Eight of Pentacles suggests cutting corners, lack of motivation, or perfectionism that paralyzes progress. You may be in a dead-end situation where your skills are not growing or your work feels meaningless.",
        generalKo:
          "역방향 펜타클의 8은 편법, 동기 부족, 또는 진전을 마비시키는 완벽주의를 시사합니다. 기술이 성장하지 않거나 일이 무의미하게 느껴지는 막다른 상황에 처해 있을 수 있습니다.",
        love: "You may be going through the motions in your relationship without genuine effort. Complacency is the enemy of lasting love — rekindle your dedication to growing together.",
        loveKo:
          "진정한 노력 없이 관계에서 형식적으로 지내고 있을 수 있습니다. 안주는 지속적인 사랑의 적입니다 — 함께 성장하려는 헌신을 다시 불태우세요.",
        career:
          "Work has become tedious or you feel stuck doing tasks below your potential. Consider seeking new challenges, additional training, or a career change that reignites your passion for excellence.",
        careerKo:
          "일이 지루해지거나 잠재력 이하의 업무를 하고 있다고 느낍니다. 우수성에 대한 열정을 다시 불붙이는 새로운 도전, 추가 훈련, 또는 커리어 전환을 고려하세요.",
        finance:
          "Quick-money schemes or half-hearted financial efforts are yielding poor results. There are no shortcuts to sustainable wealth — recommit to building genuine skills and value.",
        financeKo:
          "빠른 돈 벌기 계획이나 반쪽짜리 재정적 노력이 저조한 결과를 내고 있습니다. 지속 가능한 부로의 지름길은 없습니다 — 진정한 기술과 가치를 구축하는 데 다시 전념하세요.",
        health:
          "You may be skipping workouts, cheating on your diet, or not following through on health commitments. Recommit to your wellness routine with renewed discipline and purpose.",
        healthKo:
          "운동을 건너뛰거나, 식단을 어기거나, 건강 약속을 지키지 않고 있을 수 있습니다. 새로운 규율과 목적으로 건강 루틴에 다시 전념하세요.",
        spirituality:
          "Your spiritual practice may have become rote and uninspiring. Seek fresh approaches or teachers to reinvigorate your connection to the divine.",
        spiritualityKo:
          "영적 수련이 기계적이고 영감이 없어졌을 수 있습니다. 신성과의 연결을 되살리기 위해 새로운 접근법이나 스승을 찾으세요.",
      },
    },
    symbolism:
      "A craftsman sits at his workbench, carefully engraving a pentacle while six completed pentacles hang in a row beside him and one more rests on the ground. His focused concentration and methodical work represent dedication to mastery, while the progressive line of finished work shows steady skill development.",
    symbolismKo:
      "장인이 작업대에 앉아 펜타클을 세심하게 새기고 있으며, 완성된 여섯 개의 펜타클이 옆에 나란히 걸려 있고 하나가 바닥에 놓여 있습니다. 집중된 주의와 체계적 작업은 숙달에 대한 헌신을, 완성품의 점진적 줄은 꾸준한 기술 발전을 보여줍니다.",
    advice:
      "Commit to excellence in whatever you do. Master your craft through persistent, focused effort — the rewards of true skill cannot be shortcut.",
    adviceKo:
      "무엇을 하든 우수성에 전념하세요. 지속적이고 집중된 노력으로 기술을 마스터하세요 — 진정한 실력의 보상에는 지름길이 없습니다.",
    yesOrNo: "yes",
    numerology:
      "Eight (8) — The number of mastery, discipline, and the power of focused, repetitive effort.",
    numerologyKo: "8 — 숙달, 규율, 그리고 집중된 반복 노력의 힘의 숫자입니다.",
    affirmation:
      "I am dedicated to mastering my craft and growing through every effort.",
    affirmationKo:
      "나는 기술을 마스터하고 모든 노력을 통해 성장하는 데 헌신합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A focused craftsman engraves a pentacle at his workbench with six completed ones displayed beside him.",
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    nameKo: "펜타클의 9",
    arcana: "minor",
    suit: "pentacles",
    number: 9,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Virgo",
    zodiacKo: "처녀자리",
    keywords: {
      upright: [
        "luxury",
        "self-sufficiency",
        "independence",
        "refinement",
        "accomplishment",
      ],
      uprightKo: ["사치", "자급자족", "독립", "세련", "성취"],
      reversed: [
        "overindulgence",
        "superficiality",
        "dependence",
        "loneliness",
        "financial setback",
      ],
      reversedKo: ["과도한 탐닉", "피상성", "의존", "외로움", "재정적 차질"],
    },
    meaning: {
      upright: {
        general:
          "The Nine of Pentacles celebrates self-made success, luxury earned through discipline, and the pleasure of enjoying the fruits of your labor. You have achieved a level of independence and refinement that allows you to savor life's comforts.",
        generalKo:
          "펜타클의 9는 자수성가한 성공, 규율을 통해 얻은 사치, 그리고 노동의 열매를 즐기는 기쁨을 축하합니다. 삶의 안락함을 만끽할 수 있는 독립과 세련의 수준에 도달했습니다.",
        love: "You are whole and complete on your own, which makes you an attractive and confident partner. If in a relationship, enjoy the finer things together. If single, appreciate your own company before seeking another.",
        loveKo:
          "당신은 혼자서도 온전하고 완전하며, 이것이 당신을 매력적이고 자신감 있는 파트너로 만듭니다. 관계 중이라면 함께 좋은 것들을 즐기세요. 싱글이라면 다른 사람을 찾기 전에 자신의 동반자를 감사히 여기세요.",
        career:
          "You have reached a professional milestone and can enjoy the rewards of your expertise. This is a time of accomplishment and recognition — your reputation speaks for itself.",
        careerKo:
          "전문적 이정표에 도달했고 전문성의 보상을 즐길 수 있습니다. 성취와 인정의 시기입니다 — 당신의 명성이 스스로를 대변합니다.",
        finance:
          "Financial independence and comfort are well deserved. You have managed your resources wisely and can now enjoy a lifestyle of abundance. Treat yourself — you have earned it.",
        financeKo:
          "재정적 독립과 안락함은 충분히 자격이 있습니다. 자원을 현명하게 관리해왔고 이제 풍요로운 생활 방식을 즐길 수 있습니다. 자신을 대접하세요 — 그럴 자격이 있습니다.",
        health:
          "Your investment in self-care and healthy living is paying off beautifully. Continue enjoying activities that nourish both body and soul — luxury wellness is not frivolous but deeply restorative.",
        healthKo:
          "자기 관리와 건강한 생활에 대한 투자가 아름답게 성과를 내고 있습니다. 몸과 영혼 모두를 양육하는 활동을 계속 즐기세요 — 럭셔리 웰니스는 사치가 아닌 깊은 회복입니다.",
        spirituality:
          "You have cultivated inner richness alongside material success. Spiritual abundance comes naturally when you live in alignment with your values and appreciate the beauty around you.",
        spiritualityKo:
          "물질적 성공과 함께 내면의 풍요를 가꾸어왔습니다. 가치관에 맞게 살고 주변의 아름다움을 감사할 때 영적 풍요가 자연스럽게 옵니다.",
      },
      reversed: {
        general:
          "The reversed Nine of Pentacles warns of superficial living, overindulgence, or a financial setback that threatens your independence. Success may be hollow if it comes at the cost of genuine connection and inner fulfillment.",
        generalKo:
          "역방향 펜타클의 9는 피상적인 삶, 과도한 탐닉, 또는 독립을 위협하는 재정적 차질을 경고합니다. 진정한 연결과 내면의 충만함을 희생하고 온 성공은 공허할 수 있습니다.",
        love: "Material comfort may be masking emotional emptiness in a relationship. Alternatively, dependence on a partner for financial security could be compromising your sense of self. Reclaim your autonomy.",
        loveKo:
          "물질적 안락이 관계에서의 감정적 공허함을 가리고 있을 수 있습니다. 또는 재정적 안전을 위한 파트너에 대한 의존이 자아감을 손상시킬 수 있습니다. 자율성을 되찾으세요.",
        career:
          "You may be enjoying the trappings of success without feeling genuinely fulfilled. The job pays well but lacks meaning. Consider what truly brings you professional satisfaction beyond the paycheck.",
        careerKo:
          "진정으로 충만하지 않으면서 성공의 겉치레를 즐기고 있을 수 있습니다. 직업이 돈은 잘 주지만 의미가 없습니다. 급여 너머에 무엇이 진정한 직업적 만족을 주는지 고려하세요.",
        finance:
          "Reckless spending, living beyond your means, or financial losses may threaten the comfortable lifestyle you have built. Reassess your spending habits and protect your financial independence.",
        financeKo:
          "무모한 지출, 수입 이상의 생활, 또는 재정적 손실이 구축한 안락한 생활 방식을 위협할 수 있습니다. 소비 습관을 재평가하고 재정적 독립을 지키세요.",
        health:
          "Overindulgence in rich foods, alcohol, or a sedentary luxury lifestyle may be undermining your health. Balance enjoyment with moderation and active self-care.",
        healthKo:
          "기름진 음식, 술, 또는 앉아서 하는 사치스러운 생활에 대한 과도한 탐닉이 건강을 해치고 있을 수 있습니다. 즐거움과 절제, 적극적인 자기 관리의 균형을 맞추세요.",
        spirituality:
          "Material success may have led you away from spiritual practice. Remember that true wealth includes inner peace and connection to something greater than possessions.",
        spiritualityKo:
          "물질적 성공이 영적 수련에서 멀어지게 했을 수 있습니다. 진정한 부에는 내면의 평화와 소유물보다 더 큰 것과의 연결이 포함된다는 것을 기억하세요.",
      },
    },
    symbolism:
      "An elegantly dressed woman stands in a lush vineyard, a hooded falcon resting on her gloved hand. Nine golden pentacles hang among the abundant grape vines. The falcon symbolizes self-discipline and intellectual control, while the flourishing garden represents the rewards of patient cultivation.",
    symbolismKo:
      "우아하게 차려입은 여인이 울창한 포도원에 서 있으며, 두건을 쓴 매가 장갑 낀 손에 앉아 있습니다. 아홉 개의 금색 펜타클이 풍성한 포도 넝쿨 사이에 걸려 있습니다. 매는 자기 규율과 지적 통제를, 풍성한 정원은 인내로운 재배의 보상을 상징합니다.",
    advice:
      "Enjoy the rewards you have worked so hard to achieve. You deserve this moment of luxury and independence — savor it with gratitude.",
    adviceKo:
      "열심히 노력해서 이룬 보상을 즐기세요. 이 사치와 독립의 순간을 누릴 자격이 있습니다 — 감사와 함께 만끽하세요.",
    yesOrNo: "yes",
    numerology:
      "Nine (9) — The number of attainment, completion, and the culmination of sustained effort.",
    numerologyKo: "9 — 달성, 완성, 그리고 지속적 노력의 정점의 숫자입니다.",
    affirmation:
      "I deserve the abundance I have created through my own dedication and effort.",
    affirmationKo:
      "나는 자신의 헌신과 노력으로 만든 풍요를 누릴 자격이 있습니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "An elegant woman with a falcon on her glove stands in a lush vineyard filled with nine golden pentacles.",
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    nameKo: "펜타클의 10",
    arcana: "minor",
    suit: "pentacles",
    number: 10,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Virgo",
    zodiacKo: "처녀자리",
    keywords: {
      upright: [
        "wealth",
        "legacy",
        "family",
        "inheritance",
        "long-term success",
      ],
      uprightKo: ["부", "유산", "가족", "상속", "장기적 성공"],
      reversed: [
        "family conflict",
        "financial failure",
        "instability",
        "loss of legacy",
        "broken traditions",
      ],
      reversedKo: [
        "가족 갈등",
        "재정적 실패",
        "불안정",
        "유산 상실",
        "깨진 전통",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Ten of Pentacles represents ultimate material fulfillment — wealth, family security, and the creation of a lasting legacy. You are building or enjoying something that will endure for generations and provide stability for those you love.",
        generalKo:
          "펜타클의 10은 궁극적인 물질적 충만 — 부, 가족의 안전, 그리고 지속적인 유산의 창조를 나타냅니다. 세대를 이어 지속되고 사랑하는 사람들에게 안정을 제공할 무언가를 구축하거나 즐기고 있습니다.",
        love: "A deeply committed, stable relationship that may include marriage, family, or long-term partnership. Love is intertwined with shared traditions, family approval, and building a life together that stands the test of time.",
        loveKo:
          "결혼, 가족, 또는 장기적 파트너십을 포함할 수 있는 깊이 헌신된 안정적인 관계입니다. 사랑은 공유된 전통, 가족의 승인, 그리고 시간의 시험을 견디는 삶을 함께 쌓는 것과 얽혀 있습니다.",
        career:
          "You have achieved lasting professional success — perhaps building a family business, reaching the pinnacle of your career, or establishing a professional reputation that opens doors for future generations.",
        careerKo:
          "지속적인 직업적 성공을 이루었습니다 — 아마도 가업을 구축하거나, 커리어의 정점에 도달하거나, 미래 세대에 문을 여는 전문적 명성을 확립했습니다.",
        finance:
          "This is the card of ultimate financial security — wealth that supports not just you but your entire family. Investments, real estate, and long-term financial planning are especially favored.",
        financeKo:
          "이것은 궁극적인 재정적 안전의 카드입니다 — 당신뿐만 아니라 온 가족을 지원하는 부입니다. 투자, 부동산, 장기 재정 계획이 특히 유리합니다.",
        health:
          "Your health benefits from a strong family and community support system. Generational health practices and family wellness traditions provide a solid foundation for your well-being.",
        healthKo:
          "강한 가족과 공동체 지원 시스템으로부터 건강이 혜택을 받습니다. 세대 간 건강 관행과 가족 건강 전통이 안녕을 위한 탄탄한 기반을 제공합니다.",
        spirituality:
          "Spiritual wisdom passed down through generations enriches your practice. Honor the traditions of your ancestors while creating new ones that will serve those who come after you.",
        spiritualityKo:
          "세대를 통해 전해진 영적 지혜가 수련을 풍요롭게 합니다. 조상의 전통을 존중하면서 후세에 도움이 될 새로운 전통을 만드세요.",
      },
      reversed: {
        general:
          "The reversed Ten of Pentacles indicates family conflicts, financial instability, or the loss of something you worked hard to build. Disputes over inheritance, broken family traditions, or a sudden reversal of fortune may be disrupting your sense of security.",
        generalKo:
          "역방향 펜타클의 10은 가족 갈등, 재정적 불안정, 또는 열심히 구축한 것의 상실을 나타냅니다. 상속 분쟁, 깨진 가족 전통, 또는 갑작스러운 운의 역전이 안전감을 흔들고 있을 수 있습니다.",
        love: "Family pressures or disapproval may be straining your relationship. Alternatively, a long-standing relationship may be shaken by financial problems or differing values about money and tradition.",
        loveKo:
          "가족의 압력이나 비난이 관계를 압박하고 있을 수 있습니다. 또는 오래된 관계가 재정 문제나 돈과 전통에 대한 다른 가치관으로 흔들릴 수 있습니다.",
        career:
          "A family business may be in trouble, or your professional legacy is at risk. Internal conflicts, poor succession planning, or financial mismanagement could undermine years of hard work.",
        careerKo:
          "가업이 어려움에 처하거나 전문적 유산이 위험에 처할 수 있습니다. 내부 갈등, 부실한 승계 계획, 또는 재정 관리 실패가 수년간의 노력을 약화시킬 수 있습니다.",
        finance:
          "Financial security is threatened by poor planning, family disputes over money, or investments that have gone wrong. Protect your assets and seek professional financial advice.",
        financeKo:
          "부실한 계획, 돈을 둘러싼 가족 분쟁, 또는 잘못된 투자로 재정적 안전이 위협받고 있습니다. 자산을 보호하고 전문 재정 조언을 구하세요.",
        health:
          "Family health issues or inherited conditions may need attention. Pay attention to genetic risk factors and take proactive steps toward prevention and early intervention.",
        healthKo:
          "가족 건강 문제나 유전적 조건에 주의가 필요할 수 있습니다. 유전적 위험 요인에 주의를 기울이고 예방과 조기 개입을 위한 적극적인 조치를 취하세요.",
        spirituality:
          "You may be questioning or breaking away from family spiritual traditions that no longer serve you. This can be painful but necessary for your authentic spiritual development.",
        spiritualityKo:
          "더 이상 도움이 되지 않는 가족의 영적 전통에 의문을 품거나 벗어나고 있을 수 있습니다. 이것은 고통스러울 수 있지만 진정한 영적 발전을 위해 필요합니다.",
      },
    },
    symbolism:
      "An elderly patriarch sits beneath an archway adorned with ten pentacles in the Tree of Life pattern, while a younger couple and a child stand nearby, with two dogs playing at their feet. The three generations represent legacy and continuity, while the architectural archway symbolizes the enduring structures we build for our families.",
    symbolismKo:
      "나이 든 가장이 생명의 나무 패턴으로 배열된 열 개의 펜타클로 장식된 아치 아래 앉아 있으며, 젊은 부부와 아이가 근처에 서 있고 두 마리의 개가 발치에서 놀고 있습니다. 세 세대는 유산과 연속성을, 건축 아치는 가족을 위해 구축하는 지속적인 구조물을 상징합니다.",
    advice:
      "Think beyond yourself — build something that will endure for generations. Your legacy is defined by what you create for those who come after you.",
    adviceKo:
      "자신을 넘어 생각하세요 — 세대를 이어 지속될 무언가를 구축하세요. 당신의 유산은 후세를 위해 만든 것으로 정의됩니다.",
    yesOrNo: "yes",
    numerology:
      "Ten (10) — The number of completion, fulfillment, and the full manifestation of material abundance across generations.",
    numerologyKo:
      "10 — 완성, 충만, 그리고 세대에 걸친 물질적 풍요의 완전한 실현의 숫자입니다.",
    affirmation:
      "I build lasting abundance that blesses my family for generations to come.",
    affirmationKo:
      "나는 다가올 세대에 가족을 축복하는 지속적인 풍요를 구축합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "An elderly man sits beneath a grand archway patterned with ten pentacles while three generations of family gather around him.",
  },
  {
    id: 74,
    name: "Page of Pentacles",
    nameKo: "펜타클의 시종",
    arcana: "minor",
    suit: "pentacles",
    number: 11,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus, Virgo, Capricorn",
    zodiacKo: "황소자리, 처녀자리, 염소자리",
    keywords: {
      upright: [
        "ambition",
        "studiousness",
        "new venture",
        "opportunity",
        "diligence",
      ],
      uprightKo: ["야망", "근면 학습", "새 사업", "기회", "근면"],
      reversed: [
        "procrastination",
        "lack of focus",
        "unrealistic goals",
        "laziness",
        "missed chance",
      ],
      reversedKo: [
        "미루기",
        "집중력 부족",
        "비현실적 목표",
        "게으름",
        "놓친 기회",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Page of Pentacles is the eager student of the material world — curious, ambitious, and ready to learn. A new financial or educational opportunity is presenting itself, and your diligent, methodical approach will help you make the most of it.",
        generalKo:
          "펜타클의 시종은 물질 세계의 열정적인 학생입니다 — 호기심 많고, 야심적이며, 배울 준비가 되어 있습니다. 새로운 재정적 또는 교육적 기회가 나타나고 있으며, 근면하고 체계적인 접근이 최대한 활용하는 데 도움이 됩니다.",
        love: "A new relationship may begin with a practical, grounded connection. You or a potential partner approaches love with sincerity and seriousness. Take things slow and build a solid foundation.",
        loveKo:
          "실용적이고 현실적인 연결로 새로운 관계가 시작될 수 있습니다. 당신 또는 잠재적 파트너가 진심과 진지함으로 사랑에 접근합니다. 천천히 가며 탄탄한 기반을 구축하세요.",
        career:
          "You are at the beginning of a new career path or educational journey. Embrace the learning curve with enthusiasm and remain open to mentorship opportunities that can accelerate your growth.",
        careerKo:
          "새로운 커리어 경로나 교육 여정의 시작에 있습니다. 열정으로 학습 곡선을 받아들이고 성장을 가속할 수 있는 멘토링 기회에 열린 마음을 유지하세요.",
        finance:
          "A promising financial opportunity is emerging — perhaps a scholarship, internship, or small investment that could grow. Do your research and approach it with the curiosity and diligence of a dedicated student.",
        financeKo:
          "유망한 재정적 기회가 떠오르고 있습니다 — 아마도 장학금, 인턴십, 또는 성장할 수 있는 소규모 투자일 수 있습니다. 조사를 하고 헌신적인 학생의 호기심과 근면함으로 접근하세요.",
        health:
          "A new interest in health and fitness, or the start of learning about nutrition and wellness. Your beginner's enthusiasm will carry you far if channeled into consistent healthy habits.",
        healthKo:
          "건강과 피트니스에 대한 새로운 관심, 또는 영양과 건강에 대해 배우기 시작합니다. 초심자의 열정을 꾸준한 건강 습관으로 전환하면 멀리까지 갈 수 있습니다.",
        spirituality:
          "Approach spiritual study with a beginner's mind. Read widely, ask questions, and stay grounded in practical application rather than getting lost in abstract theory.",
        spiritualityKo:
          "초심자의 마음으로 영적 공부에 접근하세요. 널리 읽고, 질문하고, 추상적 이론에 빠지기보다 실용적 적용에 기반을 두세요.",
      },
      reversed: {
        general:
          "The reversed Page of Pentacles warns of procrastination, unfocused energy, or unrealistic goals. You may be dreaming about success without taking the practical steps necessary to achieve it.",
        generalKo:
          "역방향 펜타클의 시종은 미루기, 분산된 에너지, 또는 비현실적 목표를 경고합니다. 달성하는 데 필요한 실질적인 단계를 밟지 않고 성공에 대해 꿈만 꾸고 있을 수 있습니다.",
        love: "Immaturity or lack of commitment may be hindering your love life. One or both partners may not be ready for the practical responsibilities that come with a serious relationship.",
        loveKo:
          "미성숙함이나 헌신 부족이 연애를 방해하고 있을 수 있습니다. 한쪽 또는 양쪽 파트너가 진지한 관계에 따르는 실질적인 책임을 감당할 준비가 되지 않았을 수 있습니다.",
        career:
          "You may be jumping from job to job or dropping out of educational programs before completing them. Focus and follow-through are needed to turn potential into actual achievement.",
        careerKo:
          "직업에서 직업으로 옮기거나 교육 프로그램을 완료하기 전에 중퇴하고 있을 수 있습니다. 잠재력을 실제 성취로 바꾸려면 집중과 끈기가 필요합니다.",
        finance:
          "Financial planning is nonexistent or poorly executed. Stop daydreaming about wealth and start taking concrete, measurable steps toward financial literacy and stability.",
        financeKo:
          "재정 계획이 없거나 부실하게 실행되고 있습니다. 부에 대한 공상을 멈추고 재정 지식과 안정을 향한 구체적이고 측정 가능한 단계를 밟기 시작하세요.",
        health:
          "Good health intentions that never translate into action. You may keep planning to start a fitness routine or diet but never follow through. Start small and commit to just one change.",
        healthKo:
          "결코 행동으로 옮겨지지 않는 좋은 건강 의도입니다. 피트니스 루틴이나 식단을 시작하려고 계속 계획하지만 실행하지 않을 수 있습니다. 작게 시작하고 단 하나의 변화에 전념하세요.",
        spirituality:
          "Spiritual curiosity without depth — collecting ideas and books without actually practicing. Choose one path and commit to studying and applying it consistently.",
        spiritualityKo:
          "깊이 없는 영적 호기심 — 실제로 수련하지 않으면서 아이디어와 책을 모읍니다. 하나의 길을 선택하고 꾸준히 공부하고 적용하는 데 전념하세요.",
      },
    },
    symbolism:
      "A young person stands in a green field, gazing intently at a single golden pentacle held aloft in both hands. Plowed fields stretch behind them, and distant mountains promise future challenges. The Page's focused gaze represents studious concentration, while the fertile landscape symbolizes untapped potential.",
    symbolismKo:
      "젊은이가 녹색 들판에 서서 두 손으로 높이 든 금색 펜타클 하나를 열심히 바라봅니다. 뒤에 경작된 밭이 펼쳐지고 먼 산은 미래의 도전을 약속합니다. 시종의 집중된 시선은 학구적 집중을, 비옥한 풍경은 아직 개발되지 않은 잠재력을 상징합니다.",
    advice:
      "Approach this new opportunity with curiosity and dedication. Be willing to start at the beginning and learn — every master was once a beginner.",
    adviceKo:
      "이 새로운 기회에 호기심과 헌신으로 접근하세요. 처음부터 시작하고 배울 의지를 가지세요 — 모든 대가도 한때는 초심자였습니다.",
    yesOrNo: "yes",
    numerology:
      "Eleven (11) — The Page represents youthful energy, new beginnings in study, and the initial spark of material ambition.",
    numerologyKo:
      "11 — 시종은 젊은 에너지, 학습의 새로운 시작, 그리고 물질적 야망의 첫 불꽃을 나타냅니다.",
    affirmation:
      "I am a dedicated student of life, eager to learn and grow every day.",
    affirmationKo:
      "나는 매일 배우고 성장하기를 열망하는 삶의 헌신적인 학생입니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A studious youth gazes at a golden pentacle held aloft in a green field with plowed earth and distant mountains.",
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    nameKo: "펜타클의 기사",
    arcana: "minor",
    suit: "pentacles",
    number: 12,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Virgo",
    zodiacKo: "처녀자리",
    keywords: {
      upright: [
        "reliability",
        "hard work",
        "methodical",
        "persistence",
        "responsibility",
      ],
      uprightKo: ["신뢰성", "근면", "체계적", "끈기", "책임감"],
      reversed: [
        "stubbornness",
        "boredom",
        "stagnation",
        "workaholism",
        "resistance to change",
      ],
      reversedKo: ["고집", "지루함", "정체", "일중독", "변화에 대한 저항"],
    },
    meaning: {
      upright: {
        general:
          "The Knight of Pentacles is the most reliable and hardworking of all the knights. He may not be flashy, but his methodical, persistent approach ensures that every task is completed to the highest standard. Slow and steady wins this race.",
        generalKo:
          "펜타클의 기사는 모든 기사 중 가장 신뢰할 수 있고 근면합니다. 화려하지는 않지만, 체계적이고 끈기 있는 접근으로 모든 작업이 최고 수준으로 완수됩니다. 느리고 꾸준한 것이 이 경주에서 이깁니다.",
        love: "A loyal, dependable partner who shows love through actions rather than grand gestures. If dating, someone reliable and steady may enter your life. Value consistency over excitement.",
        loveKo:
          "거창한 제스처보다 행동으로 사랑을 보여주는 충실하고 믿을 수 있는 파트너입니다. 데이트 중이라면 신뢰할 수 있고 안정적인 사람이 삶에 들어올 수 있습니다. 흥분보다 일관성을 가치 있게 여기세요.",
        career:
          "Your steady, reliable work ethic is your greatest asset. Continue showing up consistently, meeting deadlines, and producing quality work. Promotions and recognition come to those who prove they can be counted on.",
        careerKo:
          "꾸준하고 신뢰할 수 있는 직업 윤리가 가장 큰 자산입니다. 꾸준히 출근하고, 마감을 지키고, 양질의 작업을 계속 생산하세요. 의지할 수 있음을 증명하는 사람에게 승진과 인정이 옵니다.",
        finance:
          "A conservative, methodical approach to finances serves you well. Regular savings contributions, careful budgeting, and avoiding impulsive purchases build lasting financial security.",
        financeKo:
          "보수적이고 체계적인 재정 접근이 도움이 됩니다. 정기적인 저축, 신중한 예산, 충동 구매 회피가 지속적인 재정적 안전을 구축합니다.",
        health:
          "A consistent, routine-based approach to health yields the best results for you. Follow your exercise schedule, meal plan, and wellness routine with unwavering discipline.",
        healthKo:
          "일관된 루틴 기반의 건강 접근이 최고의 결과를 가져옵니다. 흔들림 없는 규율로 운동 일정, 식사 계획, 건강 루틴을 따르세요.",
        spirituality:
          "A grounded, practical spirituality suits you best. Daily rituals, nature connection, and earth-based practices provide the spiritual nourishment you need.",
        spiritualityKo:
          "기반이 탄탄한 실용적 영성이 가장 잘 맞습니다. 매일의 의식, 자연과의 연결, 대지 기반 수련이 필요한 영적 양분을 제공합니다.",
      },
      reversed: {
        general:
          "The reversed Knight of Pentacles warns of stubbornness, stagnation, or becoming so focused on routine that you miss the bigger picture. Your reliability may have tipped into rigidity, and your caution into resistance to necessary change.",
        generalKo:
          "역방향 펜타클의 기사는 고집, 정체, 또는 루틴에 너무 집중하여 큰 그림을 놓치는 것을 경고합니다. 신뢰성이 경직으로, 조심성이 필요한 변화에 대한 저항으로 변했을 수 있습니다.",
        love: "The relationship may feel stuck in a rut — predictable, boring, or lacking passion. Both partners need to make effort to inject spontaneity and excitement into the routine.",
        loveKo:
          "관계가 수렁에 빠진 느낌일 수 있습니다 — 예측 가능하고, 지루하거나, 열정이 부족합니다. 두 파트너 모두 루틴에 자발성과 흥분을 주입하는 노력이 필요합니다.",
        career:
          "You may be stuck in a job that offers security but no growth or fulfillment. Workaholism without purpose is as harmful as laziness. Consider whether it is time for a change.",
        careerKo:
          "안전은 제공하지만 성장이나 충만함이 없는 직업에 갇혀 있을 수 있습니다. 목적 없는 일중독은 게으름만큼 해롭습니다. 변화할 때인지 고려하세요.",
        finance:
          "Being overly conservative with money may mean missing growth opportunities. While caution is wise, hoarding every penny out of fear prevents your wealth from growing.",
        financeKo:
          "돈에 대해 지나치게 보수적이면 성장 기회를 놓칠 수 있습니다. 조심성은 현명하지만, 두려움으로 한 푼도 쓰지 않으면 부의 성장을 방해합니다.",
        health:
          "An overly rigid health routine may be causing more stress than benefit, or conversely, complete laziness about physical wellness. Find the healthy middle ground between discipline and flexibility.",
        healthKo:
          "지나치게 경직된 건강 루틴이 이득보다 스트레스를 더 유발하거나, 반대로 신체적 건강에 대한 완전한 게으름이 있을 수 있습니다. 규율과 유연성 사이의 건강한 중간 지점을 찾으세요.",
        spirituality:
          "Your spiritual practice may have become a rigid duty rather than a living connection. Allow spontaneity and emotion back into your practice alongside discipline.",
        spiritualityKo:
          "영적 수련이 살아있는 연결보다 경직된 의무가 되었을 수 있습니다. 규율과 함께 자발성과 감정을 다시 수련에 허용하세요.",
      },
    },
    symbolism:
      "A knight sits atop a steady dark horse that stands perfectly still, holding a single pentacle and gazing at it with patient determination. Unlike the other charging knights, this one is motionless — representing careful deliberation before action, and the value of a measured, thoughtful approach.",
    symbolismKo:
      "기사가 완벽하게 정지한 튼튼한 검은 말 위에 앉아 하나의 펜타클을 들고 인내심 있는 결의로 바라봅니다. 다른 돌진하는 기사들과 달리 이 기사는 움직이지 않으며 — 행동 전의 신중한 숙고와 절제되고 사려 깊은 접근의 가치를 나타냅니다.",
    advice:
      "Be the person others can count on. Show up, do the work, and let your consistent effort speak louder than words.",
    adviceKo:
      "다른 사람들이 의지할 수 있는 사람이 되세요. 나타나고, 일하고, 일관된 노력이 말보다 크게 말하게 하세요.",
    yesOrNo: "yes",
    numerology:
      "Twelve (12) — The Knight represents dedicated action, service, and the pursuit of material goals through unwavering effort.",
    numerologyKo:
      "12 — 기사는 헌신적인 행동, 봉사, 그리고 흔들림 없는 노력을 통한 물질적 목표 추구를 나타냅니다.",
    affirmation:
      "I am steady, reliable, and committed to doing excellent work every day.",
    affirmationKo:
      "나는 안정적이고 신뢰할 수 있으며 매일 훌륭한 작업을 하는 데 전념합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A patient knight on a sturdy dark horse stands still in a plowed field, contemplating a single golden pentacle.",
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    nameKo: "펜타클의 여왕",
    arcana: "minor",
    suit: "pentacles",
    number: 13,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Capricorn",
    zodiacKo: "염소자리",
    keywords: {
      upright: [
        "nurturing",
        "abundance",
        "practicality",
        "warm-hearted",
        "home-maker",
      ],
      uprightKo: ["양육", "풍요", "실용성", "따뜻한 마음", "가정 경영"],
      reversed: [
        "codependency",
        "smothering",
        "neglect of self",
        "financial insecurity",
        "work-life imbalance",
      ],
      reversedKo: [
        "공의존",
        "과잉보호",
        "자기 방치",
        "재정적 불안",
        "일-삶 불균형",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Queen of Pentacles is the embodiment of nurturing abundance — a warm, practical, and generous soul who creates comfort and security for everyone around her. She balances the material and emotional worlds with grace and competence.",
        generalKo:
          "펜타클의 여왕은 양육하는 풍요의 화신입니다 — 주변 모든 사람에게 편안함과 안전을 만들어주는 따뜻하고, 실용적이며, 관대한 영혼입니다. 물질적 세계와 감정적 세계를 우아함과 능숙함으로 균형 잡습니다.",
        love: "A deeply nurturing and supportive partner who creates a warm, loving home. If single, you are attracting someone who values stability, comfort, and genuine care. Love is expressed through practical acts of kindness.",
        loveKo:
          "따뜻하고 사랑스러운 가정을 만드는 깊이 양육하고 지지하는 파트너입니다. 싱글이라면 안정, 편안함, 진정한 배려를 중시하는 사람을 끌어당기고 있습니다. 사랑은 실질적인 친절의 행동으로 표현됩니다.",
        career:
          "You bring warmth and practicality to your professional life. Whether running a business or managing a team, your ability to nurture growth while maintaining practical standards sets you apart.",
        careerKo:
          "전문적 삶에 따뜻함과 실용성을 가져옵니다. 사업을 운영하든 팀을 관리하든, 실용적 기준을 유지하면서 성장을 양육하는 능력이 당신을 차별화합니다.",
        finance:
          "You are an excellent manager of resources, creating abundance through practical wisdom and generosity. Your home is comfortable, your family is provided for, and you still manage to share your wealth with others.",
        financeKo:
          "실용적 지혜와 관대함으로 풍요를 만드는 훌륭한 자원 관리자입니다. 가정이 편안하고, 가족이 보살핌을 받으며, 여전히 다른 사람과 부를 나눌 수 있습니다.",
        health:
          "Taking care of your health through nourishing food, comfortable living, and practical self-care routines. You intuitively know what your body needs and provide it with loving attention.",
        healthKo:
          "영양가 있는 음식, 편안한 생활, 실용적인 자기 관리 루틴으로 건강을 돌봅니다. 직감적으로 몸이 무엇을 필요로 하는지 알고 사랑하는 관심으로 제공합니다.",
        spirituality:
          "Your spirituality is grounded, practical, and connected to the earth. Gardening, cooking, creating a beautiful home — these everyday acts are your spiritual practice and meditation.",
        spiritualityKo:
          "영성이 기반이 탄탄하고, 실용적이며, 대지와 연결되어 있습니다. 정원 가꾸기, 요리, 아름다운 가정 만들기 — 이 일상의 행위들이 당신의 영적 수련이자 명상입니다.",
      },
      reversed: {
        general:
          "The reversed Queen of Pentacles warns of codependency, neglecting your own needs while caring for others, or losing yourself in domestic responsibilities. You may also be experiencing financial insecurity that threatens your sense of stability.",
        generalKo:
          "역방향 펜타클의 여왕은 공의존, 다른 사람을 돌보면서 자신의 필요를 소홀히 하기, 또는 가정 책임에 자신을 잃는 것을 경고합니다. 안정감을 위협하는 재정적 불안을 경험하고 있을 수도 있습니다.",
        love: "You may be giving too much in the relationship at the expense of your own well-being. Smothering love or controlling behavior through care-taking can push your partner away.",
        loveKo:
          "자신의 안녕을 희생하면서 관계에서 너무 많이 주고 있을 수 있습니다. 과잉보호적 사랑이나 돌봄을 통한 통제 행동이 파트너를 밀어낼 수 있습니다.",
        career:
          "Work-life balance is severely off. You may be sacrificing career ambitions for domestic responsibilities or vice versa. Neither extreme serves you — find a sustainable middle path.",
        careerKo:
          "일-삶 균형이 심하게 무너졌습니다. 가정 책임을 위해 커리어 야망을 희생하거나 그 반대일 수 있습니다. 어느 극단도 도움이 되지 않습니다 — 지속 가능한 중간 길을 찾으세요.",
        finance:
          "Financial insecurity, poor money management, or dependence on others for material support. It is time to develop your own financial literacy and independence.",
        financeKo:
          "재정적 불안, 부실한 자금 관리, 또는 물질적 지원을 위한 타인에 대한 의존입니다. 자신만의 재정 지식과 독립을 개발할 때입니다.",
        health:
          "Neglecting your own health while caring for everyone else. You cannot pour from an empty cup. Prioritize your physical and emotional needs alongside those of your loved ones.",
        healthKo:
          "다른 사람을 돌보면서 자신의 건강을 소홀히 하고 있습니다. 빈 컵에서 부을 수 없습니다. 사랑하는 사람들의 필요와 함께 자신의 신체적, 감정적 필요도 우선시하세요.",
        spirituality:
          "Material worries may be crowding out spiritual practice. Reconnect with the earth and simple pleasures that ground your spirit and restore your inner peace.",
        spiritualityKo:
          "물질적 걱정이 영적 수련을 밀어내고 있을 수 있습니다. 정신에 기반을 두고 내면의 평화를 회복하는 대지와 단순한 즐거움에 다시 연결하세요.",
      },
    },
    symbolism:
      "A queen sits on a throne adorned with carvings of fruit and angels, cradling a golden pentacle in her lap amidst a flourishing garden. A rabbit sits at her feet, symbolizing fertility and abundance. Her lush surroundings represent the nurturing environment she creates through practical care and generosity.",
    symbolismKo:
      "여왕이 과일과 천사 조각으로 장식된 왕좌에 앉아 풍성한 정원 가운데에서 금색 펜타클을 무릎에 안고 있습니다. 토끼가 발치에 앉아 풍요와 다산을 상징합니다. 울창한 주변 환경은 실질적인 배려와 관대함으로 만들어낸 양육 환경을 나타냅니다.",
    advice:
      "Create a warm, abundant environment for yourself and those you love, but remember to nurture yourself as generously as you nurture others.",
    adviceKo:
      "자신과 사랑하는 사람들을 위해 따뜻하고 풍요로운 환경을 만들되, 다른 사람을 양육하는 만큼 관대하게 자신도 양육하는 것을 기억하세요.",
    yesOrNo: "yes",
    numerology:
      "Thirteen (13) — The Queen represents mature nurturing energy, mastery of the material realm, and the wisdom to create lasting abundance.",
    numerologyKo:
      "13 — 여왕은 성숙한 양육 에너지, 물질 세계의 숙달, 그리고 지속적인 풍요를 만드는 지혜를 나타냅니다.",
    affirmation:
      "I create abundance, comfort, and warmth for myself and everyone I love.",
    affirmationKo:
      "나는 자신과 사랑하는 모든 사람을 위해 풍요, 편안함, 그리고 따뜻함을 만듭니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A warm queen cradles a pentacle in her lap on a throne surrounded by a lush garden, with a rabbit at her feet.",
  },
  {
    id: 77,
    name: "King of Pentacles",
    nameKo: "펜타클의 왕",
    arcana: "minor",
    suit: "pentacles",
    number: 14,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus",
    zodiacKo: "황소자리",
    keywords: {
      upright: ["wealth", "leadership", "security", "discipline", "provider"],
      uprightKo: ["부", "리더십", "안전", "규율", "부양자"],
      reversed: [
        "greed",
        "materialism",
        "corruption",
        "stubbornness",
        "financial ruin",
      ],
      reversedKo: ["탐욕", "물질주의", "부패", "고집", "재정적 파멸"],
    },
    meaning: {
      upright: {
        general:
          "The King of Pentacles has mastered the material world through discipline, wise management, and enduring effort. He represents ultimate financial success, strong leadership, and the ability to provide abundantly for himself and others. His wealth is built on a foundation of integrity and hard work.",
        generalKo:
          "펜타클의 왕은 규율, 현명한 관리, 그리고 지속적인 노력을 통해 물질 세계를 마스터했습니다. 그는 궁극적인 재정적 성공, 강한 리더십, 그리고 자신과 다른 사람들을 풍족하게 부양하는 능력을 나타냅니다. 그의 부는 성실과 근면의 기반 위에 세워졌습니다.",
        love: "A stable, generous, and protective partner who provides security and comfort. This is a mature love built on mutual respect, shared values, and a solid material foundation that allows the relationship to flourish.",
        loveKo:
          "안전과 편안함을 제공하는 안정적이고, 관대하며, 보호적인 파트너입니다. 이것은 상호 존중, 공유된 가치, 관계가 번창할 수 있게 하는 단단한 물질적 기반 위에 세워진 성숙한 사랑입니다.",
        career:
          "You are at the pinnacle of professional success or moving toward it. Leadership roles, business ownership, or senior management positions are strongly indicated. Your experience and wisdom guide others.",
        careerKo:
          "전문적 성공의 정점에 있거나 그를 향해 나아가고 있습니다. 리더십 역할, 사업 소유, 또는 고위 관리 직위가 강하게 나타납니다. 당신의 경험과 지혜가 다른 사람들을 안내합니다.",
        finance:
          "Peak financial success. Your investments are thriving, your business is profitable, and you have the Midas touch when it comes to money management. Continue building wealth wisely and sharing it generously.",
        financeKo:
          "최고의 재정적 성공입니다. 투자가 번창하고, 사업이 수익성 있으며, 자금 관리에 관해 황금의 손을 가지고 있습니다. 현명하게 부를 계속 쌓고 관대하게 나누세요.",
        health:
          "Robust health supported by the resources to maintain it well. You can afford the best care, nutritious food, and comfortable living conditions that support long-term physical vitality.",
        healthKo:
          "잘 유지할 수 있는 자원으로 뒷받침되는 건장한 건강입니다. 장기적 신체 활력을 지원하는 최고의 관리, 영양가 있는 음식, 편안한 생활 조건을 감당할 수 있습니다.",
        spirituality:
          "Your spiritual practice is grounded, mature, and deeply connected to the earth. You understand that true spirituality includes responsible stewardship of the material world.",
        spiritualityKo:
          "영적 수련이 기반이 탄탄하고, 성숙하며, 대지와 깊이 연결되어 있습니다. 진정한 영성에는 물질 세계의 책임 있는 관리가 포함된다는 것을 이해합니다.",
      },
      reversed: {
        general:
          "The reversed King of Pentacles warns of greed, corruption, or using wealth and power unethically. Material success may have come at the cost of personal relationships, health, or integrity. The shadow side of success is consuming you.",
        generalKo:
          "역방향 펜타클의 왕은 탐욕, 부패, 또는 부와 권력을 비윤리적으로 사용하는 것을 경고합니다. 물질적 성공이 개인 관계, 건강, 또는 성실함의 비용으로 왔을 수 있습니다. 성공의 그림자가 당신을 소비하고 있습니다.",
        love: "Using wealth as a means of control in relationships, or a partner who is emotionally unavailable due to work obsession. Money cannot buy love, and material generosity does not substitute for emotional presence.",
        loveKo:
          "관계에서 통제 수단으로 부를 사용하거나, 일에 대한 집착으로 감정적으로 부재하는 파트너입니다. 돈으로 사랑을 살 수 없으며, 물질적 관대함이 감정적 존재를 대신하지 않습니다.",
        career:
          "Professional success built on unethical foundations, exploiting workers, or cutting corners for profit. A financial scandal or leadership failure may be brewing. Realign your practices with your integrity.",
        careerKo:
          "비윤리적 기반 위에 세워진 직업적 성공, 노동자 착취, 또는 이익을 위한 편법입니다. 재정 스캔들이나 리더십 실패가 임박할 수 있습니다. 당신의 관행을 성실함과 재조정하세요.",
        finance:
          "Financial ruin through greed, poor management, or unethical dealings. Alternatively, an obsessive focus on money at the expense of everything else. Remember that wealth without purpose or integrity is meaningless.",
        financeKo:
          "탐욕, 부실한 관리, 또는 비윤리적 거래로 인한 재정적 파멸입니다. 또는 다른 모든 것을 희생하면서 돈에 대한 집착입니다. 목적이나 성실함 없는 부는 무의미하다는 것을 기억하세요.",
        health:
          "Overwork and stress from financial pursuits are damaging your health. Neglecting physical well-being in the name of building wealth is a dangerous trade-off that will eventually catch up with you.",
        healthKo:
          "재정적 추구로 인한 과로와 스트레스가 건강을 해치고 있습니다. 부를 쌓는 명목으로 신체적 안녕을 소홀히 하는 것은 결국 따라잡는 위험한 거래입니다.",
        spirituality:
          "Material obsession has disconnected you from spiritual truth. The pursuit of wealth has become your religion, and it is an empty one. Reconnect with what truly nourishes your soul.",
        spiritualityKo:
          "물질적 집착이 영적 진실에서 단절시켰습니다. 부의 추구가 종교가 되었고, 그것은 공허한 것입니다. 영혼을 진정으로 양육하는 것과 다시 연결하세요.",
      },
    },
    symbolism:
      "A powerful king sits on a throne decorated with bull carvings, wearing a robe embroidered with grape vines, and holding a golden scepter and pentacle. His castle towers behind him amidst abundant gardens. The bull represents Taurus and earthly power, while the vines and gardens symbolize the wealth he has cultivated through patient, wise stewardship.",
    symbolismKo:
      "강력한 왕이 황소 조각으로 장식된 왕좌에 앉아 포도 넝쿨이 수놓인 로브를 입고, 금색 홀과 펜타클을 들고 있습니다. 풍성한 정원 가운데 성이 뒤에 우뚝 서 있습니다. 황소는 황소자리와 현세적 권력을, 넝쿨과 정원은 인내심 있고 현명한 관리를 통해 가꾼 부를 상징합니다.",
    advice:
      "Lead with integrity and use your wealth and influence to create lasting good. True kingship is measured not by what you accumulate but by what you build for others.",
    adviceKo:
      "성실함으로 이끌고 부와 영향력을 지속적인 선을 만드는 데 사용하세요. 진정한 왕의 자격은 축적한 것이 아니라 다른 사람을 위해 만든 것으로 측정됩니다.",
    yesOrNo: "yes",
    numerology:
      "Fourteen (14) — The King represents the fullest expression of earthly mastery, leadership through wisdom, and the pinnacle of material achievement.",
    numerologyKo:
      "14 — 왕은 현세적 숙달의 가장 완전한 표현, 지혜를 통한 리더십, 그리고 물질적 성취의 정점을 나타냅니다.",
    affirmation:
      "I am a wise steward of abundance, building wealth with integrity and generosity.",
    affirmationKo:
      "나는 풍요의 현명한 관리자이며, 성실함과 관대함으로 부를 구축합니다.",
    cardBackEmoji: "💎",
    visualDescription:
      "A regal king with bull-carved throne sits amid abundant gardens, holding a golden scepter and pentacle with his castle behind him.",
  },
];
